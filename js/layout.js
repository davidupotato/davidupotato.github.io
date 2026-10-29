const root = new URL("../", document.currentScript.src);

const pages = [
  { name: "Home", file: "index.html" },
  { name: "Who am I", file: "about.html" },
  { name: "Why IT?", file: "why-it.html" },
  { name: "Dashboard", file: "dashboard.html" },
  { name: "Blog", file: "blog.html" },
];

function isCurrentPage(file) {
  const path = window.location.pathname;

  if (file === "index.html" && path.endsWith("/")) {
    return true;
  }
  if (file === "blog.html" && path.includes("/blog/")) {
    return true;
  }
  return path.endsWith("/" + file);
}

const menuList = document.createElement("ul");

for (const page of pages) {
  const link = document.createElement("a");
  link.href = new URL(page.file, root).href;
  link.textContent = page.name;

  if (isCurrentPage(page.file)) {
    link.className = "current";
  }

  const item = document.createElement("li");
  item.append(link);
  menuList.append(item);
}

const menu = document.createElement("nav");
menu.className = "site-nav";
menu.setAttribute("aria-label", "Main menu");
menu.append(menuList);
document.querySelector(".site-header").append(menu);
