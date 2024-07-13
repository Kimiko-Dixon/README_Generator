// Packages
const fs = require('fs')
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown.js');

//Array of questions
const questions = ['What is your GitHub username?','What is your email address?', 'What is the title of your project?',
    'Write a description of your application.', 'Choose a license for your project.',
    'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?',
    'What does the user need to know about contributing to the repo?'];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err =>
        err ? console.log('error generating file') : console.log('Your README has been generated')
    )
}

// initializes application
function init() {
    //Promps for answers to the array of questions
    inquirer
        .prompt([
            
            {
                type: 'input',
                message: questions[0],
                name: 'username'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'email'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'title'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'description'
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            {
                type: 'input',
                message: questions[5],
                name: 'install',
                default: 'npm i'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
                default: 'npm test'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'usage'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contributing'
            },
        ]).then(data => {
            // Recieves content to write to the README file
            const readmeContent = markdown.generateMarkdown(data)
            writeToFile('README.md',readmeContent)
        }
        )
}

// Function call to initialize app
init();
