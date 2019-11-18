'use strict';
console.log("==============================Задание 1==============================");
class Weapon {
    constructor({ name, attack, durability, range }) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) this.durability = 0;
    }

    getDamage() {
        if (this.durability === 0) return 0;
        const lowDurability = this.durability / 100 / 30; //отдельные переменные чтобы легче читалось
        const isLowDurability = !(this.durability >= lowDurability); //отдельные переменные чтобы легче читалось
        return (isLowDurability ? this.attack / 2 : this.attack);
    }

    isBroken() {
        return (this.durability <= 0);
    }
}

//test
const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный Лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormStaff = new Weapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0
console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

//2 Lesson
console.log("==============================Задание 2==============================");
class Arm extends Weapon {
    constructor() {
        super({
            name: 'Рука',
            attack: 1,
            durability: Infinity,
            range: 1,
        });
    }
}

class Bow extends Weapon {
    constructor() {
        super({
            name: 'Лук',
            attack: 10,
            durability: 200,
            range: 3,
        });
    }
}

class Sword extends Weapon {
    constructor() {
        super({
            name: 'Старый меч',
            attack: 20,
            durability: 10,
            range: 1,
        });
    }
}

class Knife extends Weapon {
    constructor() {
        super({
            name: 'Нож',
            attack: 5,
            durability: 300,
            range: 1,
        });
    }
}

class Staff extends Weapon {
    constructor() {
        super({
            name: 'Посох',
            attack: 8,
            durability: 300,
            range: 2,
        });
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = "Длинный Лук";
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = "Секира";
        this.attack = 27;
        this.range = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = "Посох Бури";
        this.attack = 10;
        this.range = 3;
    }
}

const bow1 = new Bow();

console.log(bow1.name); // Лук
console.log(bow1.attack); // 10
console.log(bow1.durability); // 200
console.log(bow1.range); // 3
bow1.takeDamage(20);
console.log(bow1.durability); // 180
console.log(bow1.getDamage()); // 0

const bow2 = new LongBow();

console.log(bow2.name); // Длинный Лук
console.log(bow2.attack); // 15
console.log(bow2.durability); // 200
console.log(bow2.range); // 4
bow2.takeDamage(20);
console.log(bow2.durability); // 180
console.log(bow2.getDamage()); // 15
bow2.takeDamage(200);
console.log(bow2.durability); // 0
console.log(bow2.getDamage()); // 0
//lesson3
console.log("==============================Задание 3==============================");

class StudentLog {
    constructor(name) {
        this.name = name;
        this.data = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade >= 1 && grade <= 5) {//проверка на корректность поставленной оценки
            if (subject in this.data) {// если поле объекта существует
                this.data[subject].push(grade); // заполняем его новым значением
            } else {//если поле объекта не существует
                this.data[subject] = [grade];//создаем поле с начальным значением
            }
        } else {//сообщаем об ошибке ввода, если данные введены не верно
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}.
            Допускаются только числа от 1 до 5`);
        }       
        return (subject in this.data) ? this.data[subject].length : 0; //возвращаем кол-во оценок по данному предмету если они существуют
    }

    getAverageBySubject(subject) {
        if (!(subject in this.data)) return 0;
        const sum = this.data[subject].reduce((start, current) => start + current);
        const average = sum / this.data[subject].length;
        return average;
    }

    getTotalAverage() {
        let totalAverage = 0;
        let count = 0;
        for (let prop in this.data) {
            const averageBySubject = this.getAverageBySubject(prop);
            totalAverage += averageBySubject;
            count++;
        }
        return totalAverage / count;
    }
}
const log = new StudentLog('Олег Никифоров');

console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(null, 'algebra'));
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.data);
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage()); // 3,75