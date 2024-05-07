// Task - Q1

// Function to get current day in words
document.write(`<h1><u>Q1 </u></h1><p>  Write a JavaScript program to display the current day and time in the <br>following format. <br>Sample Output : Today is : Tuesday. <br>Current time is : 10 PM : 30 : 38</p>`);

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return days[today];
}

// Function to format time
function formatTime(hour, minute, second) {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour} ${ampm} : ${minute} : ${second}`;
}

// Function to get current time
function getCurrentTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    return formatTime(hour, minute, second);
}

// Get current day and time
const today = getCurrentDay();
const currentTime = getCurrentTime();

// Display the result
document.write(`<h1><u><b>Ans. 1 </u></h1><p>Today is: ${today}. <br> Current time is: ${currentTime}</b></p>`);

// Task - Q2

// Function to format date
document.write(`<h1><u>Q2 </u></h1><p>Write a JavaScript program to get the current date. <br>Expected Output : <br>mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy</p>`);
document.write(`<h1><u>Ans. 2 </u></h1>`);

function getCurrentDate(format) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    let formattedDate;

    switch (format) {
        case 'mm-dd-yyyy':
            formattedDate = `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}-${year}`;
            break;
        case 'mm/dd/yyyy':
            formattedDate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
            break;
        case 'dd-mm-yyyy':
            formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
            break;
        case 'dd/mm/yyyy':
            formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
            break;
        default:
            formattedDate = "Invalid format";
    }

    return formattedDate;
}

// Example usage:
document.write("<p><b> Current date in mm/dd/yyyy format: "+getCurrentDate('mm-dd-yyyy')+"</b></p>"); // Output: mm-dd-yyyy format
document.write("<p><b> Current date in mm/dd/yyyy format: "+getCurrentDate('mm/dd/yyyy')+"</b></p>"); // Output: mm/dd/yyyy format
document.write("<p><b> Current date in dd/mm/yyyy format: "+getCurrentDate('dd-mm-yyyy')+"</b></p>"); // Output: dd-mm-yyyy format
document.write("<p><b> Current date in dd/mm/yyyy format: "+getCurrentDate('dd/mm/yyyy')+"</b></p>"); // Output: dd/mm/yyyy format


// Task - Q3

// Function to check if January 1st is a Sunday for a given year
document.write(`<h1><u>Q3</u></h1><p><b>Write a JavaScript program to find out if 1st January will be a Sunday <br> between 2024 and 2050.</b></p>`);
document.write(`<h1><u>Ans. 3 </u></h1>`);
function isFirstJanuarySunday(year) {
    const januaryFirst = new Date(year, 0, 1); // Month is 0-based in JavaScript Date object
    return januaryFirst.getDay() === 0; // Sunday is represented by 0 in JavaScript Date object
}

// Check for each year between 2024 and 2050
for (let year = 2024; year <= 2050; year++) {
    if (isFirstJanuarySunday(year)) {
        document.write(`<p><b>January 1st, ${year} is a Sunday.</b></p>`);
    }
}

// Task - Q4

document.write(`<h1><u>Q4</u></h1><p><b>Write a JavaScript program where the program takes a random integer <br>between 1 and 10, and the user is then prompted to input a guess <br>number. The program displays a message "Good Work" if the input <br>matches the guess number otherwise "Not matched".</b></p>`);
document.write(`<h1><u>Ans. 4 </u></h1>`);
// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a guess number
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess matches the random number
if (userGuess === randomNumber) {
    document.write("<b>Good Work!</b>");
} else {
    document.write("<b>Not matched. The correct number was: " + randomNumber +"</b>");
}

// Task - Q5
document.write(`<h1><u>Q5</u></h1><p><b>Write a JavaScript program to calculate the days left before 14 August.</b></p>`);
document.write(`<h1><u>Ans. 5 </u></h1>`);
// Get the current date
const currentDate1 = new Date();

// Set the target date to August 14th of the current year
const targetDate = new Date(currentDate1.getFullYear(), 7, 14); // Months are zero-based, so August is represented by 7

// Calculate the difference in milliseconds between the target date and the current date
const differenceInMilliseconds = targetDate - currentDate1;

// Convert the difference from milliseconds to days
const daysLeft = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

// Display the result
document.write(`<p><b>Days left before August 14th: ${daysLeft} days</b></p>`);

// Task - Q6
document.write(`<h1><u>Q6</u></h1><p><b>Write a JavaScript program to remove a character at the specified <br>position in a given string and return the modified string.</b></p>`);
document.write(`<h1><u>Ans. 6 </u></h1>`);

function removeCharacter(str, position) {
    // Check if position is valid
    if (position < 0 || position >= str.length) {
        return "Invalid position";
    }
    
    // Remove the character at the specified position
    const modifiedString = str.slice(0, position) + str.slice(position + 1);
    
    return modifiedString;
}

// Test the function
const inputString = "SIR RIZWAN BHATTI";
const positionToRemove = 6;
const modifiedString = removeCharacter(inputString, positionToRemove);

document.write(`<p><b>Original String: ${inputString}</b></p>`);
document.write(`<p><b>Modified String: ${modifiedString}</b></p>`);

// Task - Q7
document.write(`<h1><u>Q7</u></h1><p><b>Write a JavaScript program to check whether a given positive number <br> is a multiple of 3 or 7.</b></p>`);
document.write(`<h1><u>Ans. 7 </u></h1>`);

function isMultipleOf3Or7(number) {
    if (number <= 0) {
        return false; // Negative numbers or zero are not considered.
    }

    if (number % 3 === 0 || number % 7 === 0) {
        return true; // Number is a multiple of 3 or 7.
    } else {
        return false; // Number is not a multiple of 3 or 7.
    }
}

// Example usage:
const numberToCheck = 21; // Change this number to test different values
if (isMultipleOf3Or7(numberToCheck)) {
    document.write("<p><b>"+ numberToCheck + " is a multiple of 3 or 7.</b></p>");
} else {
    document.write("<p><b>"+ numberToCheck + " is not a multiple of 3 or 7.</b></p>");
}


// Define a function named test37 that takes a parameter x
function test37(x) {
    // Check if x is divisible by 3 or 7
    if (x % 3 == 0 || x % 7 == 0) {
      // If true, return true
      return true;
    } 
    // If not divisible by 3 or 7, return false
    else {
      return false;
    }
  }
  
  // Log the result of calling the test37 function with the argument 12 to the console
  console.log(test37(12));
  
  // Log the result of calling the test37 function with the argument 14 to the console
  console.log(test37(14));
  
  // Log the result of calling the test37 function with the argument 10 to the console
  console.log(test37(10));
  
  // Log the result of calling the test37 function with the argument 11 to the console
  console.log(test37(11)); 

//   Task - Q8
  document.write(`<h1><u>Q8</u></h1><p><b>Write a JavaScript program to check whether a string starts with 'Java' if <br>it does not otherwise</b></p>`);
  document.write(`<h1><u>Ans. 8 </u></h1>`);


  function startsWithJava(str) {
    return str.startsWith('Java');
}

// Example usage:
const testString = 'JavaScript'; // Change this string to test different values
if (startsWithJava(testString)) {
    document.write("<p><b>"+ testString + " starts with 'Java'.</b></p>");
} else {
    document.write("<p><b>"+ testString + " does not start with 'Java'.</b></p>");
}

function startsWithJava(str) {
    return str.startsWith('Java');
}

// Example usage:
document.write("<p><b>"+startsWithJava('JavaScript')+"</b></p>"); // false
document.write("<p><b>"+startsWithJava('Java is awesome')+"</b></p>"); // true

// Task - Q9
document.write(`<h1><u>Q9</u></h1><p><b>Write a JavaScript program to check whether two given integer values are <br>in the range 50..99 (inclusive). Return true if either of them falls within the <br>range.</b></p>`);
document.write(`<h1><u>Ans. 9 </u></h1>`);

function isInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Example usage:
document.write("<p><b>"+ isInRange(30, 70)+"</b></p>"); // true (70 falls within the range)
document.write("<p><b>"+ isInRange(20, 40)+"</b></p>"); // false (both are outside the range)
document.write("<p><b>"+ isInRange(60, 100)+"</b></p>"); // true (60 falls within the range)

// Task - Q10
document.write(`<h1><u>Q10</u></h1><p><b>Write a JavaScript program to check whether three given integer values are in <br>the range 50..99 (inclusive). Return true if one or more of them <br>are in the specified range.</b></p>`);
document.write(`<h1><u>Ans. 10 </u></h1>`);

function areInRange(num1, num2, num3) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99);
}

// Example usage:
document.write("<p><b>"+areInRange(30, 70, 90)+ "</b></p>"); // true (70 and 90 fall within the range)
document.write("<p><b>"+areInRange(20, 40, 100)+ "</b></p>"); // false (none fall within the range)
document.write("<p><b>"+areInRange(60, 100, 80)+ "</b></p>"); // true (60 and 80 fall within the range)


function areInRange(num1, num2, num3) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99);
}

// Example usage:
console.log(areInRange(30, 70, 80)); // true (70 and 80 fall within the range)
console.log(areInRange(20, 40, 100)); // false (none are within the range)
console.log(areInRange(60, 100, 90)); // true (60 and 90 fall within the range)

