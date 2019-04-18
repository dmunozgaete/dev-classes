"user strict";
const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askToUser = (question)=>{
  return new Promise((resolve,reject)=>{
    rl.question(question, answer => {
        resolve(answer);
    });
  });
};

const clearConsole = ()=>{
  console.clear();
};

(async ()=>{
  clearConsole();

  const davidYearBorn = await askToUser("what year were you born, David? ");
  const hugoYearBorn = await askToUser("what year were you born, Hugo? ");
  const izaakYearBorn = await askToUser("what year were you born, Izaak? ");
  const currentYear = new Date().getFullYear();

  const resultA = currentYear - parseInt(davidYearBorn);
  const resultB = currentYear - parseInt(hugoYearBorn);
  const resultC = currentYear - parseInt(izaakYearBorn);
  
  console.log("David you are", resultA , "years old");
  console.log("Hugo you are", resultB , "years old");
  console.log("Izaack you are", resultC , "years old");

})();

    

