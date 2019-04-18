console.clear();
const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionA = "En qué año naciste? ";
const questionB = "En qué año estamos? ";

rl.question(questionA, answerA => {
  rl.question(questionB, answerB => {

    var result = parseInt(answerB) - parseInt(answerA);
    console.log("Tienes" , result , "años");
  
  });
});
