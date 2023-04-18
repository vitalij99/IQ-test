const navbarBurger = document.querySelector(".navbar-burger");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

navbarBurger.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("open-modal");
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.classList.remove("open-modal");
});
