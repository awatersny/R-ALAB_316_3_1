const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector("main");
const header = document.createElement("h1");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu")

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.appendChild(header);
header.textContent = "DOM Manipulation";
mainEl.setAttribute("class", "flex-ctr");

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.setAttribute("class", "flex-around");

subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.style.position = "absolute"
subMenuEl.style.top = 0
subMenuEl.setAttribute("class", "flex-around")

menuLinks.forEach(linkData => {
  let link = document.createElement("a")
  link.setAttribute("href", linkData.href)
  link.textContent = linkData.text
  topMenuEl.appendChild(link)
});