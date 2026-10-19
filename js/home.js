/* Home page */
const home=()=>`
<header class="hero" id="home"><div class="w"><h1>INKQI PRINTLAB</h1><p>${SITE.hero.sub}</p>
<a class="btn" href="${SITE.discord}" target="_blank" rel="noopener">${SITE.hero.button}</a></div></header>
<section id="promo"><div class="w"><span class="tag">${SITE.promo.label}</span><h2>${SITE.promo.heading}</h2><p class="sub">${SITE.promo.sub}</p>
<div class="pgrid">${PR.map(p=>`<div class="card pc"><div class="pi" style="background:${g(p.c)}">${p.img ? `<img src="${p.img}" alt="${p.n}">` : `${p.e}<small>Sample image</small>`}</div><h3 style="font-size:22px">${p.n}</h3><p>${p.d}</p><dl>${p.rows.map(r=>`<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl>${orderBtn(SITE.promo.button, p.link, SITE.orderLink, "Promo order: " + p.n)}</div>`).join("")}</div></div></section>
<section id="services"><div class="w"><h2>${SITE.services.heading}</h2><p class="sub">${SITE.services.sub}</p>
<div class="sgrid">${SERVICES.map(s=>`<a class="card sv" href="service.html?s=${s.key}"><div class="ic" style="background:${g(s.c)}">${s.img ? `<img src="${s.img}" alt="${s.n}">` : s.e}</div><div class="tx"><h3 style="margin-top:0">${s.n}</h3><p>${s.t}</p><span class="more">${SITE.services.button}</span></div></a>`).join("")}</div></div></section>
${aboutSection()}
<section id="news"><div class="w"><div class="news"><div><small>${SITE.news.label}</small><h3>${SITE.news.heading}</h3><p>${SITE.news.text}</p></div>
<a class="btn" href="${SITE.news.link}">${SITE.news.button}</a></div></div></section>`;

contentReady.then(() => {
  document.getElementById("app").innerHTML = home();
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
});
