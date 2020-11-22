// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}\n
  ${data.description}\n
  ## Licenses\n
  ${data.license}\n
  ## Installation\n
  ${data.installation}\n
  ## Useage\n
  ${data.useage}\n
  ## Contribution\n
  ${data.contribution}\n
  ## Test Instructions\n
  ${data.testInstructions}\n
  ##Questions?\n
  My GitHub username is [${data.github}](https://www.github.com/${data.github}).
  Email me at [${data.email}](mailto:${data.email}).
  
  `

;
}

module.exports = generateMarkdown;


# Professional README Generator

This generator utilizes node.js

## Motivation

New to node.js, this project tests the functionality of my node.js skills and use of the terminal.

## Screenshots

## Code Example

## Features

## License

MIT License

## Credits