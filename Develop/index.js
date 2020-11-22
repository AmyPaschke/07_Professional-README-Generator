const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your README title?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a brief description for your README.",
    name: "description",
  },
  {
    type: "input",
    message: "Please write out the installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please write out the useage information.",
    name: "useage",
  },
  {
    type: "input",
    message: "Any contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "List any test instructions.",
    name: "testInstructions",
  },
  {
    type: "checkbox",
    message: "Please select which licenses to apply:",
    name: "license",
    choices: [
      { name: "MIT" },
      { name: "CreativeCommons" },
      { name: "GNU" },
      { name: "Mozilla" },
      { name: "ISC" },
    ],
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "What is your preferred email address?",
    name: "email",
  },
];

// function to write README file
function writeToFile(data) {
  const fileName = "README.md";
  generateMarkdown(data);
  fs.writeFile(fileName, markdown(), (error) =>
    error ? console.log(error) : console.log("Successfully created file!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(() => {
    writeToFile();
  });
}

// function call to initialize program
init();
