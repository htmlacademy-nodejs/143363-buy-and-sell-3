"use strict";

const {USER_ARGV_INDEX, DEFAULT_USER_COMAND} = require(`../constants`);
const {Cli} = require(`./cli`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [comand, ...args] = userArguments;

if (userArguments.length === 0 || !Cli[comand]) {
  Cli[DEFAULT_USER_COMAND].run();
} else {
  Cli[comand].run(args);
}
