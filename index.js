const inquirer = require("inquirer");
const fs = require("fs");
var markdown = require("./generateMarkdown.js");


// array of questions for user
const questions = [
    {
        questionOne: "What is the title of your project?",
        questionTwo: "",
        questionThree: "",

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
            type: "input",
            name: "title",
            message: questions[0].questionOne
        }
    ])
    .then(function(data){
      writeToFile("README.md",data);
    });
}

// function call to initialize program
init();
