/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["Monday"] = "MON";
    DaysOfTheWeek["Tuesday"] = "TUE";
    DaysOfTheWeek["Wednesday"] = "WED";
    DaysOfTheWeek["Thursday"] = "THU";
    DaysOfTheWeek["Friday"] = "FRI";
    DaysOfTheWeek["Saturday"] = "SAT";
    DaysOfTheWeek["Sunday"] = "SUN";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
function isWeekend(day) {
    return day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday;
}
//# sourceMappingURL=7.js.map