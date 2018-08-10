require ('util')
cal()
function cal(){
  var argv = getMonthAndYear();
  var month = Number(argv[0])-1;
  var year = Number(argv[1]);
  //validate(month,year);
  printCal(month,year);
  }
  function getMonthAndYear(){
     var argv = process.argv.slice(2);
     return argv;
  }
  function printCal(month,year){
    var WeekDay =  getStartWeekDay(month ,year);
    var DaysInMonth = getDaysInMonth(month,year);
    printHeadLines( month,year );
    printDates(WeekDay,DaysInMonth);
  }
  function getStartWeekDay(month,year){
    var noLeapYears = Math.trunc(year/4) - Math.trunc(year/100) + Math.trunc(year/400);
    if(isLeapYear(year) && month <2)noLeapYears--;
     var monthOffset=getMonthOffset(month,year);
     var WeekDay=(year + noLeapYears + monthOffset + 6) % 7;
     return WeekDay;
  }
  function isLeapYear(year){
    if(year %400==0)return true;
    if(year %100==0)return false;
    if(year %4==0)return true;
    return false;
  }
  function printHeadLines(month,year){
    var m = month  + 1;
    console.log("\n\n     "+ m + ',' + year);
    console.log("Su Mo Tu We Th Fr Sa ");
  }
  function printDates(WeekDay,DaysInMonth){
    var i=0;
    var rowstr = "";
    for (i=0;i<6;i++){
      rowstr = formatRow(i,WeekDay,DaysInMonth)
        console.log(rowstr);
      }
  }
  function formatRow(row,WeekDay,DaysInMonth){
    var i=0;
    var value=0;
    var rowstr=" ";
    for(i=0;i<7;i++){
      value = row * 7 + i - WeekDay + 1;
      if (value < 1 || value > DaysInMonth )rowstr = rowstr +" ";
      else if (value < 10) rowstr=rowstr + " " + value.toString();
    else rowstr = rowstr + value.toString();
    rowstr =rowstr + " ";
    }
    return rowstr;
  }
function getMonthOffset(month,year){
  monthoffset=[1,4,4,0,2,5,0,3,6,1,4,6];
  return monthoffset[month];
}

function getDaysInMonth(month,year){

   LeapYearDays = [31,29,31,30,31,30,31,31,30,31,30,31];
   nonLeapYearDays=[31,28,31,30,31,30,31,31,30,31,30,31];
   var a= isLeapYear(year)
   if (a==true)
   {
     return LeapYearDays[month];
   }
   else
   {
      return nonLeapYearDays[month];
   }
 }
