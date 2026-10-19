/* ==========================================================================
   Loads all website content from /content/*.json (edited through /admin)
   Other scripts wait for it with:  contentReady.then(() => { ... })
   ========================================================================== */

let SITE, ABOUT, CREATORS;
let SERVICES = [];   // services in display order
let S = {};          // services by key, e.g. S.stickers
let PR = [];         // promotions

const pairs = list => (list || []).map(r => [r.label, r.value]);

const contentReady = Promise.all(
  ["site", "services", "promotions", "about"].map(name =>
    fetch(`content/${name}.json`).then(r => {
      if (!r.ok) throw new Error(`content/${name}.json: ${r.status}`);
      return r.json();
    })
  )
).then(([site, services, promos, about]) => {
  SITE = site;
  SERVICES = services.services.map(s => ({
    ...s,
    spec:  pairs(s.spec),
    price: pairs(s.price),
    gal:   s.gal || [],
    faq:   (s.faq || []).map(f => [f.q, f.a])
  }));
  SERVICES.forEach(s => { S[s.key] = s; });
  PR = promos.items.map(p => ({ ...p, rows: pairs(p.rows) }));
  ABOUT = about;
  CREATORS = about.creators || [];
}).catch(err => {
  document.getElementById("app").innerHTML =
    '<div class="w" style="padding:80px 0;text-align:center"><h2>Could not load content</h2>' +
    '<p class="sub">Open the site through a web server (e.g. VS Code Live Server), not by double-clicking the file.</p></div>';
  throw err;
});

/* Order / quote button.
   Link priority: this item's own link > site-wide default link > email with a subject line. */
const orderBtn = (label, ownLink, defaultLink, subject, cls = "") => {
  const href = ownLink || defaultLink || `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
  const ext = /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
  return `<a class="btn ${cls}" href="${href}"${ext}>${label}</a>`;
};
