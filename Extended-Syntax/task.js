"use strict";

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + ${b}*x + ${c} = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    let x = [];
    const D = b ** 2 - 4 * a * c;
    if (!D) {
        x.push(-b / (2 * a));
    } else {
        x.push((-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a));
    }

    return x;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let totalMarkSum = 0;
    if (marks.length > 5) {
        marks = marks.slice(0, 5);
    }
    console.log(`Длина массива ${marks.length}`);
    for (let mark of marks) {
        totalMarkSum += mark;
    }
    return totalMarkSum / marks.length;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let result;
    let currentDate = new Date();
    let age = (currentDate - dateOfBirthday) / 31536000000;
    console.log(age);
    if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    console.log(result);
    return result;
}