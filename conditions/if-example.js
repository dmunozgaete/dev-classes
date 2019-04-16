const readline = require('readline');
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
rl.question(chalk.red('What day is it today? '), (today) => {

    if(today == "monday"){
        console.log("hello, today is Monday!");
    }

  rl.close();
});