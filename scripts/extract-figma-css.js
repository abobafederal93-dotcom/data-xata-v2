// node scripts/extract-figma-css.js
// Extracts precise CSS data from Figma JSON nodes
const fs = require('fs');
const path = require('path');

const DESKTOP_SRC = path.join(__dirname, '..', 'figma-nodes-desktop.json');
const MOBILE_SRC  = path.join(__dirname, '..', 'figma-nodes-mobile.json');
const OUT_DIR     = path.join(__dirname, '..', 'figma-css');
fs.mkdirSync(OUT_DIR, { recursive: true });

const DESKTOP_PAGES = {
  '92:322':   'main',
  '80:2920':  'search',
  '80:7901':  'order',
  '1401:389': 'details',
  '80:15388': 'error',
  '80:15712': 'article',
  '80:19147': 'menu',
};
const MOBILE_PAGES = {
  '80:19897': 'mobile-main',
  '80:20396': 'mobile-search',
  '80:22097': 'mobile-order',
  '80:22860': 'mobile-error',
  '80:23177': 'mobile-article',
  '689:322':  'mobile-details',
};

function rgba(c, opacity) {
  if (!c) return 'transparent';
  const a = (opacity !== undefined ? opacity : (c.a ?? 1));
  return `rgba(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)},${+a.toFixed(3)})`;
}

function fillToCss(fills) {
  if (!fills || !fills.length) return null;
  const f = fills.find(x => x.visible !== false) || fills[0];
  if (!f) return null;
  if (f.type === 'SOLID') return rgba(f.color, f.opacity);
  if (f.type === 'GRADIENT_LINEAR') {
    const stops = f.gradientStops.map(s => `${rgba(s.color)} ${(s.position*100).toFixed(1)}%`).join(', ');
    const [p0, p1] = f.gradientHandlePositions || [{x:0,y:0},{x:0,y:1}];
    const angle = ((Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI) + 90 + 360) % 360;
    return `linear-gradient(${angle.toFixed(0)}deg, ${stops})`;
  }
  if (f.type === 'IMAGE') return `image-fill:${f.imageRef}`;
  return f.type;
}

function effectsCss(effects) {
  if (!effects) return null;
  const shadows = effects
    .filter(e => e.visible !== false && (e.type==='DROP_SHADOW'||e.type==='INNER_SHADOW'))
    .map(e => `${e.type==='INNER_SHADOW'?'inset ':''}${e.offset.x}px ${e.offset.y}px ${e.radius}px ${e.spread||0}px ${rgba(e.color)}`);
  return shadows.length ? shadows.join(', ') : null;
}

function strokeCss(node) {
  if (!node.strokes || !node.strokes.length) return null;
  const s = node.strokes[0];
  return `${node.strokeWeight||1}px solid ${rgba(s.color)}`;
}

function relBox(node, parentBox) {
  const b = node.absoluteBoundingBox;
  if (!b) return null;
  const pb = parentBox || {x: b.x, y: b.y};
  return {
    x: Math.round(b.x - pb.x),
    y: Math.round(b.y - pb.y),
    w: Math.round(b.width),
    h: Math.round(b.height),
  };
}

function describe(node, parentBox) {
  const box = relBox(node, parentBox);
  if (!box) return null;

  const o = {
    id:   node.id,
    name: node.name,
    type: node.type,
    ...box,
  };

  // Auto-layout
  if (node.layoutMode && node.layoutMode !== 'NONE') {
    o.layout = node.layoutMode === 'HORIZONTAL' ? 'flex-row' : 'flex-col';
    o.gap    = node.itemSpacing || 0;
    o.pad    = [node.paddingTop||0, node.paddingRight||0, node.paddingBottom||0, node.paddingLeft||0];
    if (node.primaryAxisAlignItems)   o.justify = node.primaryAxisAlignItems;
    if (node.counterAxisAlignItems)   o.align   = node.counterAxisAlignItems;
    if (node.layoutWrap === 'WRAP')   o.wrap    = true;
  }

  // Sizing
  if (node.layoutSizingHorizontal) o.sizingH = node.layoutSizingHorizontal;
  if (node.layoutSizingVertical)   o.sizingV = node.layoutSizingVertical;

  // Background
  const bg = fillToCss(node.fills);
  if (bg) o.bg = bg;

  // Border-radius
  if (node.rectangleCornerRadii) {
    o.radius = node.rectangleCornerRadii; // [TL, TR, BR, BL]
  } else if (node.cornerRadius) {
    o.radius = node.cornerRadius;
  }

  // Border
  const border = strokeCss(node);
  if (border) o.border = border;

  // Shadow
  const shadow = effectsCss(node.effects);
  if (shadow) o.shadow = shadow;

  // Opacity
  if (node.opacity !== undefined && node.opacity < 1) o.opacity = node.opacity;

  // Text
  if (node.type === 'TEXT' && node.style) {
    const s = node.style;
    o.text = {
      family: s.fontFamily,
      size:   s.fontSize,
      weight: s.fontWeight,
      lh:     Math.round(s.lineHeightPx || s.fontSize * 1.2),
      ls:     s.letterSpacing || 0,
      align:  s.textAlignHorizontal,
      color:  rgba(node.fills?.[0]?.color, node.fills?.[0]?.opacity),
      value:  (node.characters || '').replace(/\n/g, '↵').substring(0, 120),
    };
  }

  return o;
}

function walk(node, parentBox, depth, lines, maxDepth) {
  if (depth > maxDepth) return;
  // Skip pure decorative vectors at deep levels
  if (depth > 3 && (node.type === 'VECTOR' || node.type === 'BOOLEAN_OPERATION')) return;

  const d = describe(node, parentBox);
  if (!d) return;

  const indent = '  '.repeat(depth);
  lines.push(indent + JSON.stringify(d));

  const nextParent = node.absoluteBoundingBox || parentBox;
  for (const c of (node.children || [])) {
    walk(c, nextParent, depth + 1, lines, maxDepth);
  }
}

function processFile(srcPath, pages, suffix) {
  if (!fs.existsSync(srcPath)) { console.log('MISSING:', srcPath); return; }
  const file = JSON.parse(fs.readFileSync(srcPath, 'utf8'));

  for (const [id, name] of Object.entries(pages)) {
    const root = file.nodes[id]?.document;
    if (!root) { console.log('MISSING node:', id, name); continue; }

    const outPath = path.join(OUT_DIR, `${name}.txt`);
    fs.writeFileSync(outPath, '');

    // Write page header
    const b = root.absoluteBoundingBox || {};
    fs.appendFileSync(outPath, `=== ${name.toUpperCase()} (${id}) ${Math.round(b.width||0)}x${Math.round(b.height||0)} ===\n\n`);

    // Process sections (top-level children)
    const sections = (root.children || []).filter(c =>
      c.absoluteBoundingBox &&
      (c.type === 'FRAME' || c.type === 'GROUP' || c.type === 'INSTANCE' || c.type === 'COMPONENT')
    );

    for (const sec of sections) {
      const lines = [`### ${sec.name} [${sec.id}] ###`];
      walk(sec, sec.absoluteBoundingBox, 0, lines, 5);
      fs.appendFileSync(outPath, lines.join('\n') + '\n\n');
    }

    const stat = fs.statSync(outPath);
    console.log(`Written ${name}.txt (${(stat.size/1024).toFixed(0)}KB)`);
  }
}

processFile(DESKTOP_SRC, DESKTOP_PAGES, '');
processFile(MOBILE_SRC,  MOBILE_PAGES,  '-mobile');
console.log('Done. CSS data in figma-css/');
