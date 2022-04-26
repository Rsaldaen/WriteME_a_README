const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./util/generateMarkdown.js")

// array of questions for user
function questions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "promptUserName",
        }, 
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "promptFileGitHub",
        }, 
        {
            type: "input",
            message: "What is your Email Address? ",
            name: "promptFileEmail",
        }, 
        {
            type: "input",
            message: "Welcome to WriteMe a README! What is the Title of your README?",
            name: "promptTitle",
        },
        {
            type: "input",  
            message: "Write a description of the project.",
            name: "promptFileDescription",
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "promptFileInstallation",
        },
        {
            type: "input",
            message:"Provide instructions and examples for use. Include screenshots as needed.",
            name: "promptFileUsage",
        },
        {
            type: "input",
            message: "List people who also contributed to this project and are you looking for any help in contributing to the project?",
            name: "promptFileCollaborating",
        },        
        {
            type: "input",
            message: "What can I do to test this? ",
            name: "promptFileTest",
        },        
        {
            type: "checkbox",
            message: "What licenses were used?",
            name: "promptFileLicense",
            choices: [ 'MIT', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense', 'Boost Software License 1.0' ],
        },
    ]).then(function(answers){
        var strReadme = generateMarkdown(answers);
        writeToFile(answers, strReadme)
    })
}


//function to write README
function writeToFile(answers, README) {
    fs.writeFile(`${answers.promptTitle}-readMe.md`, README, () => {
        console.log("finished README");
    })
};


// function initialize program
function init() {
    questions()
};

// function call program
init();