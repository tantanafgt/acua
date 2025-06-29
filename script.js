
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// ハンバーガークリックでメニュー開閉
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// メニュー内リンククリック時も閉じる
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// メニュー以外クリック時にメニューを閉じる
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    menu.classList.remove("show");
  }
});
