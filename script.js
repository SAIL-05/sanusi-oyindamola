console.log(200);


// prompt()

// let input = prompt("enter a name");
// console.log(input);
// let drama = prompt("login here");
// alert("success");

// let name = prompt("what is your name");
// console.log(name);
// alert("this is good");
// let date = prompt("enter dateof birth");
// console.log(date);
// alert("good to go");
// const number = prompt("enter digit");
// console.log(number);
// alert("invalid");





//  Alert

//alert("correct");
//alert("all the best");
//alert("welcome to my site");
//alert("logged in successfully");
//alert("login denied");

// Backtick

// let name = ["joy","tunde","bolu",];
// let greetings = `welcome ${name} to the community `;
// console.log(greetings);

// let number= "25";
// let digit = ` ${number} `;
// console.log(digit);



// let name = prompt("what is your name")
// console.log(name)
// alert("good to good");
// const username = prompt("Enter your name");
// alert(`welcome ${username}`);
//  let name = prompt("who are you")
//  console.log(name)
//  alert("you can go");

// to check if a number is even or odd

// let shege = parseInt(prompt("Enter a number"))
// if(shege % 2 === 0){
//     alert("this is an even number");
// }else{
//     alert("This is an odd number");
// }

// to check if a number is positive or negative

// let shege = parseInt(prompt("Enter a number"))
// if(shege >= 0){
//     alert(`${shege} is a positive number`);
// }else if(shege < 0 ){
// alert(`${shege} is a negative number`);
// }else{
//     alert("Enter a number");
// }

// to input the grades of yor students

// let grade = parseInt(prompt("Enter correct score"))
// if(grade >= 75 && grade <= 100){
//     alert(`${grade} is Grade A`);
// }else if(grade >=60 && grade < 75){
//    alert(`${grade} is Grade B`);
// }else if(grade >= 50 && grade <60 ){
//     alert(`${grade} is Grade C`);
// }else if(grade >=40 && grade < 50){
//     alert(`${grade} is Grade D`);
// }else if(grade >=30 && grade < 40){
//     alert(`${grade} is Grade E`);
// }else if(grade >=0 && grade < 30){
//     alert(`${grade} is Grade F`);
// }else{
//     alert("incorrect number");
// }




// let boxOne = prompt("Enter female numbers");
// let boxTwo = prompt("Enter male numbers");
// let ans = boxOne + boxTwo;
// alert(ans);

// let valueone = prompt("enter male number");
// let valuetwo = prompt("enter female number");
// let ans = valueone + valuetwo;
// alert(ans);

// parseInt

// let rose = parseInt(prompt("Enter female numbers"));
// let kolo = parseInt(prompt("Enter male numbers"));
// let you = rose + kolo;
// alert(you);

// let valueOne = parseInt(prompt("enter female number"));
// let valueTwo = parseInt(prompt("enter male number"));
// let valueThree = valueOne + valueTwo;
// alert(valueThree);

//Exercise list
// 1. write a program that checks if the number is positive or negative

// let number = 0;
// if (number >=0) {
// console.log ("this is a positive number")}
// else{
// console.log("this is a negative number")
// }


// let number = 7;
// if(number >= 0){
//     console.log("this is a positive number");
// } else{
//     console.log("this is a negative number");
// }


//  2.write a program that checks if the number is even or odd
// let num = parseInt(prompt("Enter a number"))
// if (num % 2 === 0){
//  alert(`${num} is an even number`)
// }
// else{
//     alert(`${num} is an odd number`)
// }


// let num = parseInt(prompt("Enter a number"))
// if(num >= 0){
//     alert(`${num} is a positive number`);
//  } else if(isNaN(num)){
//     alert("enter a number");
//  }
//  else{
//     alert(`${num} is a negative number`);
// }






// if else if conditional statement


//  const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if(userNumber > 0) {
//     alert(`${userNumber} is a positive number`);
// }else if (userNumber === 0) {
//     alert(`${userNumber} is invalid`);
// }
// else if(isNaN(userNumber)) {
//     alert("enter a number");
// }else if (userNumber.toString() === "NaN") {
//   alert(`This is not a number`);
// }
// else {
//     alert(`${userNumber} is a negative number`);
// }

//  let number = parseInt(prompt("Enter a number"))
//  if(number > 0){
//     alert(`${number}is a positive number`);
//  }else if(number === 0){
//     alert(`${number} is invalid`);
//  }else if(isNaN(number)){
//     alert("enter a number");
//  }else{
//     alert(`${number} is a negative number`);
//  }

// write a program that determines the greatest of two numbers.
// let firstNumber = parseInt(prompt("Enter first number"))
// let secondNumber = parseInt(prompt("Enter second number"))

