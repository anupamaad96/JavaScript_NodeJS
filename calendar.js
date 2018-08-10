require('util')
cal()
function cal()
{
   var argv = getMonth_Year();
   var month = Number(argv[0]) - 1;
   var year = Number(argv[1]);
   printCal(month, year);
}
function getMonth_Year()
{
  var argv = process.argv.slice(2);
  return argv;
  }
function printCal(month, year)
{
  var week_day = getWeekDay(month, year);
  var month_days = getMonthDays(month, year);
  printHeader( month,year );
  printDates(week_day, month_days);
}
function getWeekDay(month, year)
{
  var noLeapYear = Math.trunc(year/4)-Math.trunc(year/100)+Math.trunc(year/400);
  if(isLeapYear(year) && month<2) noLeapYear--;
  var monthOffset=getMonthOffset(month,year);
  var week_day=(year + noLeapYear + monthOffset + 6) % 7;
  return week_day;
}

function getMonthOffset(month,year){
  monthoffset=[1,4,4,0,2,5,0,3,6,1,4,6];
  return monthoffset[month];
}

function getMonthDays(month, year){
  var f = isLeapYear(year)
  if (f)
     day = 29;
  else
    day = 28;

  days = [31,day,31,30,31,30,31,31,30,31,30,31];
  return days;
}

function isLeapYear(year){
  if(year%400 == 0)return true;
  if(year%100 == 0)return false;
  if(year%4 == 0)return true;
  return false;
}

function printHeader(month, year){
  var mnth= month +1;
  console.log("\n\n   " + m +"  "+ year);
  console.log("Mo Tu We Th Fr Sa Su ");
}

function printDates(week_day,month_days){
  var i=0;
  var rowstr = " ";
  for (i=0;i<6;i++){
    rowstr = formatRow(i,week_day,month_days);
      console.log(rowstr);
}
function formatRow(row, week_day, month_days){
  var i=0;
  var value=0;
  var rowstr=" ";
  for(i=0;i<7;i++){
    value = row * 7 + i - week_day + 1;
    if (value < 1 || value > month_days )rowstr = rowstr +" ";
    else if (value < 10) rowstr=rowstr + " " + value.toString();
  else rowstr = rowstr + value.toString();
  rowstr = rowstr + " ";
  }
  return rowstr;
}
