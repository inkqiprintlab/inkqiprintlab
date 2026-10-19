/* Service detail page: service.html?s=stickers | prints | zines | keychains */
const svc=k=>{const s=S[k];return `
<div class="w"><div class="crumb"><a href="index.html">Home</a> / <a href="index.html#services">Services</a> / ${s.n}</div>
<div class="ph"><div><span class="tag">SERVICE</span><h1>${s.n}</h1><p style="color:var(--mute);font-size:18px">${s.intro}</p>
<p>${orderBtn("Get a Quote", s.quoteLink, SITE.quoteLink, "Quote request: " + s.n)} ${orderBtn("Start Order", s.orderLink, SITE.orderLink, "Start order: " + s.n, "o")}</p></div>
<div class="big" style="background:${g(s.c)}">${s.img ? `<img src="${s.img}" alt="${s.n}">` : s.e}</div></div>
<section style="padding-top:20px"><h2>See it up close</h2><p class="sub">Sample photos go here. Replace these tiles with your real shots.</p>
<div class="gal">${s.gal.map((t,i)=>`<div style="background:${g(s.c)};filter:brightness(${1+i*0.06}) saturate(${1-i*0.08})">${t}</div>`).join("")}</div></section>
<section><h2>Specifications</h2><p class="sub">&nbsp;</p><div class="tw"><table>${s.spec.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join("")}</table></div></section>
<section><h2>How it works</h2><p class="sub">Four simple steps from file to doorstep.</p>
<div class="steps">${[["Send your file","Upload artwork and tell us size and quantity."],["Get a quote & proof","We confirm price and check your file."],["We print & finish","Printed, cut and quality-checked in-house."],["Delivered to you","Packed carefully and shipped with tracking."]].map((a,i)=>`<div class="card"><div class="num">${i+1}</div><h3>${a[0]}</h3><p>${a[1]}</p></div>`).join("")}</div></section>
<section><h2>Price & delivery</h2><p class="sub">${s.del}</p><div class="tw"><table>${s.price.map(r=>`<tr><th>${r[0]}</th><td><b>${r[1]}</b></td></tr>`).join("")}</table></div>
<p class="note">Sample prices for layout only. Final pricing depends on quantity, size and finish.</p></section>
<section><h2>FAQ</h2><p class="sub">&nbsp;</p>${s.faq.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</section>
<section><div class="cta"><h2>Ready to print ${s.n.toLowerCase()}?</h2><p class="sub">Tell us about your project and we'll reply with a quote.</p>
${orderBtn("Get a Quote", s.quoteLink, SITE.quoteLink, "Quote request: " + s.n)}</div></section></div>`};

contentReady.then(() => {
  const key = new URLSearchParams(location.search).get("s");
  if (!S[key]) {
    location.replace("index.html");
  } else {
    document.title = `${S[key].n} | INKQI PRINTLAB`;
    document.getElementById("app").innerHTML = svc(key);
  }
});
