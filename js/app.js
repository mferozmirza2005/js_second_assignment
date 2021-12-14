// Chapter no. 21 - 25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var fName = prompt("First Name: ", "");
var lName = prompt("Last Name: ", " ");
var fullName = fName + lName;
alert("hello " + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

var favMobile = prompt("What is your favorite mobile", "");
document.write(
  "My favorite moblie is: " +
    favMobile +
    "<br> length of string: " +
    favMobile +
    "<br><br>"
);
document.write();

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var ourLove = "pakistani";
document.write(
  "String: " +
    ourLove +
    "<br> Index of 'n': " +
    ourLove.indexOf("n") +
    "<br><br>"
);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var helloWorld = "Hello World";
document.write(
  "String: " +
    helloWorld +
    "<br> Last Index of 'l': " +
    helloWorld.lastIndexOf("l") +
    "<br><br>"
);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

document.write(
  "String: " +
    ourLove +
    "<br> Character at Index 3: " +
    ourLove.charAt(3) +
    "<br><br>"
);

// 6. Repeat Q1 using string concat() method.

var FullName = fName.concat(lName);
alert("Hello " + FullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var wordReplaced = city.replace("Hyder", "Islam");
document.write(
  "City: " + city + "<br> After Replacment: " + wordReplaced + "<br><br>"
);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var messReplaced = message.replace(/and/g, "&");
document.write(
  "Message: " + message + "<br> After Replacment: " + messReplaced + "<br><br>"
);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var strNum = "472";
var conNum = parseInt(strNum);
document.write(
  "value: " +
    strNum +
    "<br> Type: " +
    typeof strNum +
    "<br> value: " +
    conNum +
    "<br> Type: " +
    typeof conNum +
    "<br><br>"
);

// 10. Write a program that takes user input. Convert and show the input in capital letters.

var lowerInp = prompt("type your words", "");
upperInp = lowerInp.toLocaleUpperCase();
document.write(
  "Lower Input: " + lowerInp + "<br> Upper Case: " + upperInp + "<br><br>"
);

// 11. Write a program that takes user input. Convert and show the input in title case.

var usInp = prompt("type your words", " ");
titleInp = usInp[0].toLocaleUpperCase() + usInp.slice(1);
document.write(
  "User Input: " + usInp + "<br> Title Case: " + titleInp + "<br><br>"
);

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var numToStr = num.toString();
numToStr = numToStr.replace(".", "");
document.write("Number: " + num + "<br> Result: " + numToStr + "<br><br>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

usname = prompt("enter your user name", "");
if (usname.includes("!") == true) {
  usname = prompt("enter a valid name", "");
} else if (usname.includes(",") == true) {
  usname = prompt("enter a valid name", "");
} else if (usname.includes(".") == true) {
  usname = prompt("enter a valid name", "");
} else if (usname.includes("@") == true) {
  usname = prompt("enter a valid name", "");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
usbake = prompt("wellcome to abc bakery. what do you want to order", "");
if (usbake.includes(A)) {
  document.write(
    usbake +
      " is available at index " +
      A.indexOf(usbake) +
      " in our bakery <br><br>"
  );
} else {
  document.write(
    "We are sorry. " + usbake + " is not available in our bakery <br><br>"
  );
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var usPass = prompt("enter the password", "");
if (usPass.search(/[A-Z]/) == -1 && usPass.search(/[a-z]/) == -1) {
  alert("please write atleast one alphabet");
  usPass = prompt("enter the password", "");
  if (usPass.search(/[0-9]/) == -1) {
    alert("please write atleast one number");
    usPass = prompt("enter the password", "");
    if (usPass.length < 6) {
      alert("please write atleast six letters long password.");
      usPass = prompt("enter the password", "");
    }
  }
}

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var arrUni = university.split("");
for (var i = 0; i < arrUni.length; i++) {
  document.write(arrUni[i] + "<br>");
}

// 17. Write a program to display the last character of a user input.

var userInp = prompt("write some letters", "");
document.write("user input: " + userInp + "<br>");
userInp = userInp.slice(-1);
document.write("<br>last character of input: " + userInp + "<br><br>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var mystr = "the quick brown fox jumps over the lazy dog";
var arrSplit = mystr.split(" ");

function sameItems(array, items) {
  array = array.reduce(function checking(count, elements) {
    return items === elements ? count + 1 : count;
  }, 0);
  var checked = [array, items];
  var ret =
    "Text: " +
    mystr +
    "<br> There are " +
    checked[0] +
    " occerences(s) of word " +
    checked[1] +
    "<br><br>";
  return ret;
}
document.write(sameItems(arrSplit, "'the'"));

// Chapter no. 26 - 30

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var usInteg = +prompt("write some numbers with decimal", "");
var usintRound = Math.round(usInteg);
var usintfloor = Math.floor(usInteg);
var usintciel = Math.ceil(usInteg);
document.write(
  "number: " +
    usInteg +
    "<br>round oof value: " +
    usintRound +
    "<br>floor value: " +
    usintfloor +
    "<br>cielvalue: " +
    usintciel +
    "<br><br>"
);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var usNegInteg = -prompt("write some negative numbers with decimal", "");
var usNegintRound = Math.round(usNegInteg);
var usNegintfloor = Math.floor(usNegInteg);
var usNegintciel = Math.ceil(usNegInteg);
document.write(
  "number: " +
    usNegInteg +
    "<br>round oof value: " +
    usNegintRound +
    "<br>floor value: " +
    usNegintfloor +
    "<br>cielvalue: " +
    usNegintciel +
    "<br><br>"
);

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var absNum = prompt("give us any number like positive, negative.", "");
absoluteNum = Math.abs(absNum);
document.write(
  "the absolute value of " + absNum + " is " + absoluteNum + "<br><br>"
);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var rendomNum = Math.random();
var dice = Math.ceil(rendomNum * 6);
document.write("rendom Dice value: " + dice + "<br><br>");

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var toss = Math.round(Math.random());
if (toss === 0) {
  document.write(toss + "<br>random coin value: Heads");
} else {
  document.write(toss + "<br>random coin value: Tails<br><br>");
}

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var rendomNumber = Math.random();
var renNum = Math.ceil(rendomNumber * 100);
document.write("rendom number between 1 and 100: " + renNum + "<br><br>");

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var usweight = prompt("what is your weight?", "50");
var Seprateweight = /\d+/;
var resultweight = usweight.match(Seprateweight);
document.write(
  "The weight of user is " + resultweight[0] + " kilograms<br><br>"
);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var usguess = +prompt("write a number between 1 to 10", "");
var numguess = Math.random();
var numMultiple = Math.ceil(numguess * 10);
if (numMultiple === usguess) {
  document.write("congrtulations your answer is correct.<br><br>");
} else {
  document.write("Oops! your answer is incorrect.<br><br>");
}

// Chapter no. 31 - 34

// 1. Write a program that displays current date and time in your browser.

var currDate = new Date();
document.write(currDate + "<br><br>");

// 2. Write a program that alerts the current month in words. For example December.

var month = currDate.getMonth();
var monthWord = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.write("Current month: " + monthWord[month] + "<br><br>");

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var day = currDate.getDay();
var dayWord = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.write("Current day: " + dayWord[day] + "<br><br>");

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

if (day == 0 || day == 6) {
  console.log("its Funday<br><br>");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var date = currDate.getDate();
if (date < 16) {
  document.write("First fifteen days of the month<br><br>");
} else {
  document.write("last day of the month is Friday<br><br>");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var currTime = new Date("Jan 01 1970 00:00:00");

var fromDate = currDate.getTime();
var fromTime = currTime.getTime();

var finalTime = fromDate - fromTime;
var FinalCalTime = finalTime / (1000 * 60 * 60);

document.write(
  "Current Date: " +
    currDate +
    "<br>Elapsed millisecond since January 1, 1970: " +
    finalTime +
    "<br>Elapsed minutes since January 1, 1970: " +
    FinalCalTime +
    "<br><br>"
);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var noonTime = currDate.getHours();
if (noonTime < 12) {
  document.write("it's AM<br><br>");
} else {
  document.write("it's PM<br><br>");
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("Dec 31 2020");
document.write(laterDate + "<br><br>");

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var ramadan = new Date("june 18 2015");

var fromCurrent = currDate.getTime();
var fromRamadan = ramadan.getTime();

var passedTime = fromCurrent - fromRamadan;
var daysPass = passedTime / (1000 * 60 * 60 * 24);
daysPass = parseInt(daysPass);
document.write(daysPass + " days hava passed since 1st Ramadan, 2015<br><br>");

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var date2015 = new Date("01/01/2015");

var fromCurrentDate = currDate.getTime();
var fromDate2015 = date2015.getTime();

var passedDate = fromCurrentDate - fromDate2015;
document.write(
  "On reference date " +
    currDate +
    ",<br>" +
    passedDate +
    " seconds had passed since beginning of 2015<br><br>"
);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var newHour = new Date();
document.write("current date: " + newHour);
var hours = newHour.setHours(20);
document.write("<br>1 hours ago, it was " + newHour + "<br><br>");

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var newYear = new Date();
var years = newYear.getFullYear() - 100;
alert("current date: " + newYear + " 100 years back, it was " + years);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var newTime = currDate.getTime();

var birthDate = new Date(
  prompt("type your birth date like this: jan 01 2000", "")
);
var birthTime = birthDate.getTime();
var finalCalDate = newTime - birthTime;
var final = finalCalDate / (1000 * 60 * 60 * 24 * 365);
final = Math.floor(final);
document.write(
  "your age is " + final + "<br>your birth year is " + birthDate.getFullYear()
);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customer = prompt("customer name:", "");
var billMonth = +prompt("current month:", "");
var billUnit = +prompt("Number of units:", "");
var unitCharge = +prompt("charges per unit:", "");
var billAmount = billUnit * unitCharge;
var billLate = +prompt("late payment surcharge:", "");
var billDue = billAmount + billLate;

document.write("<br><br><h1>K-Electric Bill</h1><br><br>");
document.write("Customer Name: " + customer);
document.write("<br>Mounth: " + billMonth);
document.write("<br>Number of units: " + billUnit);
document.write("<br>Charges per unit: " + unitCharge);
document.write("<br><br>Net Amount Payable (within Due Date) :" + billAmount);
document.write("<br>Late payment surcharge:" + billLate);
document.write("<br>Gross Amount Payable (after Due Date):" + billDue);

// Chapter no. 35 - 38

// 1. Write a function that displays current date & time in your browser.

function dateTime() {
  var date = new Date();
  return date;
}
document.write(dateTime());

// 2. Write a function that takes first & last name and then it greets the user using his full name.

function greet(fname, lname) {
  fname = prompt("first name:", "");
  lname = prompt("last name:", "");
  greeting = "Hello " + fname + " " + lname;
  return greeting;
}
document.write("<br><br>" + greet() + "<br><br>");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function sum(num1, num2) {
  num1 = +prompt("number 1", "");
  num2 = +prompt("number 2", "");
  return num1 + num2;
}
document.write(sum() + "<br><br>");

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculator(num1, num2, opr) {
  num1 = +prompt("number 1", "");
  num2 = +prompt("number 2", "");
  opr = prompt("give any operator" + "");
  if (opr === "+") {
    var calc = num1 + num2;
  } else if (opr === "-") {
    var calc = num1 - num2;
  } else if (opr === "*") {
    var calc = num1 * num2;
  } else if (opr === "/") {
    var calc = num1 / num2;
  } else if (opr === "%") {
    var calc = num1 % num2;
  }
  return calc;
}
document.write(calculator() + "<br><br>");

// 5. Write a function that squares its argument.

function sqr(square) {
  square = +prompt("give your value for make square", "");
  square = square * square;
  return square;
}
document.write(sqr() + "<br><br>");

// 6. Write a function that computes factorial of a number.

function factorial(number) {
  number = +prompt("give a number for making factorial", "");
  var fact = 1;
  if (number > 0) {
    document.write("sorry! the is negative we can't make factorial.");
  } else if (number === 0) {
    document.write("sorry! the is '0'. so, we can't make factorial.");
  } else {
    for (var i = number; i >= 1; i--) {
      fact = fact * i;
    }
    return fact;
  }
}
document.write(factorial() + "<br><br>");

// 7. Write a function that take start and end number as inputs & display counting in your browser.

function counter(starting, ending) {
  starting = +prompt("give starting number for start counting.", "");
  ending = +prompt("give ending number for end counting.", "");
  var count = " ";
  for (var i = starting; i < ending; i++) {
    document.write(i + "<br>");
  }
  return count;
}
document.write(counter());

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

function calculateHypotanuse(per, base) {
  per = +prompt("Perpendicular of a triangle", "");
  base = +prompt("Base of a triangle", "");
  h = per * per + base * base;
  function calculateSquare() {
    var hyp = Math.sqrt(h);
    return hyp;
  }
  return calculateSquare();
}
document.write(calculateHypotanuse() + "<br><br>");

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function rectArea(width, height) {
  var area = +width * +height;
  return area;
}
var width = 5;
var height = 10;
document.write(rectArea(width, height) + "<br><br>");

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function polindrome(word) {
  word = prompt("write a word to check is polindrome or not.", "");
  var reverse = word.split("");
  reverse = reverse.reverse().join("");
  if (word === reverse) {
    return `yes <b>${word}</b> is polindrome.`;
  } else {
    return `sorry! <b>${word}</b> is not polindrome.`;
  }
}
document.write(polindrome() + "<br><br>");

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

var funcword = "the quick brown fox";

function typeCorrector(str) {
  var words = str.split(" ");
  var newArr = [];
  for (var word of words) {
    var fLetter = word.substring(0, 1);
    fLetter = fLetter.toLocaleUpperCase();
    var other = word.substring(1);
    newArr.push(fLetter + other);
  }
  var sentence = newArr.join(" ");
  return sentence;
}
document.write(typeCorrector(funcword));

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

var funcLong = "Web Development Tutorial";
function longWord(word) {
  var str = word.split(" ").sort();
  return str[0];
}
document.write(longWord(funcLong)+"<br><br>");

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

var findword = "hello world";
function findingSame(word , letter){
    wordArr = word.split('');
    j = 0;
    for (let i = 0; i < word.length; i++) {
        if(wordArr[i] == letter){
            j++;
        }
    }
    return j;
}
document.write(findingSame(findword , "l")+"<br><br>");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumfarence(radius) {
    radius = +prompt("give radius of the circle: ", "");
    var cf = 2 * 3.14 * radius;
    var result = "The circumference is "+cf;
    return result;
}
document.write(calcCircumfarence()+"<br><br>");

function calcArea(radius) {
    radius = +prompt("give radius of the circle: ", "");
    var ca =  3.14 * radius * 2;
    var result = "The Area is "+ca;
    return result;
}
document.write(calcArea()+"<br><br>");

// Chapter no. 38 - 44

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function customPow(a , b) {
    a = +prompt("give the value of base:", "");
    b = +prompt("give the value of power", "");
    var result = 1;
	if(b == undefined)
    b = 2;
	for(var i = 1 ; i <= b ; i++) {
		result = result * b;
	}
	return result;
}
document.write(customPow()+"<br><br>");

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

function yearDetector(Year) {
    var currDate = new Date();
    var usdate = new Date();
    
    Year = prompt("write any year to check is current or not", "");
    var usYear = usdate.setFullYear(Year);

    var currYear = currDate.getFullYear();
    var ustime = usdate.getFullYear();
    var timeDiv = currYear - ustime;
    if(ustime < 2000){
        var result = "you entered "+timeDiv+" years old year.";
        return result;
    }
    else {
        var result = "you entered current year.";
        return result;
    }
}
document.write(yearDetector());