//npm init

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    // What is your Project Title? [string]

    {
      type: "input",
      message: "What is your Project title?",
      name: "title",
    },
    // What is your Description? [string]
    {
      type: "input",
      message: "What is your Description?",
      name: "description",
    },

    // What is your Table of Contents? [array:string]
    {
      type: "input",
      message: "What is your Table of Contents?",
      name: "tableOfContents",
    },

    // How to Install: [string]
    {
      type: "input",
      message:
        "What are the instructions on how to install the dependencies for your repo?",
      name: "installation",
    },

    // What is the Usage? [string]
    {
      type: "input",
      message: "What is the expected use of this repo?",
      name: "usage",
    },

    // What is your License? [string]
    {
      type: "input",
      message: "What licenses does this repo have?",
      name: "license",
    },

    // Who are your Contributors? {array of string}
    {
      type: "input",
      message: "Who are your Contributors?",
      name: "contributors",
    },

    // What are your Tests? [string]
    {
      type: "input",
      message:
        "How do you run the tests on this repo (assuming that testing has been implemented)?",
      name: "tests",
    },

    // What are your Questions? [array: string]
    {
      type: "input",
      message: "Who does one contact for questions about the repo, and how?",
      name: "questions",
    },

    // What is your  GitHub User profile picture? [string: image url?]
    {
      type: "input",
      message: "What is your  GitHub User profile picture URL?",
      name: "pictureURL",
    },

    // What is your GitHub User email? [string]
    {
      type: "input",
      message: "What is your GitHub User email?",
      name: "email",
    },

    // const questions = [
    //array of questions
    // * At least one badge
    // What is your Project title? [string]
    // What is your Description? [string]
    // What is your Table of Contents? [array:string]
    // How to Install: [string]
    // What is the Usage? [string]
    // What is your License? [string]
    // Who are your Contributors? {array of string}
    // What are your Tests? [string]
    // What are your Questions? [array: string]
    // What is your  GitHub User profile picture? [string: image url?]
    // What is your GitHub User email? [string]
  ])

  //then create .json file with responeses
  .then(function (data) {
    const filename = data.title + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });

// function writeToFile(fileName, data) {
//   //where do i want the file placed?
//   //create a file with name fileName
//   //write to fileName the data
//   //09-06
// }

function init() {}

init();
