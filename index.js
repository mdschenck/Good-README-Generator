const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "Location",
      message: "Where are you located?",
    },
    {
      type: "input",
      name: "bio",
      message: "Write a short Bio about yourself",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub URL",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your LinkedIn URL",
    },
  ])

  .then((data) => {
    console.log(data);
    const html = generateHtml(data);
    const filename = `index.html`;

    fs.writeFile(filename, html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function generateHtml(data) {
  return;
  `Readme Document HERE`;
}
