const lgBtns = document.querySelectorAll(".lg-link");

lgBtns.forEach((activeLink) => {
  activeLink.addEventListener("click", () => {
    removeActiveClasses();
    activeLink.classList.add("active");
  });
});

function removeActiveClasses() {
  lgBtns.forEach((activeLink) => {
    activeLink.classList.remove("active");
  });
}

const tolgge = document.querySelector(".menu-toggler");
const close = document.querySelector(".close");

const menu = document.querySelector(".menu");

tolgge.addEventListener("click", () => {
  menu.classList.add("menu-show");
});

close.addEventListener("click", () => {
  menu.classList.remove("menu-show");
});
