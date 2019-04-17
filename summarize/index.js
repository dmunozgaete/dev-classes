const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
const questionA = "what is the variable A? ";
const questionB = "what is the variable B? ";

rl.question(questionA, answerA => {
  rl.question(questionB, answerB => {
    var result = parseInt(answerA) + parseInt(answerB);
    console.log(result);
  });
});
