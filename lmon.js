function main()
{
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  var min = d.getMinutes();

  var isLateMeal = true;

  if (day == 0 || day == 6)
    isLateMeal = false;
  else if (day == 5)
  {
    if (hour < 14 || hour >= 16)
      isLateMeal = false;
  }
  else if (hour < 14 || hour >= 22)
    isLateMeal = false;
  else if (hour >= 16 && hour < 20)
    isLateMeal = false;
  else if (hour == 3 && min >= 45)
    isLateMeal = false;
  else if (hour == 8 && min < 30)
    isLateMeal = false;
  else if (hour == 15 && min > 45)
  	isLateMeal = false;
    
  change(isLateMeal);
  
  if (isLateMeal)
    timeLeft(day, hour, min);
  else
    timeTill(day, hour, min);
}

function change(a)
{
  if (a)
    {document.getElementById("yesJava").innerHTML = "Yes!";}
  else
    {document.getElementById("noJava").innerHTML = "Nah.";}
}

function timeLeft(day, hour, min)
{
  if (hour == 14)
  {
    if (min > 45)
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "1 hour and " + (min-45) + " minutes until Late Meal ends." + "&nbsp";
    else
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "1 hour and " + (105-min) + " minutes until Late Meal ends." + "&nbsp";
  }
  else if (hour == 15)
  {
    if (min > 45)
      document.getElementById("timeUntil").innerHTML = "&nbsp" + (105 - min) + " minutes until Late Meal ends." + "&nbsp";
    else
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "1 hour and " + (45-min) + " minutes until Late Meal ends." + "&nbsp";
  }
  else if (hour == 20)
  {
    document.getElementById("timeUntil").innerHTML = "&nbsp" + "1 hour and " + (60-min) + " minutes until Late Meal ends." + "&nbsp";
  }
  else if (hour == 21)
  {
    document.getElementById("timeUntil").innerHTML = "&nbsp" + (60-min) + " minutes until Late Meal ends." + "&nbsp";
  }
}

function timeTill(day, hour, min)
{
  var hl;
  var ml;
  
  if (day == 0 || day == 6)
    document.getElementById("timeUntil").innerHTML = "&nbsp" + "No Late Meal on the weekend, silly." + "&nbsp";
  else if (day == 5)
  {
    if (hour == 0)
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "13 hours and " + (60-min) + " minutes until Late Meal begins." + "&nbsp";
    }
    else if (hour < 14)
    {
  	  hl = 14 - hour;
      document.getElementById("timeUntil").innerHTML = "&nbsp" + (hl-1) + " hours and " + (60-min) + " minutes until Late Meal begins." + "&nbsp";
    }
    else
      document.getElementById("timeUntil").innerHTML = "&nbsp" + min + "No more Late Meal today. Sorry, friend." + "&nbsp";
  }
  else
  {
    if (hour == 0)
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "13 hours and " + (60-min) + " minutes until Late Meal begins." + "&nbsp";
    }
    else if (hour < 14)
    {
  	  hl = 14 - hour;
      document.getElementById("timeUntil").innerHTML = "&nbsp" + (hl-1) + " hours and " + (60-min) + " minutes until Late Meal begins." + "&nbsp";
    }
    else if (hour == 20 && min < 30)
    {
      ml = 30 - min;
      document.getElementById("timeUntil").innerHTML = "&nbsp" + ml + " minutes until Late Meal begins." + "&nbsp";
    }
    else if ((hour < 20) && (min < 30))
    {
      hl = 20 - hour;
      ml = 30 - min;
      document.getElementById("timeUntil").innerHTML = "&nbsp" + hl + " hours and " + ml + " minutes until Late Meal begins." + "&nbsp";
    } // make it work at 3:55
    else
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "No more Late Meal today. Sorry, friend." + "&nbsp";
  }
}














