/* About us section (used by home.js) */

const ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  x:         '<path d="M4 4l16 16M20 4L4 20"/>',
  facebook:  '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  artstation:'<path d="M3 18l6-11 3 5.5M9.5 18H21l-5.5-9.5M13 12.5h6"/>',
  website:   '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  tiktok:    '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.5 2.5 2.2 4 5 4.2"/>',
  email:     '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/>'
};

const socialLink = s => `<a class="soc" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.type}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.type] || ICONS.website}</svg></a>`;

const galleryTile = (t, i, c) => t.img
  ? `<div class="gt"><img src="${t.img}" alt="${t.cap}" loading="lazy"></div>`
  : `<div class="gt ph-tile" style="background:${g(c)};filter:brightness(${1 + i * 0.05})"><span>${t.cap}</span></div>`;

const creatorCard = m => `
<article class="card creator">
  <div class="c-head">
    <div class="avatar" style="background:${g(m.c)}">${m.img ? `<img src="${m.img}" alt="${m.name}">` : m.name.charAt(0).toUpperCase()}</div>
    <div><h3>${m.name}</h3>${m.role ? `<span class="role">${m.role}</span>` : ""}</div>
  </div>
  ${m.bio ? `<p>${m.bio}</p>` : ""}
  <div class="c-gal">${m.gallery.slice(0, 4).map((t, i) => galleryTile(t, i, m.c)).join("")}</div>
  ${m.social.length ? `<div class="socials">${m.social.map(socialLink).join("")}</div>` : ""}
</article>`;

const aboutSection = () => `
<section id="about"><div class="w">
  <h2>${ABOUT.heading}</h2>
  <p class="sub">&nbsp;</p>
  <div class="about-top">
    <div class="card about-text">
      ${ABOUT.items.map(i => `<div class="vm"><span class="tag">${i.label}</span><p>${i.text}</p></div>`).join("")}
    </div>
    <div class="about-art" style="background:${g("#C9A6D9,#EBD9F4")}">
      ${ABOUT.illustration
        ? `<img src="${ABOUT.illustration}" alt="Inkqi illustration">`
        : `<svg viewBox="0 0 40 47" aria-hidden="true"><path d="${OCT}" fill="#FFFFFF"/></svg>`}
    </div>
  </div>
  <h3 class="co-title">${ABOUT.coTitle}</h3>
  <div class="creators">${CREATORS.map(creatorCard).join("")}</div>
</div></section>`;
