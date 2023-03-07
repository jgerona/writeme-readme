// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information",
    },
    {
        type: "input",
        name: "contributors",
        message: "List out contributors",
    },
    {
        type: "input",
        name: "test",
        message: "Enter testing instructions",
    },
    {
        type: "list",
        name: "license",
        message: "Select a License",
        choices: ["MIT","Boost","Apache 2.0",]
        //How many do i need? How to find license badge?
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username"
        //need to process github username into a url
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const generate = generateMarkdown(response);
        writeToFile("README-generated.md", generate);
    })
}

// Function call to initialize app
init();
