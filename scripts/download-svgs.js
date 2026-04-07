// node scripts/download-svgs.js
// Downloads key SVG assets from Figma API
const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = 'FIGMA_TOKEN_REMOVED';
const FILE_KEY = 'ObgrnQDn7H2QR3rjTK9fRk';
const OUT_DIR = path.join(__dirname, '..', 'public', 'img', 'figma');
fs.mkdirSync(OUT_DIR, { recursive: true });

// Key node IDs with their output filenames
const TARGETS = [
  // Logo
  { id: '92:2445',  name: 'logo' },
  { id: '92:2839',  name: 'logo-white' },
  // Hero illustration (server 3D)
  { id: '92:2738',  name: 'hero-server-3d' },
  // Hero background decoration
  { id: '92:324',   name: 'hero-bg-decor' },
  // 404 illustration
  { id: '80:15468', name: '404-illustration' },
  // Social icons (24x24)
  { id: '92:2819',  name: 'icon-twitter-24' },
  { id: '92:2824',  name: 'icon-slack-24' },
  { id: '92:2833',  name: 'icon-facebook-24' },
  // Social icons (36x36) - order page
  { id: '80:7980',  name: 'icon-twitter-36' },
  { id: '80:7981',  name: 'icon-facebook-36' },
  { id: '80:7984',  name: 'icon-yandex-36' },
  // Payment logos
  { id: '92:2877',  name: 'logo-mastercard-sm' },
  { id: '80:8145',  name: 'logo-mastercard-footer' },
  { id: '80:8207',  name: 'logo-qiwi' },
  { id: '80:8343',  name: 'logo-mastercard-2' },
  // Footer nav group
  { id: '92:3022',  name: 'footer-nav-links' },
  // OS logos (Details page)
  { id: '1401:673', name: 'os-ubuntu' },
  { id: '1401:648', name: 'os-cloudlinux' },
  { id: '1401:650', name: 'os-debian' },
  { id: '1401:663', name: 'os-vmware' },
  // Panel logos
  { id: '1401:688', name: 'panel-directadmin' },
  { id: '1401:694', name: 'panel-cpanel' },
  // Flags (24x14)
  { id: '92:2945',  name: 'flag-nl' },
  { id: '80:3283',  name: 'flag-de' },
  { id: '80:19506', name: 'flag-ee' },
  { id: '80:19520', name: 'flag-ru' },
  // Rating logos
  { id: '92:2478',  name: 'rating-logos-group' },
  { id: '92:2667',  name: 'rating-logo-2' },
];

function slugify(str) {
  return str.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').toLowerCase().slice(0, 50);
}

async function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : require('http');
    const req = mod.get(url, { headers }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve(get(res.headers.location, {}));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks) }));
    });
    req.on('error', reject);
  });
}

async function fetchJson(url) {
  const r = await get(url, { 'X-Figma-Token': TOKEN });
  return JSON.parse(r.body.toString());
}

async function downloadSvg(url, filePath) {
  const r = await get(url);
  if (r.status !== 200) { console.log('  HTTP', r.status, filePath); return false; }
  fs.writeFileSync(filePath, r.body);
  return true;
}

async function main() {
  // Batch by 50
  const BATCH = 50;
  let downloaded = 0, failed = 0;

  for (let i = 0; i < TARGETS.length; i += BATCH) {
    const batch = TARGETS.slice(i, i + BATCH);
    const ids = batch.map(t => t.id).join(',');

    console.log(`\nFetching URLs for batch ${Math.floor(i/BATCH)+1} (${batch.length} items)...`);
    const apiUrl = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`;
    const json = await fetchJson(apiUrl);

    if (json.err) { console.log('API error:', json.err); continue; }

    const promises = batch.map(async t => {
      const url = json.images[t.id];
      if (!url) { console.log('  NO URL:', t.name, t.id); failed++; return; }

      const outPath = path.join(OUT_DIR, t.name + '.svg');
      const ok = await downloadSvg(url, outPath);
      if (ok) {
        const size = fs.statSync(outPath).size;
        console.log('  ✓', t.name + '.svg', (size/1024).toFixed(1) + 'KB');
        downloaded++;
      } else {
        failed++;
      }
    });

    await Promise.all(promises);
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\nDone: ${downloaded} downloaded, ${failed} failed`);
  console.log(`SVGs in: public/img/figma/`);
}

main().catch(console.error);
