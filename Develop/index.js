const fs = require("fs");
const inquirer = require("inquirer");

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

// function to initialize program and create README
function init() {
  inquirer.prompt(questions).then((data) => {
    let fileName = "README.md";
    let licenses = [];
    let mit =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    let cc =
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    let gnu =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    let mozilla =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    let isc =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    if (data.license == "MIT") {
      licenses.push(mit);
    }
    if (data.license == "CreativeCommons") {
      licenses.push(cc);
    }
    if (data.license == "GNU") {
      licenses.push(gnu);
    }
    if (data.license == "Mozilla") {
      licenses.push(mozilla);
    }
    if (data.license == "ISC") {
      licenses.push(isc);
    }
    let markdown = `# ${data.title}\n
  ${data.description}\n
  ## Table of Contents\n
  1. [Licenses](#licenses)\n
  2. [Installation](#installation)\n
  3. [Useage](#useage)\n
  4. [Contributions](#contribution)\n
  5. [Test Instructions](#test-instructions)\n
  6. [Screenshots](#screenshots)\n
  7. [Questions + Contact Me](#questions)\n
  ## Licenses\n
  ${licenses}\n
  ## Installation\n
  ${data.installation}\n
  ## Useage\n
  ${data.useage}\n
  ## Contribution\n
  ${data.contribution}\n
  ## Test Instructions\n
  ${data.testInstructions}\n
  ## Screenshots\n
  Additional images of the code and product listed below.\n
  ## Questions?\n
  My GitHub username is [${data.github}](https://www.github.com/${data.github}).\n
  Email me at [${data.email}](mailto:${data.email}).`;
    fs.writeFile(fileName, markdown, (error) =>
      error ? console.log(error) : console.log("Successfully created file!")
    );
  });
}

// function call to initialize program
init();
