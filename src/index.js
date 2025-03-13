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
menuLinks.forEach(linkData => {
  const link = document.createElement("a")
  link.setAttribute("href", linkData.href)
  link.textContent = linkData.text
  topMenuEl.appendChild(link)
});
const topMenulinks = topMenuEl.childNodes

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
subMenuEl.style.top = "0"
subMenuEl.setAttribute("class", "flex-around")

topMenuEl.addEventListener("click", displaySubMenu)

function buildSubMenu(link) {
  console.log(link)
  while(subMenuEl.firstChild){
    subMenuEl.removeChild(subMenuEl.firstChild)
  }
}

function displaySubMenu(evt) {
  evt.preventDefault()
  const link = menuLinks.find(link => link.text === evt.target.textContent)
  if(evt.target.tagName !== "A") {
    return
  }
  for(let i = 0; i < menuLinks.length; i++) {
    topMenuEl.childNodes[i].removeAttribute("class")
  }
  if(evt.target.className !== "active") {
    evt.target.setAttribute("class", "active")
    if(link.subLinks) {
      buildSubMenu(link)
      subMenuEl.style.top = "100%"
    }
    else {
      subMenuEl.style.top = "0"
    }
  }
  else {
    evt.target.removeAttribute("class")
    if(link.subLinks) {
      subMenuEl.style.top = "0"
    }
  }
}

