import { questions } from "../question";

// const questions = [
//     {
//         question: "ваш пол:",
//         option: {
//             man: "мужчина",
//             women: "женщина",
//         },
//     },
//     {
//         question: "укажите ваш возраст:",
//         option: {
//             18: "До 18",
//             28: "От 18 до 28",
//             35: "от 29 до 35",
//             36: "От 36",
//         },
//     },
//     {
//         question: "Выберите лишнее:",
//         option: {
//             home: "Дом ",
//             hut: "Шалаш",
//             bungalow: "Бунгало",
//             bench: "Скамейка",
//             cabin: "Хижина",
//         },
//     },
//     {
//         question: "Продолжите числовой ряд: 18  20  24  32  ",
//         option: {
//             62: 62,
//             48: 48,
//             74: 74,
//             57: 57,
//             60: 60,
//             77: 77,
//         },
//     },
//     {
//         question: "Выберите цвет, который сейчас наиболее Вам приятен:",
//         colors: [
//             "gray",
//             "blue",
//             "green",
//             "red",
//             "yellow",
//             "brown",
//             "black",
//             "violet",
//             "blue",
//         ],
//     },
//     {
//         question:
//             "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
//         colors: [
//             "gray",
//             "blue",
//             "brown",
//             "green",
//             "black",
//             "red",
//             "violet",
//             "yellow",
//             "blue",
//         ],
//     },
//     {
//         question: "Какой из городов лишний?",
//         option: {
//             Washington: "Вашингтон",
//             London: "Лондон",
//             Paris: "Париж",
//             NewYork: "Нью-Йорк",
//             Moscow: "Москва",
//             Ottawa: "Оттава",
//         },
//     },
//     {
//         question: "Выберите правильную фигуру из четырёх пронумерованных.",
//         option: {
//             1: 1,
//             2: 2,
//             3: 3,
//             4: 4,
//         },
//         image: "image-1",
//     },
//     {
//         question: "Вам привычнее и важнее:",
//         option: {
//             1: "Наслаждаться каждой минутой проведенного времени",
//             2: "Быть устремленными мыслями в будущее",
//             3: "Учитывать в ежедневной практике прошлый опыт",
//         },
//     },
//     {
//         question:
//             "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
//         option: {
//             spiky: "оно остроконечное",
//             stable: "оно устойчиво",
//             spikyStable: "оно-находится в состоянии равновесия",
//         },
//         image: "image",
//     },
//     {
//         question: "Вставьте подходящее число",
//         option: {
//             34: "34",
//             36: "36",
//             53: "53",
//             44: "44",
//             66: "66",
//             42: "42",
//         },
//         image: "image-2",
//     },
// ];

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
            return `<label ><input type="radio" name="section${i}" value="${elem}">
            ${element[elem]}</label>`;
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
