const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
rl.question(chalk.yellow("What day is it today? "), today => {
  if (today == "monday") {
    console.log("");
    console.log(chalk.green("hello, today is Monday!"));
  } else {
    console.log("");
    console.log(chalk.red("Oopps, today is not monday"));
  }

  rl.close();
});
