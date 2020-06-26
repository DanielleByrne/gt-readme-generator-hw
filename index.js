const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js");


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
        questionNine: "What does the user need to know about contributing?",
        questionTen: "What is your name?"


    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), function(err){
        if (err){
            return console.log(err)
        }else{
            console.log("Generating README")
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
                "BSD 3",
                "None"
            ],
            default: "MIT",
            // badge link https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
            // licences https://www.synopsys.com/blogs/software-security/top-open-source-licenses/
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
        {
            type: "input",
            name: "contributerName",
            message: questions[0].questionTen
        },


    ])
    .then(function(data){
      writeToFile("SAMPLEREADME.md",data);
    });
}

// function call to initialize program
init();
