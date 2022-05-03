const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "Name",
      message: "What is the name of the Application?",
    },
    {
      type: "input",
      name: "Description",
      message:
        "What is the basic description of the application's functionality ?",
    },
    {
      type: "input",
      name: "Link",
      message: "What is the URL to the Deployed Application",
    },
    {
      type: "input",
      name: "Useage",
      message: "Describe the Useage of your Application",
    },
    {
      type: "input",
      name: "Collaborators",
      message: "List any Collaborators Names or GitHub usernames",
    },
  ])

  .then((data) => {
    console.log(data);
    const readMe = generateReadMe(data);
    const filename = `README.md`;

    fs.writeFile(filename, html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function generateReadMe(data) {
  return;
  `Readme Document HERE`;
}
