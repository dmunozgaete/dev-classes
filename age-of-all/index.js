console.clear();
const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionA = "what year were you born, David? ";
const questionB = "what year were you born, Hugo? ";
const questionC = "what year were you born, Izaak? ";
const questionD = "what year is it now? ";

rl.question(questionA, answerA => {
  rl.question(questionB, answerB => {   
    rl.question(questionC, answerC => { 
      rl.question(questionD, answerD => { 
          
        var resultA = parseInt(answerD) - parseInt(answerA);
        var resultB = parseInt(answerD) - parseInt(answerB);
        var resultC = parseInt(answerD) - parseInt(answerC);
        console.log("David is" , resultA , "years old");
        console.log("Hugo is" , resultB , "years old");
        console.log("Izaak is" , resultC , "years old");  

      });
    });
  });
});