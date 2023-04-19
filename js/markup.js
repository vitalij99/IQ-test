import questions from "../question.json" assert { type: "json" };

const form = document.getElementById("form");
const btn = document.getElementsByClassName("link-test")[0];
const progressBar = document.getElementById("status-progress");
const maxPage = questions.length + 2;
let pagination = 0;

btn.addEventListener("click", showSection);

const markup = questions.map(createCard).join("");

function createCard({ question, option, image, colors }, i) {
    let mass = "";
    if (image) mass = createImage(image) + createRadio(option, i);
    else if (option) mass = createRadio(option, i);
    else if (colors) {
        mass = createColors(colors, i);
    }

    return `<div class="section" id="section${i}">
        <h2>${question}</h2>        
        ${mass}
    </div>`;
}
function createRadio(element, i) {
    const keys = Object.keys(element);
    return keys
        .map((elem) => {
            return `<label class="form-radio" ><input type="radio" name="section${i}" value="${elem}">
            <span class="custom-radio-button"></span><span class="form-text">${element[elem]}</span></label>`;
        })
        .join("");
}
function createColors(element, i) {
    return (
        element.reduce((acum, elem) => {
            return (
                acum +
                `<label class="form-radio-colors" ><input class="form-input-colors" type="radio" name="section${i}" value="${elem}" >
                <span class="custom-radio-colors" style="background-color:${elem}">
        </label>`
            );
        }, "<div class='form-colors-box'>") + "</div>"
    );

    // element
    //     .map((elem) => {
    //         return `<label class="form-radio-colors" ><span class="custom-radio-colors" style="background-color:${elem}">
    //     <input type="radio" name="section${i}" value="${elem}" ></label>`;
    //     })
    //     .join("");
}
function createImage(img) {
    return `<img class="form-img" src="./images/${img}.jpg" alt=""></img>`;
}
function showSection() {
    const sections = document.getElementsByClassName("section");
    if (pagination <= questions.length && sections[pagination]) {
        sections[pagination].classList.add("active");
    }
    if (pagination <= questions.length && sections[pagination - 1]) {
        sections[pagination - 1].classList.remove("active");
    }
    if (maxPage >= pagination) {
        updateProgressBar();
        pagination += 1;
    }
}
function updateProgressBar() {
    progressBar.style.width = (pagination * 100) / (maxPage - 1) + "%";
}
form.insertAdjacentHTML("beforeend", markup);
showSection();
