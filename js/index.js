import questions from "../question.json" assert {type: 'json'}

const form = document.getElementById("form ");

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
            ${element[elem]}<span class="custom-radio-button"></span></label>`;
        })
        .join("");
}
function createColors(element, i) {
    return element.map((elem) => {
        return `<input type="radio" name="section${i}" value="${elem}">`;
    });
}
function createImage(img) {
    return `<img class="form-img" src="./images/${img}.jpg" alt=""></img>`;
}
form.insertAdjacentHTML("beforeend", markup);
