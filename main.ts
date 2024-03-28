#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1 );

var answer = await inquirer.prompt([
    {
        name : "UserGuessedNumber",
        type : "number",
        message : "Please guess a number between 1-10:",

    }
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guess right number");  
}
else{
    console.log("You guess wrong number!");
}