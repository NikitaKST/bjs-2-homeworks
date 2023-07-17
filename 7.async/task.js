class AlarmClock {
    constructor() {
        this.alarmCollection = []; //для хранения коллекции звонков
        this.intervalId = null;       //для хранения id таймера  
    }
    //добавляет новый звонок в коллекцию
    addClock(timeStart, callback) { 
        if (!timeStart || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }

        // if (this.alarmCollection.some(alarm => alarm.time === timeStart)) {
        //     console.warn('Уже присутствует звонок на это же время');
        //     return;
        // }
        
        
        const newAlarm = {
            time: timeStart,
            callback: callback,
            canCall: true
          };

        this.alarmCollection.push(newAlarm);
        return console.log('Будильник установлен!');  
    }
    //удаляет звонки по определённому времени
    removeClock(time) {              
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    //возвр текущее время в стр.формате HH:MM 
    getCurrentFormattedTime() {            
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`; 
    }
    //запускает будильник
    start() {                         
        if (this.intervalId !== null) { //проверка наличия интервалов
            return;    
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
        
            this.alarmCollection.forEach(alarm => {
              if (alarm.time === currentTime && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
              }
            });
          }, 1000);
    }
    //останавливает выполнение интервала будильника
    stop() {                  
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    //сбрасывает возможность запуска всех звонков.
    resetAllCalls() {       
        this.alarmCollection.forEach(alarm => {
        alarm.canCall = true;
        });
    }
    //удаляет все звонки
    clearAlarms() {         
        this.stop(); // Вызов метода остановки интервала
        this.alarmCollection = [];
        
    }

}

const alarm = new AlarmClock();

// console.log(alarm);
console.log(alarm.addClock('16:45', () => console.log('Будильник установлен!')));
console.log(alarm.alarmCollection.length);
// console.log(alarm);
// console.log(alarm.removeClock('16:45'));
// console.log(alarm);
alarm.clearAlarms();
console.log(alarm);
console.log(alarm.alarmCollection.length);



