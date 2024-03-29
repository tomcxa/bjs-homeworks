'use strict';

// function compareArrays(arr1, arr2) {
//     return (arr1.length === arr2.length) && (arr1.join() === arr2.join());
// }
function compareArrays(arr1, arr2) {
    return Object.keys(arr1).length === Object.keys(arr2).length && Object.keys(arr1).every(e => arr2[e] === arr1[e]);
}

console.log(compareArrays([8, 9], [6]), compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]), // false, разные значения
    compareArrays([9, 2, 4, 8, 2], [9, 2, 4]), // false, разные значения
    compareArrays([1, 2, 3], [2, 3, 1]), // false, разные индексы, хотя и одинаковые значения
    compareArrays([8, 1, 2], [8, 1, 2])); // true

function memoize(fn, limit) {
    const results = [];
    limit = (limit > 10) ? 10 : limit; //не более 10 записей
    return (...args) => {
        const inMemory = results.find(el => compareArrays(el.args, args));
        if (inMemory) {//если запись уже есть достаем значение из памяти
            console.log('Pезультат берётся из памяти');
            return inMemory.result;
        } else {//иначе вычисляем результат
            if (results.length == limit) {//проверяем не превышен ли лимит
                console.log('Лимит превышен, удаляем самый старый элемент');
                results.shift();//для экономии места сначала удаляем первый элемент
            }
            console.log('Pезультат вычисляется');
            const result = fn(...args);
            results.push({ args, result });//затем добавляем новый
            return result;
        }
    }
}

const sum = (...args) => args.reduce((start, current) => start + current); //считаем сумму для любого кол-ва аргументов

const mSum = memoize(sum, 11); // 11 результатов хранятся в памяти

// Тест
console.log(mSum(1, 3));
console.log(mSum(1, 3, 1));
console.log(mSum(1, 3, 1, 2));
console.log(mSum(1, 1));
console.log(mSum(1, 1, 1, 1));
console.log(mSum(1, 1, 1, 1));
console.log(mSum(1, 9));
console.log(mSum(1, 3));
console.log(mSum(1, 8));
console.log(mSum(1, 7));
console.log(mSum(1, 5));
console.log(mSum(1, 2));
console.log(mSum(1, 3, 9));
console.log(mSum(1, 3, 99));
