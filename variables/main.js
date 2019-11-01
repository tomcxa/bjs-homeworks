//1. Задание
console.log("==========================1. Задание==========================");
let algebra;
let geography;
let physics;

function averageScore() {
    algebra = 5;
    geography = 4;
    physics = 3;
    let average = (algebra + geography + physics) / 3;
    console.log(`Средняя оценка: ${average}`);
}

averageScore();

//2. Задание
console.log("==========================2. Задание==========================");
let myName = 'Tishon';
let message = `Привет, мир! Меня зовут ${myName}`;
console.log(message);

//3. Задание
console.log("==========================3. Задание==========================");

let x, y ,z;
function calcResult(x, y, z) {
    let result;
    result = x * y + 5 * z + x - 1;
    return result;
}

console.log(`Василий, результат данного выражения удивителен и равен: ${calcResult(2, 22, 0)}`);
console.log("Мог бы и сам посчитать, кожаный ублю***!");