// if(firstNumber > secondNumber){
//     alert("firstNumber is greater");
// }else if(secondNumber > firstNumber){
//     alert("secondNumber is the greatest");
// }else{
//     alert("invalid");
// }



// write a program that transforms a numerical grade to a letter grade 
// (e.g grade 0-39 should display "F", 40-44 should display "E", 45-49 should display "D", 
// 50-59 should display "C", 60-69 should display "B", 70-100 should display "A").

// let score = parseInt(prompt("Enter your score"))
// if(score >=0 && score <= 39){
//     alert(`${score} is Grade F`);
// }else if(score >=40 && score <= 44){
//     alert(`${score} is Grade E`);
// }else if(score >=45 && score <= 49){
//     alert(`${score} is Grade D`);
// }else if(score >= 50 && score <= 59){
//     alert(`${score} is Grade C`);
// }else if(score >= 60 && score <= 69){
//     alert(`${score} is Grade B`);
// }else if(score >= 70 && score <= 100){
//     alert(`${score} is Grade A`);
// }else{
//     alert("invalid");
// }


// ASSIGNMENTS
//  write a program that calculates the body max index (BMI) and categorizes it. The formular for BMI is:
//  weight / (height * height) where weight is in kg and height is in meters. The categories are as follows:
//  underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 - 29.9), and obesity (BMI >= 30).
// const weight = parseFloat(prompt("enter weight here "));
// const height = parseFloat(prompt("enter height here "));
// let bmi = (weight / (height * height));
// if(bmi < 18.5){
//     alert(`you are ${bmi} and underweight `);
// } else if(bmi >= 18.5 && bmi < 24.9){
//     alert(`you are ${bmi} a normal weight`);
// } else if(bmi > 25 && bmi < 29.9){
//     alert(`you are ${bmi} and over weight`);
// }else if(bmi >= 30){
//     alert(`you are ${bmi} and obessed`);
// }
// else{
//     alert("invalid");
// }



// let number = parseInt(prompt("Enter a number"))
// if(number >= 0){
//     alert(`${number} is a positive number`);
// } else if(number < 0){
//     alert(`${number} is a negative number`);
// }else if(number >= 0 +" "+ (isNaN(number))){
//     alert(`${number} is an invalid pair`);
// }
// else{
//     alert("invalid");
// }

//write a program that calculates the ticket price based on the 
// age with the following conditions: age below 12 pay a 
// ticket price of 5,agebelow 18 pay a ticket price of 10, age 
//below 60 pay a ticket price of 20,age over 60,pay a ticket price
// of 15.

// let age = parseInt(prompt("Enter Age"))
// if(age > 0 && age <= 12){
//     alert("pay a ticket price of $5");
// } else if(age > 12 && age <= 18){
//     alert("Pay a ticket price of $10");
// } else if(age > 18 && age <= 60){
//     alert("Pay a ticket price of &20");
// }else if(age >= 60 && age <= 120){
//     alert("Pay a ticket price of $15");
// }    
// else{
//     alert("invalid");
// }


//write a program that determines if a year is a leap year

//write a program that calculates a discount based on the 
// purchase amount. price equals or over 100 discount have a
//discount of 20, price equals or over 50 have a discount 
// of 10, otherwise discount 0

//write a program that greets the user based on the time of 
// the day. display good morning, good afternoon or 
// good evening based on the time of the day when yourun 
// the code.

// let time =parseInt(prompt("Enter time in 24hrs format"))
// if(time > 0 && time < 12){
//     alert("Good morning amigo");
// }else if(time >= 12 && time < 16){
//     alert("Good afternoon amigo");
// }else if(time >= 16 && time <= 23.59){
//     alert("Good evening amigo");
// }else if(isNaN(time)){
//     alert("incorrect time");
// }else{
//     alert("Enter time");
// }



//write a simple number guessing game. provide a secret 
// number and a guess. based on those numbers, give players
// clue if their guess is higher, lower or correct.



// math.random
// const secretNumber = Math.floor(Math.random() * 8) + 1; // random number between 1 and 10
// const guess = Number(prompt("Guess the secret number between 1 and 10:"));
// console.log(secretNumber);

// if (guess === secretNumber) {
//   alert("Correct! You guessed the secret number.");
// } else if (guess < secretNumber) {
//   alert("Too low! Try a higher number.");
// } else if (guess > secretNumber) {
//   alert("Too high! Try a lower number.");
// } else {
//   alert("Invalid input! Please enter a number.");
// }



// Mapping Numbers

// const prices = [100, 200, 300, 600,777];
// const discounted = prices.map(price => price * 0.9);

// console.log(discounted); // [90, 180, 270]




//  Mapping Strings

// const names = ["Teewhy", "Divine", "Mary"];
// const greetings = names.map(name => Hello, ${name}!);
// console.log(greetings);
//["Hello, Teewhy!", "Hello, Divine!", "Hello, Mary!"]



