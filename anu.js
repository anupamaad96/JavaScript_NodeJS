require('util')
cal()
function cal(){
  var argv = getMonthAndYear();
  var month = Number(argv[0])-1;console.log(month);
  var year = Number(argv[1]);console.log(year);
//  isValid(month, year);
  printCal(month, year);
}
function getMonthAndYear(){
  var argv = process.argv.slice(2);
  return argv;
}

function printCal(month, year){
  printHeader(month, year);
  var startDay= getStartDay(month, year);
  var NoOfDays= getNoOfDays(month, year);
  printCalendar(startDay,NoOfDays);
}

function getStartDay(month, year){
  var noLeapYear = Math.trunc(year/4)-Math.trunc(year/100)+Math.trunc(year/400);
  if(isLeapYear(year) && month<2) noLeapYear--;
  var monthOffset=getMonthOffset(month,year);
  var startDay=(year + noLeapYear + monthOffset + 6) % 7;
  return startDay;
}
