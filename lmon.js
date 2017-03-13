function main()
{
  var d = new Date(); // date object
  var dayOfWeek = d.getDay(); // day of the week
  var hour = d.getHours(); // hour of the day
  var min = d.getMinutes(); // minute of the hour

  var isLateMeal = false;
  var typeLateMeal = 0; // 0 for lunch, 1 for dinner

  // No late meal on the weekend
  if (dayOfWeek != 0 && dayOfWeek != 6)
  {
    // Late lunch every Mon-Fri 2pm - 3:45pm
    if (hour == 14 || (hour == 15 && min <= 45))
    {
      isLateMeal = true;
      typeLateMeal = 0; // lunch
    }
    // late dinner every Mon-Thurs 8:30pm - 10pm
    if (dayOfWeek != 5 &&
      ((hour == 20 && min >= 30)|| (hour == 21) ||
        (hour == 22 && min == 0)))
    {
      isLateMeal = true;
      typeLateMeal = 1;
    }
  }

  changeText(isLateMeal); // update site text

  // Show time until or left of late meal
  if (isLateMeal)
  {
    timeLeft(typeLateMeal, hour, min);
  }
  else
  {
    timeTill(dayOfWeek, hour, min);
  }

}
// Update site text
function changeText(isLateMeal)
{
  if (isLateMeal)
  {
    document.getElementById("yesJava").innerHTML = "Yes!";
  }
  else
  {
    document.getElementById("noJava").innerHTML = "Nah.";
  }
}
// Calculate and display time left of late meal
function timeLeft(typeLateMeal, hour, min)
{
  var hourLeft
  var minLeft;

  if (typeLateMeal == 0) // lunch late meal
  {
    hourLeft = 15 - hour;
    minLeft = (45 + (60 * hourLeft)) - min;
    /*if (minLeft > 45) // 2:45 - 3 window
    {
      hourLeft = 0;
    } */

    if (hourLeft != 0 && minLeft <= 45)
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hour and " + minLeft + " minutes until Late Meal ends." + "&nbsp";
    }
    else if (hourLeft != 0 && (minLeft - 60) > 0)
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hour and " + (minLeft - 60) + " minutes until Late Meal ends." + "&nbsp";
    }
    else
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + minLeft + " minutes until Late Meal ends." + "&nbsp";
    }
  }
  else // dinner late meal
  {
    hourLeft = 21 - hour; // hour remaining only if it's before 9
    minLeft = 60 - min;

    if (hourLeft != 0)
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hour and " + minLeft + " minutes until Late Meal ends." + "&nbsp";
    }
    else
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + minLeft + " minutes until Late Meal ends." + "&nbsp";
    }
  }
}
// Calculates and displays time until late meal starts
function timeTill(dayOfWeek, hour, min)
{
  var hourLeft;
  var minLeft;

  // Weekend
  if (dayOfWeek == 0 || dayOfWeek == 6)
  {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "No Late Meal on the weekends, silly." + "&nbsp";
  }
  // Friday
  else if (dayOfWeek == 5)
  {
    if (hour < 14) // before 2pm
    {
      hourLeft = 13 - hour;
      minLeft = 60 - min;

      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hours and " + minLeft + " minutes until Late Meal begins" + "&nbsp";
    }
    else // after late lunch
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "No more Late Meal today. Sorry, tigers." + "&nbsp"
    }
  }
  else
  {
    if (hour < 14) // before 2pm
    {
      hourLeft = 13 - hour;
      minLeft = 60 - min;

      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hours and " + minLeft + " minutes until Late Meal begins" + "&nbsp";
    }
    else if (hour == 20 && min < 30) // before 8:30pm but after 8pm
    {
      minLeft = 30 - min;
      document.getElementById("timeUntil").innerHTML = "&nbsp" + minLeft + " minutes until Late Meal begins." + "&nbsp";
    }
    else if ((hour < 20) && (min <= 30))
    {
      hourLeft = 20 - hour;
      minLeft = 30 - min;

      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hours and " + minLeft + " minutes until Late Meal begins" + "&nbsp";
    }
    else if ((hour < 20) && (min > 30))
    {
      hourLeft = 19 - hour;
      minLeft = 60 - min;

      document.getElementById("timeUntil").innerHTML = "&nbsp" + hourLeft + " hours and " + minLeft + " minutes until Late Meal begins" + "&nbsp";
    }
    else
    {
      document.getElementById("timeUntil").innerHTML = "&nbsp" + "No more Late Meal today. Sorry, tigers." + "&nbsp";
    }
  } 
}
