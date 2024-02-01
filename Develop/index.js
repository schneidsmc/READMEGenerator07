// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
function promptModule(){
return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Describe your project. Why was it built? What problem does it solve?',
            name: 'description'
        },
        {
            type: 'checkbox',
            message: 'What licenses are utilized?',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'GNU', 'Mozilla', 'Open'],
            name: 'license'
        },
        {
            type: 'checkbox',
            message: 'Check the technologies, languages or systems used to create this.',
            choices: ['HTML', 'CSS', 'Markdown', 'Javascript', 'JQuery', 'NodeJS'],
            name: 'stack',
        },
        {
            type: 'input',
            message: 'Provide instructions for the usage of this project.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide instructions for the installation of this project.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])};

async function init() {
   try{
        const data = await promptModule();
        const generateFile = generateReadme(data);
fs.promises.writeFile('genREADME.md', generateFile);
console.log('Sucess! Your professional README has been created!')
   } catch(err) {
    console.log(err)
   }
} 

init();
  
