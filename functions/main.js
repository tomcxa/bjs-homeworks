"use strict";
console.log("==============================1.Задание==============================");
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {
            D
        }
    } else if (!D) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        }
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c} = 0`);
    console.log(`Значение дискриминанта: ${result['D']}`);
    if ('roots' in result) {
        switch (result['roots'].length) {
            case 1:
                console.log(`Уравнение имеет один корень X₁ = ${result['roots'][0]}`);
                break;
            default:
                console.log(`Уравнение имеет два корня. X₁ = ${result['roots'][0]}, X₂ = ${result['roots'][1]}`);
        }
    } else {
        console.log("Уравнение не имеет вещественных корней");
    }
}

showSolutionsMessage(2, 4, 2);
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
console.log("==============================2.Задание==============================");
function getAverageScore(data) {
    let average = calcAverageScore(data);
    let scores = [];
    let averageAllScores;
    for (let prop in average) {
        scores.push(average[prop]);
    }
    averageAllScores = averageScorresSum(scores);
    average['average'] = averageAllScores;
    return average;
}

function calcAverageScore(data) {
    const averageScore = {};
    for (let prop in data) {
        let scores = data[prop];
        let average = averageScorresSum(scores);
        averageScore[prop] = average;
    }
    return averageScore;
}

function averageScorresSum(scores) {
    let average;
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    average = sum / scores.length;
    return average;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
}));

console.log("==============================3.Задание==============================");
function getPersonData(secretData) {
    let firstName;
    let lastName;
    let secretNum = [];
    for (let prop in secretData) {
        secretNum.push(secretData[prop]);
    }
    firstName = setName(secretNum[0]);
    lastName = setName(secretNum[1]);
    return {
        firstName,
        lastName
    }
}

function setName(dataNumber) {
    let name;
    switch (dataNumber) {
        case 0:
            name = "Эмилио";
            break;
        case 1:
            name = "Родриго";
    }
    return name;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));