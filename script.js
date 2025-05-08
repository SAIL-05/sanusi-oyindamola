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


// const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if (userNumber > 0) {
//     alert(`${userNumber} is a positive number`);
// }
// else if (userNumber === 0) {
//     alert(`${userNumber} is invalid`);
// }
// else if(isNaN(userNumber)) {
//     alert("enter a number");
// }

// else if (userNumber.toString() === "NaN") {
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
const weight = parseFloat(prompt("enter weight here "));
const height = parseFloat(prompt("enter height here "));
let bmi = (weight / (height * height));
if(bmi < 18.5){
    alert(`you are ${bmi} and underweight `);
} else if(bmi >= 18.5 && bmi < 24.9){
    alert(`you are ${bmi} a normal weight`);
} else if(bmi > 25 && bmi < 29.9){
    alert(`you are ${bmi} and over weight`);
}else if(bmi >= 30){
    alert(`you are ${bmi} and obessed`);
}
else{
    alert("invalid");
}



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