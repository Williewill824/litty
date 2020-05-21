let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require("./generator")

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    message: "What is your description?",
    name: "description",
   
  },

  {
    type: "checkbox",
    message: "What would you like in your table of contents?",
    name: "tableOfContents",
    choices: ["Installation", "Usage", "Credits", "License"],
  },

  {
  type: "input",
  message: "What are the steps required to install your project??",
  name: "installation",

  },

  {

    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message: "license?",
    name: "license",
  },

  {
    type: "input",
    message: "If you created an application or package and would like other developers to contribute it?",
    name: "contributing",
  },

{
  type: "input",
  message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
  name: "test",
},
{
  type: "input",
  message: "List your collaborators",
  name: "credits",
},
{
  type: "input",
  message: "Add your github username",
  name: "githubUserName"
},

]).then(function(data) {

  generateMarkdown(data)
});




















