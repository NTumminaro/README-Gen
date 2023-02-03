// required packages ///////////////////////////////////////////////////////////////////////////////////////////////////////
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Validator function to check is something has been entered into the question input ///////////////////////////////////////
const validationStation = (answer) => {
        if (answer == "") {
          console.log('\x1b[31m%s\x1b[0m', "Please enter something!");
          return false;
        } else {
            return true
        }
};

// Array of questions for user input //////////////////////////////////////////////////////////////////////////////////////
const questions = [
    {
        type: 'input',
        message: 'Whats the title of your project?',
        name: 'title',
        validate: validationStation,

    },
    {
        type: 'input',
        message: 'Write a short description:',
        name: 'description',
        validate: validationStation,
    },
    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
        validate: validationStation,
    },
    {
        type: 'input',
        message: 'What is it used for?',
        name: 'usage',
        validate: validationStation,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you be using?',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', "I will not be using a license"],
    },
    {
        // might replace with 'confirm' as the type first /////////////////////////////////////////////////////////////////
        type: 'input',
        message: 'Who has contributed to this project? (If multiple, seperate with commas and spaces):',
        name: 'contributing',
        validate: validationStation,
    },
    {
        type: 'input',
        message: 'What kind of tests have been done?',
        name: 'tests',
        validate: validationStation,
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'github',
        validate: validationStation,
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
        default: () => {},
        validate: function (email) {
        // function to validate email format ////////////////////////////////////////////////////////////////////////////////
        // I can't get it to remove the input from email, assuming its because of the test /////////////////////////////////
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (!valid) {
                email = "";
                console.log('\x1b[31m%s\x1b[0m', "\n Please enter a valid email!");
                return false;
            } else {
                return true;
            }
        }
    },
];


// Function to writeFile with the filename and inputed data as arguements /////////////////////////////////////////////////////
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('\x1b[32m%s\x1b[0m', "README Succefully generated!");
            console.log('\x1b[32m%s\x1b[0m', "You're new README can be found in the Generated README folder!");
        };
    });
};

// initializes the app ////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('../generated README/README.md', generateMarkdown(data));
        })
};

// Function call to initialize app ////////////////////////////////////////////////////////////////////////////////////////
init();
