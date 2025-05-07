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


// let boxOne = prompt("Enter female numbers");
// let boxTwo = prompt("Enter male numbers");
// let ans = boxOne + boxTwo;
// alert(ans)

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

// let number = -18
// if (number >0) {
// console.log ("this is a positive number")}
// else{
// console.log("this is a negative number")
// }


//  2.write a program that checks if the number is even or old
// let num = parseInt(prompt("Enter a number"))
// if (num % 2 === 0){
//  alert(`${num} is an even number`)
// }
// else{
//     alert(`${num} is an old number`)
// }

// if else if conditional statement


// const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if (userNumber > 0) {
//     alert(`The number ${userNumber} is a positive number`);
// }
// else if (userNumber === 0) {
//     alert(`The number ${userNumber} is invalid`);
// }
// else if(isNaN(userNumber)) {
//     alert(`The number ${userNumber} is not a number`);
// }

// else if (userNumber.toString() === "NaN") {
//   alert(`This is not a number`);
// }
// else {
//     alert(`The number ${userNumber} is a negative number`);
// }

// write a program that determines the greatest of two numbers.
// let firstNumber = parseInt(prompt("Enter the first number"));
// let secondNumber = parseInt(prompt("Enter the second number"));

// if (firstNumber > secondNumber) {
//     alert(`The first number ${firstNumber} is the greatest`);
// } else if (secondNumber > firstNumber) {
//     alert(`The second number ${secondNumber} is the greatest`);    
// } 
// else if (firstNumber == secondNumber) {
//     alert(`Both numbers are equal`);
// } 
// else if(isNaN(firstNumber || secondNumber)) {
//     alert(`The user didn't enter a number`);
// }



// write a program that transforms a numerical grade to a letter grade 
// (e.g grade 0-39 should display "F", 40-44 should display "E", 45-49 should display "D", 
// 50-59 should display "C", 50-59 should display "B", 70-100 should display "A").

// let grade = parseInt(prompt("Enter your grade"));

// if (grade >= 0 && grade <= 39) {
//     alert(`Failed you got an F`);
// }

// else if (grade >= 40 && grade <= 44) {
//     alert(`Your grade is an E`);
// } else if (grade >= 45 && grade <= 49) {
//     alert(`Your grade is an D`);
// } else if (grade >= 50 && grade <= 59)3  {
//     alert(`Your grade is an C`);
// } else if (grade >= 60 && grade <= 69) {
//     alert(`Your grade is an B`);
// } else if (grade >= 70 && grade <= 100) {
//     alert(`Your grade is an A`);
// }



// //ASSIGNMENTS
// write a program that calculates the body max index (BMI) and categorizes it. The formular for BMI is:
// weight / (height * height) where weight is in kg and height is in meters. The categories are as follows:
// underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 - 29.9), and obesity (BMI >= 30).

