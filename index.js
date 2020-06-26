const inquirer = require("inquirer");
const fs = require("fs");
var markdown = require("./generateMarkdown.js");


// array of questions for user
const questions = [
    {
        questionOne: "What is your GitHub username?",
        questionTwo: "What is your email address?",
        questionThree: "What is the title of your project?",
        questionFour: "Write a breif description of your project.",
        questionFive: "What license would you like your project to have?",
        questionSix: "What command should be run to install dependencies?",
        questionSeven: "What command should be run to run tests?",
        questionEight: "What does the user need to know about using the repo?",
        questionNine: "What does the user need to know about contributing?"

    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), function(err){
        if (err){
            return console.log(err)
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type:"input",
            name:"username",
            message: questions[0].questionOne
        },
        {
            type:"input",
            name:"emailAddress",
            message: questions[0].questionTwo
        },
        {
            type: "input",
            name: "title",
            message: questions[0].questionThree
        },
        {
            type: "input",
            name: "description",
            message: questions[0].questionFour
        },
        {
            type: "list",
            name: "license",
            message: questions[0].questionFive,
            choices: [
                "MIT",
                "Apache 2.0",
                "GPL 3.0",
                "BSD 3",
                "None"
            ],
            default: "MIT"
        },
        {
            type: "input",
            name: "dependencies",
            message: questions[0].questionSix,
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: questions[0].questionSeven,
            default: "npm test"
        },
        {
            type: "input",
            name: "repo",
            message: questions[0].questionEight
        },
        {
            type: "input",
            name: "contributions",
            message: questions[0].questionNine
        },


    ])
    .then(function(data){
      writeToFile("README.md",data);
    });
}

// function call to initialize program
init();
