"user strict";
const chalk = require("chalk")
const readline = require("readline")

const askToUser = (question)=>{
  return new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(questionA, answer => {
        resolve(answer);
    });
  });
};

const showInConsole = ()=>{

}
const answerA = await askToUser("what year were you born, David? ");
const answerB = await askToUser("what year were you born, Hugo? ");
const answerC = await askToUser("what year were you born, Izaak? ");
const answerD = await askToUser("what year is it now? ");
    
console.log("You area" , result , "years ago");
