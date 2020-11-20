const fs = require("fs");
const questions = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your README title?",
    title: `${process.argv[2]}`,
  },
  {
    type: "input",
    message: "What is the description of your README?",
    text: `${process.argv[3]}`,
  },
  {
    type: "input",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );
