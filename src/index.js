const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const header = document.createElement("h1");
const topMenuEl = document.getElementById("top-menu");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.appendChild(header);
header.textContent = "DOM Manipulation";
mainEl.setAttribute("class", "flex-ctr");

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.setAttribute("class", "flex-around");

menuLinks.forEach(linkData => {
  let link = document.createElement("a")
  link.setAttribute("href", linkData.href)
  link.textContent = linkData.text
  topMenuEl.appendChild(link)
});