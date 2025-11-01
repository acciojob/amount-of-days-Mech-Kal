//your JS code here. If required.
function daysOfAYear(year) {
  // Leap year logic:
  // 1️⃣ Divisible by 4 → leap year
  // 2️⃣ But if divisible by 100 → NOT leap year
  // 3️⃣ Unless also divisible by 400 → leap year again
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Example test cases
