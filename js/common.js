/* Shared by every page: helpers, footer links, mobile menu, floating octopus background */

// gradient helper: "#aaa,#bbb" -> css gradient
const g=c=>`linear-gradient(135deg,${c.split(",")[0]},${c.split(",")[1]})`;

// fill footer and Discord link once content is loaded
contentReady.then(() => {
  document.querySelector("nav a.discord").href = SITE.discord;

  document.getElementById("fs").innerHTML = "Service" +
    SERVICES.map(s => `<a href="service.html?s=${s.key}">${s.footer || s.n}</a>`).join("");

  document.getElementById("fc").innerHTML = "Contact" +
    `<a href="mailto:${SITE.email}">${SITE.email}</a>` +
    `<a href="${SITE.discord}" target="_blank" rel="noopener">Discord</a>` +
    `<a href="${SITE.footer.twitter}" target="_blank" rel="noopener">Twitter</a>` +
    `<a href="${SITE.footer.instagram}" target="_blank" rel="noopener">Instagram</a>`;
});

// mobile hamburger menu
const nv = document.querySelector("nav");
const burger = nv.querySelector(".burger");
burger.addEventListener("click", () => {
  const open = nv.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nv.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nv.classList.remove("open");
  burger.setAttribute("aria-expanded", false);
}));

// floating octopus background (edit this list to change the colours)
const octoColors = ["#C9A6D9", "#E4C9F0", "#FFFFFF"];
for (let i = 0; i < 26; i++) {
  const el = document.createElement("div");
  const w = 12 + Math.random() * 20;
  el.className = "ball";
  el.style.cssText = `left:${Math.random() * 100}vw;top:${Math.random() * 100}vh;width:${w}px;height:${w * 1.175}px`;
  el.innerHTML = `<svg viewBox="0 0 40 47" width="100%" height="100%"><path d="${OCT}" fill="${octoColors[i % octoColors.length]}"/></svg>`;
  document.body.append(el);
  el.animate([
    { transform: "translate(0,0) rotate(-12deg)" },
    { transform: `translate(${(i % 2 ? 1 : -1) * Math.random() * 11}rem,${Math.random() * 12}rem) rotate(12deg)` }
  ], { duration: (Math.random() + 1) * 3000, direction: "alternate", iterations: Infinity, easing: "ease-in-out" });
}
