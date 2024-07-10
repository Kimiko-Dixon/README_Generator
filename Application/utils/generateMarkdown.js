// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
  let badge = '';
  switch(license){
    case 'MIT':
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
      break;
    case 'APACHE 2.0':
      badge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
      break;
    case 'GPL 3.0':
      badge = 'https://img.shields.io/badge/License-GPL%20v3-blue.svg'
      break;
    case 'BSD 3':
      badge = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
      break;
    case 'None':
      break;
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch(license){
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT'
      break;
    case 'APACHE 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'GPL 3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case 'BSD 3':
      link = 'https://opensource.org/licenses/BSD-3-Clause'
      break;
    case 'None':
      break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license)
  let licenseSect;
  license != 'None' ?  licenseSect = `This project is licensed under the ${license} license. [License Information](${link}) ` : licenseSect = ''
  return licenseSect
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({username,email,title,description,license, install, test, usage, contributing}) {
  return `# ${title}

![GitHub License](${renderLicenseBadge(license)})

## Description

${description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

...

${install}
...
## Usage

${usage}

## License

${renderLicenseSection(license)}

## Contributing

${contributing}

## Tests

To run tests, run the following command:

...

${test}
...

## Questions

If you have any questions about the repo, open an issue or contact me at ${email}. you can find more of my work at
[${username}](https://github.com/${username}/).
`;
}

module.exports = {generateMarkdown};