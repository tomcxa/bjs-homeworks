'use strict';


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    if (!animal) {
        return null;
    }
    const sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    //невыразительный Я
    // let sum = 0;
    // for (let mark of marks) {
    //    let num = Number(mark);
    //    sum += num;
    // }
    // let roundedAverage = Math.round(sum / marks.length);
    //выразительный js
    const roundedAverage = Math.round(marks.reduce((sum, mark) => {
        return sum + Number(mark)
    }, 0) / marks.length);
    return roundedAverage;
}

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = new Date();
    const dateOfBirthday = new Date(birthday);
    const averageMsInYear = 31556952000;
    const age = (now - dateOfBirthday) / averageMsInYear;
    console.log(age);
    return (age > 18);
}