// Mapping Objects
// const users = [
//   { name: "Teewhy", age: 25 },
//   { name: "Divine", age: 30 }
// ];

// const userAges = users.map(user => ${user.name} is ${user.age} years old);

// console.log(userAges);
// ["Teewhy is 25 years old", "Divine is 30 years old"]




// string methods .... a must know

// let myStr = "Hello javascript World";
// console.log(myStr);
// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.charAt());
// console.log(myStr.indexOf("World"));
// console.log(myStr.includes("Hello"));
// console.log(myStr.slice(2,5));
// console.log(myStr.trim());
// console.log(myStr.replace("World", "idiot"));
// console.log(myStr.split());
// console.log(myStr.split(" ")[2]);
// console.log(myStr.startsWith("Hello"));
// console.log(myStr.endsWith("hi"));

// console.log(myStr.trim()); // takes off un-neccessary spaces in sentences
// console.log(myStr.replace("World", "Universe")); // replace world and input universe


// NUMBER METHODS

// let num = 42.769;
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed());




// Math Method

// console.log(Math.PI);
// console.log(Math.round(41.945));
// console.log(Math.floor(42.342));
// console.log(Math.ceil(42.2));
// console.log(Math.max(12,4,3,7));
// console.log(Math.min(12,4,6,8));
// console.log(Math.pow(23,70));
// console.log(Math.sqrt(144));
// console.log(Math.random()*100);
// console.log(Math.floor(Math.random()*100));


//   Math.PI is the ratio of the circumfrence of a circle to it's parameter

// function number() {
//     console.log(Math.PI); 
// }number()


// Math.round returns a supplied numeric expression rounded to the nearest
//  integer

// function round() {
//     let cal =3.9;
//     console.log(Math.round(cal));  // ans = 4
// }round()


// Math.floor returns the greatest integer less than or equal to numeric 
//arguement

// function floor() {
//     let cal = 2.9;
//     console.log(Math.floor(cal));  // ans = 2
// }floor()



// Math.ceil returns the smallest integer greater than or equal to it's 
// arguement

// function ceil() {
//     let cal = 16.2;
//     console.log(Math.ceil(cal));   // ans = 17
// }ceil()


// Math.sqrt returns the square root of a number

// function sqrt() {
//     let cal = 234;
//     console.log(Math.sqrt(cal)); //ans = 15.2970
// }sqrt()



// Math.random returns a psuedorandom number between 0 and 1
// function random() {
//     let cal = parseInt(prompt('enter a number'));
//     console.log(Math.random()*20);
// }random()


// function floor() {
//     let cal = parseInt(prompt('enter a number'));
//     console.log(Math.floor(Math.random()*20));
// }floor()





// OBJECTS

// let student = {
//     name: "shade",
//     age: 34,
//     mail: "shade@gmail.com"
// };
//  console.log(student);
//  console.log(student.name);
//  console.log(Object.keys(student));
//  console.log(Object.values(student));

// FUNCTIONS

// function myName(name) {
//     console.log(name);  
// }
// myName("damola");
// myName("idiot");
// myName("money");

// function addNum(a, b) {
//     console.log(a+b);
    
// }
// addNum(30,8);

// function numbers() {
//     let num1 = prompt("Enter a number");
//     let num2 = prompt("Enter a number");
//     let num3 = prompt("Enter a number");
//     let num4 = prompt("Enter a number");
//     console.log(Math.max(num1,num2,num3,num4),"is the highest number");
// }
// numbers()

// function miniLength() {
//     let num1 = prompt("Enter a number");
//     let num2 = prompt("Enter a number");
//     let num3 = prompt("enter a number");
//     let num4 = prompt("Enter a number");
//     console.log(Math.min(num1,num2,num3,num4),"is the smallest number");
// }
// miniLength()

// function evenNumbers() {
//     let solution = prompt("Enter number")
//     if (solution % 2=== 0) {
//         console.log(`${solution} is an even number`);
//     }else{
//         console.log(`${solution} is an odd number`);
//     }
// }
// evenNumbers()

// function name() {
//     let grade = parseInt(prompt("Enter score"));
//     if (grade >= 90 && grade <= 100) {
//         console.log(`${grade} is A grade`)
//     }else if (grade >= 75 && grade < 90) {
//         console.log(`${grade} is B grade`);
//     }else if (grade >= 60 && grade < 75) {
//         console.log(`${grade} is C grade`);
//     }else if (grade >= 50 && grade < 60) {
//         console.log(`${grade} is D grade`);
//     }else if (grade >= 35 && grade < 50) {
//         console.log(`${grade} is E grade`);
//     }else if (grade >= 0 && grade < 35) {
//         console.log(`${grade} is F grade`);
//     }else{
//         console.log(`${grade} is invalid`);
//     }
// }
// name()

