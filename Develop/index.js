// required packages ///////////////////////////////////////////////////////////////////////////////////////////////////////
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input //////////////////////////////////////////////////////////////////////////////////////
const questions = [
    {
        type: 'input',
        message: 'Whats the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Whats it used for?',
        name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using?',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', "I will not be using a license"],
    },
    {
        type: 'input',
        message: 'Has anyone else contributed to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What kind of tests have been done?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Github user name:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
    },
];


// Function to writeFile with the filename and the data as arguements /////////////////////////////////////////////////////
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("README Succefully generated!");
        };
    });
};

// initializes the app ////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('../generated README/README.md', generateMarkdown(data));
        })
}

// Function call to initialize app ////////////////////////////////////////////////////////////////////////////////////////
init();
