'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {
    const goodMorning = () => console.log('Din Don mama f**ka!');
    const goodNight = () => console.log('Zzzzzzzzzz... or dota?');
    const delay = getDelay(wakeUpTime, bedTime);
    function alarm() {
        const updateTime = setInterval(() => {//обновляем время примерно раз в 100мс для сверхточности
            const date = new Date();
            const hh = `${date.getHours() > 9 ? date.getHours() : '0' + date.getHours()}`;
            const mm = `${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}`;
            const currentHHMM = `${hh}:${mm}`;//устанавливаем текущее HH:MM
            if (currentHHMM === wakeUpTime) {//если текущее время равно времени подъема
                waitNextAlarmTime(updateTime);//останавливаем отчет до времени сна
                const checkTime = setAlarm(wakeUpTime, goodMorning);
                checkTime(currentHHMM);
            } else if (currentHHMM === bedTime) {//если пора спать
                waitNextAlarmTime(updateTime);//останавливаем отчет до времени подъема
                const checkTime = setAlarm(bedTime, goodNight);
                checkTime(currentHHMM);
            }
        }, 100);
    }
    alarm();
    
    function waitNextAlarmTime(id) {//ожидаем следующего будильника (как полагает автор, для экономии ресурсов)
        clearInterval(id); //останавливаем отчет времени 
        setTimeout(() => {
            alarm();//и возобновляем его
        }, delay);// примерно за минуту до следующего будильника если разница между временами более часа
    }
}

function setAlarm(time, callback) {
    return (currentHHMM) => {
        if (currentHHMM === time) callback();
    }
}

function getDelay(wakeUpTime, bedTime) {//получаем задержку в мс
    const a = wakeUpTime.split(':')//для этого преобразуем HH:MM
        .map(el => parseInt(el));//в массив чисел
    const b = bedTime.split(':')
        .map(el => parseInt(el));
    const delay = Math.abs((a[0] * 3600000 + a[1] * 60000) - (b[0] * 3600000 + b[1] * 60000));
    return delay;//убираем минус если вдруг у кого-то день начинается в ночь, а ночь в день
}

setDailyRhythm('11:29', '11:30');//для проверки ставил текущее время с разницей в минуту