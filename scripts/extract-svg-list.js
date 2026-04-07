// node scripts/extract-svg-list.js
// Finds all exportable SVG elements in Figma JSON
const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'figma-nodes-desktop.json'),
  path.join(__dirname, '..', 'figma-nodes-mobile.json'),
];

// Name patterns that suggest SVG-worthy content
const SVG_HINTS = /(icon|logo|illustr|pattern|arrow|chevron|check|star|shield|cloud|server|map|wave|bg|decor|flag|social|payment|visa|master|paypal|webmoney|qiwi|yandex|bitcoin|usdt|404|hero|asset|group\s*\d|image\s*1[0-9])/i;

const targets = new Map(); // id -> info

function isAllVectorLeaves(children) {
  return children && children.length > 0 && children.every(c =>
    c.type === 'VECTOR' ||
    c.type === 'BOOLEAN_OPERATION' ||
    c.type === 'ELLIPSE' ||
    c.type === 'RECTANGLE' ||
    c.type === 'LINE' ||
    c.type === 'STAR' ||
    c.type === 'POLYGON' ||
    (c.type === 'GROUP' && isAllVectorLeaves(c.children))
  );
}

function walk(node, depth, pageName) {
  if (!node || !node.id) return;
  const b = node.absoluteBoundingBox;
  const name = node.name || '';

  // Export whole group/frame that is pure vector content (icon-like)
  if (b && (node.type === 'GROUP' || node.type === 'FRAME' || node.type === 'INSTANCE' || node.type === 'COMPONENT')) {
    const w = b.width, h = b.height;
    // Pure vector container ≤ 500px
    if (w <= 500 && h <= 500 && isAllVectorLeaves(node.children)) {
      if (!targets.has(node.id)) {
        targets.set(node.id, { id: node.id, name, page: pageName, w: Math.round(w), h: Math.round(h), reason: 'pure-vector' });
      }
      return; // don't recurse into it
    }
    // Name hint match for larger assets too
    if (SVG_HINTS.test(name) && w <= 800 && h <= 800) {
      if (!targets.has(node.id)) {
        targets.set(node.id, { id: node.id, name, page: pageName, w: Math.round(w), h: Math.round(h), reason: 'name-hint' });
      }
      // still recurse to catch sub-icons
    }
  }

  // Single vector at top level
  if ((node.type === 'VECTOR' || node.type === 'BOOLEAN_OPERATION') && depth <= 3 && b) {
    if (!targets.has(node.id)) {
      targets.set(node.id, { id: node.id, name, page: pageName, w: Math.round(b.width), h: Math.round(b.height), reason: 'top-vector' });
    }
    return;
  }

  for (const c of (node.children || [])) {
    walk(c, depth + 1, pageName);
  }
}

for (const srcPath of files) {
  if (!fs.existsSync(srcPath)) continue;
  const file = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  for (const [id, nodeData] of Object.entries(file.nodes)) {
    const doc = nodeData.document;
    const pageName = doc.name;
    for (const child of (doc.children || [])) {
      walk(child, 0, pageName);
    }
  }
}

const result = [...targets.values()];
// Sort: page then name
result.sort((a, b) => (a.page + a.name).localeCompare(b.page + b.name));

const outPath = path.join(__dirname, '..', 'figma-svg-targets.json');
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));

// Summary
const byPage = {};
result.forEach(t => { byPage[t.page] = (byPage[t.page] || 0) + 1; });
console.log('Total SVG targets:', result.length);
Object.entries(byPage).forEach(([p, n]) => console.log(' ', p, n));
console.log('Saved to figma-svg-targets.json');
