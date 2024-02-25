
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
<h1 align="center">${data.title} </h1>

<div style= "text-align: center">

  <img src="https://img.shields.io/github/repo-size/schneidsmc/employeeTracker10" />
  <img src="https://img.shields.io/github/languages/top/schneidsmc/employeeTracker10" />
  <img src="https://img.shields.io/github/last-commit/schneidsmc/employeeTracker10" />
<br />
![badge](https://img.shields.io/badge/license-${data.license}-brightblue)<br />

  <img src="https://img.shields.io/badge/Javascript-yellow" />
  <img src="https://img.shields.io/badge/jQuery-blue"  />
  <img src="https://img.shields.io/badge/-node.js-green" />
  <img src="https://img.shields.io/badge/-inquirer-red" >
  <img src="https://img.shields.io/badge/-Markdown-lightgrey" />
</div>

## Description 📚

- What was your motivation? Why did you build this project? What problem does it solve? What did you learn?

${data.description}

This was created using ${data.stack}.

## Table of Contents 

- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#installation-📋)
- [Usage](#usage-🏁)
- [Demonstration](#demonstration)
- [Author](#author-👋🏽)

## User Story

## Acceptance Criteria

## Installation 📋

- What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${data.installation}

## Usage 🏁

Provide instructions and examples for use.

${data.usage}

## Demonstration

LINK SYNTAX
[here]( )

IMAGE SYNTAX 
<img src="" alt="description" width="300" height="auto"> 

## License ✅ 

${data.license}

## Author 👋🏽

GitHub Username: [${data.username}](https://github.com/${data.username})

📧 Email: ${data.email}

This README was created with ❤️ using README Generator 👏🏽👏🏽

`;
}

module.exports = generateMarkdown;
