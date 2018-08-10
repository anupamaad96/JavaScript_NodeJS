var myArgs = process.argv.slice(2);
function checkleap(yr)
{
  return ((yr % 4 == 0) && (yr % 100 != 0)) || (yr % 400 == 0);
}
var s2000 = 6;
var year = Number(myArgs[0]);
var month = Number(myArgs[1]);
var febd;
var calitems = [
  ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
  ['..','..','..','..','..','..','..',],
];

function setcal(monthd,month)
{
  var i=1,j;
  mond=days[month-1];
  var c =1;
  for(j=monthd;j<7;j++)
  {
    if (c<10)
    {
      calitems[i][j] = ' '+c;
      c++;
    }
    else
    {
      calitems[i][j] = c;
      c++;
    }
  }

  for (i=2;i<7;i++)
  {
    for(j=0;j<7;j++)
    {
      if (c>mond) {
        continue;
      }
      if (c<10)
      {
        calitems[i][j] = ' '+c;
        c++;
      }
      else
      {
        calitems[i][j] = c;
        c++;
      }
    }
  }
}



function printyear(calitems)
{
  var i,j;
  console.log("\n");
  console.log("       "+month+" "+year)
  for(i=0;i<7;i++)
  {
    console.log(calitems[i][0]+" "+calitems[i][1]+" "+calitems[i][2]+" "+calitems[i][3]+" "+calitems[i][4]+" "+calitems[i][5]+" "+calitems[i][6]);
  }
}

function setbl()
{
  var  i,j;
  for (i = 0; i < 7; i++)
    for (j = 0; j < 7 ;j++)
    {
      if (calitems[i][j]=='..')
      {
        calitems[i][j]='  '
      }
    }
}


var f = checkleap(year)
if (f)
   febd=29;
else
  febd=28;

days = [31,febd,31,30,31,30,31,31,30,31,30,31];
var yeard = year-2000;
var leapd = yeard/4;
yeard = Math.ceil(yeard)
leapd = Math.ceil(leapd)
//console.log(yeard);
//console.log(leapd);

var diff = (yeard-leapd)+(2*leapd);

//console.log(diff);

diff = diff%7;
diff = diff-1;
diff = Math.abs(diff)
//console.log(diff+"Difference");
var totalspend=0
var monthd=0

switch (month) {
  case 1:
        totalspend=0;
        monthd=totalspend%7;
    break;
  case 2:
        totalspend=days[0];
        monthd=totalspend%7;
    break;
  case 3:
          totalspend=days[0]+days[1];
          monthd=totalspend%7;
    break;
  case 4:
          totalspend=days[0]+days[1]+days[2];
          monthd=totalspend%7;
    break;
  case 5:
          totalspend=days[0]+days[1]+days[2]+days[3];
          monthd=totalspend%7;
    break;
  case 6:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4];
          monthd=totalspend%7;
    break;
  case 7:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5];
          monthd=totalspend%7;
    break;
  case 8:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6];
          monthd=totalspend%7;
    break;
  case 9:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7];
          monthd=totalspend%7;
    break;
  case 10:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8];
          monthd=totalspend%7;
    break;
  case 11:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8]+days[9];
          monthd=totalspend%7;
    break;
  case 12:
          totalspend=days[0]+days[1]+days[2]+days[3]+days[4]+days[5]+days[6]+days[7]+days[8]+days[9]+days[10];
          monthd=totalspend%7;
    break;


}
//console.log((monthd+diff)%7);
//console.log((monthd+diff-1)%7);
//console.log(monthd+diff);
//console.log(monthd-diff);
//console.log(monthd-diff);
setcal((monthd+diff)%7,month);

setbl()


//console.log(calitems)
printyear(calitems)
console.log("\n");
