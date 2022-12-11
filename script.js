const gadgetStore = {
  bars: document.querySelector("#menubars"),
  nav: document.querySelector(".navlink"),
  promosection: document.querySelector(".promo"),
  sectionSroll: document.querySelector(".scroll-smoot"),
  menuclose: document.querySelector("#menuclose"),
};

gadgetStore.bars.addEventListener("click", function (e) {
  gadgetStore.nav.style.display = "block";
  gadgetStore.menuclose.style.display = "block";
});
gadgetStore.menuclose.addEventListener("click", function (e) {
  gadgetStore.nav.style.display = "none";
  gadgetStore.menuclose.style.display = "none";
});

gadgetStore.sectionSroll.addEventListener("click", function (e) {
  e.preventDefault();
  gadgetStore.promosection.scrollIntoView({ behavior: "smooth" });
  console.log("salem");
  gadgetStore.nav.style.display = "none";
  gadgetStore.menuclose.style.display = "none";
});
