/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfTheWeek {
  Monday ='MON',
  Tuesday ='TUE',
  Wednesday='WED',
  Thursday='THU',
  Friday='FRI',
  Saturday='SAT',
  Sunday='SUN',
}

function isWeekend(day: DaysOfTheWeek):boolean {
  return day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday; 
}