// function greaterNumber() {
//     let firstNumber = parseInt(prompt("Enter a number"));
//     let secondNumber = parseInt(prompt("Enter a number"));
//     if (firstNumber > secondNumber ) {
//         console.log(`${firstNumber}`, "firstNumber is greater");
//     }else if (secondNumber > firstNumber) {
//         console.log(`${secondNumber}`, "secondNumber is greater");
//     }else{
//         console.log("invalid");
//     }
// }
// greaterNumber()

// TO CHECK THE LENGTH OF A THING E.G NAME

// function numberLength() {
//     let name = prompt("Enter a Name")
//     console.log(name.length);
// }
// numberLength()



// LOOP



// for (let number = 0; number < 11; number++) {
//     console.log(number);
//    console.log('this is the value of number',number);
//   console.log('number =',number);   
// }


// for (let checkNumber = 0; checkNumber < 11; checkNumber++) {
//     if (checkNumber % 2 === 0) {
//         console.log(`${checkNumber} is an even number`);
//     }else {
//         console.log(`${checkNumber} is an odd number`);
//     }
// }


// let lengthOfNumber = [2,3,4,5,6,];
// let num = 1;
// for (let number = 5; number < 20; number++) {
//     console.log(lengthOfNumber[num]);
//     // console.log(num);
// }

// function name() {
//     for (let number = 0; number < 11; number++) {
//         console.log('number =',number); 
//     }
// }name()

// function greaterNumber() {
//     let firstNumber = parseInt(prompt("enter a number"));
//     let secondNumber = parseInt(prompt("enter a number"));
//     if (firstNumber > secondNumber) {
//         alert(`${firstNumber} firstNumber is the greatest`);
//     }else if (secondNumber > firstNumber) {
//         alert(`${secondNumber} secondNumber is the greatest`);
//     }else if (firstNumber === secondNumber) {
//         alert("both numbers are equal");
//     }else{
//         alert("invalid");
//     }
// }greaterNumber()

// function greaterNumber() {
//     for (let number = 0; number < 11; number++) {
//         let firstNumber = parseInt(prompt("enter first number"));
//         let secondNumber = parseInt(prompt("enter second number"));
//         if (firstNumber > secondNumber) {
//             alert(`${firstNumber} firstNumber is the greatest`);
//         }else if (secondNumber > firstNumber) {
//             alert(`${secondNumber} secondNumber is the greatest`);
//         }else if (firstNumber == secondNumber) {
//             alert('both numbers are equal');
//         }else{
//             alert('invalid');
//         } 
//     }
// }greaterNumber()

// function highestNumber(num1,num2,num3,num4) {
//     num1 = 11;
//     num2 = 2;
//     num3 = 3;
//     num4 = 4;
//     console.log(Math.max(num1,num2,num3,num4),'is the highest number');
// }highestNumber()

// function highestNumber(num1,num2,num3,num4) {
//     num1 = parseInt(prompt('enter a number'));
//     num2 = parseInt(prompt('enter a number'));
//     num3 = parseInt(prompt('enter a number'));
//     num4 = parseInt(prompt('enter a number'));
//     console.log(Math.max(num1,num2,num3,num4),'is the highest number');  
// }highestNumber()

// function lowestNumber(num1,nu2,num3,num4) {
//     num1 = parseInt(prompt("enter a number"));
//     num2 = parseInt(prompt("enter a number"));
//     num3 = parseInt(prompt("enter a number"));
//     num4 = parseInt(prompt("enter a number"));
//     console.log(Math.min(num1,num2,num3,num4),'is the lowestNumber ');  
// }lowestNumber()

// function lowestNumber(num1,num2,num3,num4) {
//     num1 = 1;
//     num2 = 11;
//     num3 = 245;
//     num4 = 23;
//     console.log(Math.min(num1,num2,num3,num4),'is the lowest number');
// }lowestNumber()

// for (let number = 0; number < 11; number++) {
//     if (number % 2 === 0) {
//         console.log(`${number} even`);
//     }else{
//         console.log(`${number} odd`); 
//     }
// }

// function backWards() {
//     let name = prompt('enter a nume')
//     console.log(name.split('').reverse('').join(''));
    
// }backWards()

// function getId() {
//     console.log(document.getElementsByClassName('plan'));
    
// }getId()


// DOCUMENT.GETELEMENTBYCLASSNAME ... very neccessary to know

// function getClass() {
    
    
// }getClass()


// console.log(document.getElementById('moon'));
// console.log(document.getElementById('para'));
// console.log(document.getElementById('btn'));
// console.log(document.getElementsByClassName('list')[1].innerHTML='tolu');
// console.log(document.getElementsByClassName('plan')[2].innerHTML='kolo');
// console.log(document.getElementsByClassName('plan')[3].innerText='black');




