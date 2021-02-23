const chalk=require("chalk");
const { default: validator } = require("validator");
console.log(chalk.red.underline.inverse("False"));
const res=validator.isEmail("aryamaan@gmail.com");
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));