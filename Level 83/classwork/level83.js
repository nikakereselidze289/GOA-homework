function sumNumbers() {
  let sum = 0;
  let i = 0;

  while (i <= 10) {
    if (i % 2 !== 0) {
      i++;
      continue; 
    sum += i;
    i++;
  }

  return sum;
}

console.log(sumNumbers()); 



// საკლასო დავალება:

// Day of the Week Message

// Write a switch case that takes a number (1–7) and logs the corresponding day of the week (e.g., 1 = "Monday").
function logDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number (must be 1–7)");
  }
}

logDayOfWeek(1); 
logDayOfWeek(7); 
logDayOfWeek(0); 




