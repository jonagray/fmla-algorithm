'use strict';

let day = {
  weekday: 'monday',
  hours: 10,
  preferences: ['sick', 'vacation', 'ac', 'lwop'],
  sick: 2.41,
  vacation: 3.20,
  ac: 3.78,
  lwop: 0
}

let modifiedDay = {...day}

let takeLeave = function (hours) {
  
  while (hours) {

    while (day[day.preferences[0]] && hours) {
      hours = parseFloat(parseFloat(hours - 0.01).toPrecision(3));
      day[day.preferences[0]] = parseFloat(parseFloat(day[day.preferences[0]] - 0.01).toPrecision(3));
    }
    

    while (day[day.preferences[1]] && hours) {
      hours = parseFloat(parseFloat(hours - 0.01).toPrecision(3));
      day[day.preferences[1]] = parseFloat(parseFloat(day[day.preferences[1]] - 0.01).toPrecision(3));
    }


    while (day[day.preferences[2]] && hours) {
      hours = parseFloat(parseFloat(hours - 0.01).toPrecision(3));
      day[day.preferences[2]] = parseFloat(parseFloat(day[day.preferences[2]] - 0.01).toPrecision(3));
    }


    while (hours) {
      hours = parseFloat(parseFloat(hours - 0.01).toPrecision(3));
      day[day.preferences[3]] = parseFloat(parseFloat(day[day.preferences[3]] + 0.01).toPrecision(3));
    }
  }
}
 
takeLeave(day.hours);

let oof = modifiedDay[modifiedDay.preferences[2]] - day[day.preferences[2]];

for (let i = 0; i < modifiedDay.preferences.length; i++) {
  let oof = modifiedDay[modifiedDay.preferences[i]] - day[day.preferences[i]];
  modifiedDay[modifiedDay.preferences[i]] = parseFloat(parseFloat(oof).toPrecision(3));
  if (modifiedDay[modifiedDay.preferences[i]] < 0) {
    modifiedDay[modifiedDay.preferences[i]] = Math.abs(modifiedDay[modifiedDay.preferences[i]]);
  }
}

console.log(day);

console.log(modifiedDay);