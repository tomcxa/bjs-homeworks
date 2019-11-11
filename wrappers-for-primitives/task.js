'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    //проверка на пустую строку
    if (!percent || !contribution || !amount || !date) {
        return 'Заполните все строки числовыми значениями!';
    }
    //проверка неверно введенного поля (если меньше нуля или NaN)
    let args = {
        percent,
        contribution,
        amount,
        date
    };
    for (let key in args) {
        console.log(isNaN(args[key]));
        if (isNaN(args[key]) || args[key] < 0) {
            return `Параметр ${key} содержит неправильное значение ${args[key]}`;
        }
    }
    //если все корректно
    let percentPerAnnum = Number(percent); //процентная ставка годовых
    let initialPay = Number(contribution); //первоначальный взнос
    let creditAmount = Number(amount); //сумма кредита
    let numberOfMonth = Number(date); //количество месяцев
    let perMonth = percentPerAnnum / 100 / 12; //ежемесячный процент
    let actualCreditAmount = creditAmount - initialPay; //сумма кредита с учетом взноса
    let today = new Date();
    let endPaymentDate = new Date(today.getFullYear(), today.getMonth() + numberOfMonth, today.getDate(), today.getHours(), today.getMinutes());
    let monthlyPayment = (actualCreditAmount * (perMonth + perMonth / (((1 + perMonth) ** numberOfMonth) - 1))).toFixed(2); //ежемесячный платеж
    let totalAmount = (monthlyPayment * numberOfMonth).toFixed(2);
    return `Общая стоимость кредита: ${totalAmount} у.е. с ежемесячными платежами в размере ${monthlyPayment} у.е. до ${endPaymentDate}`;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let input = name;
    if (name != null && typeof name !== "undefined") {
        name = name.trim();
    }
    if (!name) {
        name = "Аноним";
    } else {
        name = name[0].toUpperCase() + name.substring(1);
    }
    let greeting = `Ввод: ${input}. Привет, мир! Меня зовут ${name}`;
    return greeting;
}