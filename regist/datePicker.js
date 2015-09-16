
   function YYYYMMDDstart()
   {
           MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

           //先给年下拉框赋内容
           var y = new Date().getFullYear();
           var year = document.getElementById("YYYY");
           year.options.length = 0;
           for (var i = (y-12); i <= y; i++) //以今年为准，前12年
                   year.options.add(new Option(" "+ i , i));

           //赋月份的下拉框
           var month = document.getElementById("MM");
           month.options.length = 0;
           for (var i = 1; i < 13; i++)
                   month.options.add(new Option(" " + i , i));

           year.value = y;
           month.value = new Date().getMonth() + 1;
           var n = MonHead[new Date().getMonth()];
           if (new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;
                writeDay(n); //赋日期下拉框Author:meizz
           var date = document.getElementById("DD");
           date.value = new Date().getDate();
   }
   if(document.attachEvent)
       window.attachEvent("onload", YYYYMMDDstart);
   else
       window.addEventListener('load', YYYYMMDDstart, false);
   function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
   {
     var monthPicker = document.getElementById("MM");
           var MMvalue = document.getElementById("MM").options[document.getElementById("MM").selectedIndex].value;

           var n = MonHead[MMvalue - 1];
           if (MMvalue ==2 && IsPinYear(str)) n++;
                writeDay(n)
   }
   function MMDD(str)   //月发生变化时日期联动
   {
        var YYYYvalue = document.getElementById("YYYY").options[document.getElementById("YYYY").selectedIndex].value;

        var n = MonHead[str - 1];
        if (str ==2 && IsPinYear(YYYYvalue)) n++;
       writeDay(n)
   }
   function writeDay(n)   //据条件写日期的下拉框
   {
           var e = document.getElementById("DD");
           e.options.length = 0;
           for (var i=1; i<(n+1); i++)
                e.options.add(new Option(" "+ i , i));
   }
   function IsPinYear(year)//判断是否闰平年
   {     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}
