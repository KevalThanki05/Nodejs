// (async () => {
//     const chalk = (await import('chalk')).default;

//     console.log(chalk.blue("Hello World"));
// })();

// var validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true

// (async () =>{
//     const validator = (await import('validator')).default;
// })();

import validator from 'validator'; 
import chalk from 'chalk';

const res = validator.isEmail("thapa@thapa.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));