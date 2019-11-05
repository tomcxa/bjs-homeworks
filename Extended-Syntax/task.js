"use strict"

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
    //если один из корней равен 0
    if (a === 0 && b === 0 && c === 0) {
        x[0] = "Любое число";
    }
    else if (a === 0) {
        x[0] = -c / b;
    } else if (b === 0) {
        x[0] = Math.sqrt(-c / a);
        x[1] = -(Math.sqrt(-c / a));
    } else if (c === 0) {
        x[0] = 0;
        x[1] = -b / a;
    } else {
        let D = b ** 2 - 4 * a * c;
        if (D < 0)
            x[0] = "Корней нет";
        else if (D === 0) {
            x[0] = -b / (2 * a);
        }
        else {
            x[0] = (-b + Math.sqrt(D)) / (2 * a);
            x[1] = (-b - Math.sqrt(D)) / (2 * a);
        }
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
    for (let mark of marks) totalMarkSum += mark;
    const averageMark = totalMarkSum / marks.length;
    return averageMark;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    //отсебятина
    let gender;
    let inputs = document.getElementsByName("radioButton");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            gender = inputs[i].value;
            break;
        }
    }
    let drink = askDrink(name, dateOfBirthday, gender);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday, gender) {
    // код для задачи №3 писать здесь
    let result;
    let currentDate = new Date();
    let age = (currentDate - dateOfBirthday) / 31536000000;
    console.log(age);
    if (gender === 'undefined') {
        result = "Арчи не осуждает, но... Бар закрыт!";
    } else {
        if (age < 18) {
            result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        } else if (age >= 60 && gender === 'female') {
            result = `Поздравляем, ${name}, Вы дожили до пенсии! Так, что пить не зачем, займитесь спортом... Бар закрыт!`;
        } else if (age >= 65 && gender === 'male') {
            result = `Поздравляем, ${name}, Вы дожили до пенсии! Так, что пить не зачем, займитесь спортом... Бар закрыт!`;
        } else {
            result = `Не желаете ли олд-фэшн, ${name}?`;
        }
    }
    console.log(result);
    return result;
}