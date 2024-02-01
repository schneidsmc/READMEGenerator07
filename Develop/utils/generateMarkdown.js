
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
<h1 align="center"> ${data.title} </h1>

<p align="center">
![badge](https://img.shields.io/badge/license-${data.license}-brightblue)<br />

  <img src="https://img.shields.io/badge/Javascript-yellow" />
  <img src="https://img.shields.io/badge/jQuery-blue"  />
  <img src="https://img.shields.io/badge/-node.js-green" />
  <img src="https://img.shields.io/badge/-inquirer-red" >
  <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
</p>

## Description

- What was your motivation? Why did you build this project? What problem does it solve? What did you learn?

${data.description}

This was created using ${data.stack}.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Installation

- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${data.installation}

## Usage

Provide instructions and examples for use.

${data.usage}

## Author

GitHub Username: [${data.username}](https://github.com/${data.username})

Email: ${data.email}


`;
}

module.exports = generateMarkdown;
