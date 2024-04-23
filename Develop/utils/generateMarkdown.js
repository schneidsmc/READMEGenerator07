
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


![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&labelColor=black)
![mySql Badge](https://img.shields.io/badge/MySQL%20-%20%234479A1?style=for-the-badge&logo=mysql&logoColor=%234479A1&labelColor=white)
![Node.js Badge](https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&labelColor=black)
![Sequelize Badge](https://img.shields.io/badge/sequelize%20-%20%2352B0E7?style=for-the-badge&logo=sequelize&labelColor=black)
![Tailwind Badge](https://img.shields.io/badge/tailwind%20css%20-%20%2306B6D4?style=for-the-badge&logo=tailwindcss&labelColor=black)
![esLint Badge](https://img.shields.io/badge/ESLint%20-%20%234B32C3?style=for-the-badge&logo=eslint&labelColor=black)
![Prettier Badge](https://img.shields.io/badge/prettier%20-%20%23F7B93E?style=for-the-badge&logo=prettier&labelColor=black)
![dot env Badge](https://img.shields.io/badge/handlebars%20-%20%23000000?style=for-the-badge&logo=handlebarsdotjs&labelColor=black)
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
