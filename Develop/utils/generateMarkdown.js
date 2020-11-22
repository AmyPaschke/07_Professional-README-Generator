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
  ## Screenshots\n
  Additional images of the code and product listed below.
  ##Questions?\n
  My GitHub username is [${data.github}](https://www.github.com/${data.github}).\n
  Email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = generateMarkdown;
