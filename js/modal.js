const navbarBurger = document.querySelector(".navbar-burger");
const modal = document.querySelector(".modal");
const modalClose = "modal-close";
const link = "modal-link";

navbarBurger.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("open-modal");
});

modal.addEventListener("click", ({ target }) => {
    console.log(target);
    if (target.className === link || target.className === modalClose) {
        modal.classList.remove("active");
        document.body.classList.remove("open-modal");
    }
});
