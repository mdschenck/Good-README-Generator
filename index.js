const inquirer = require("inquirer");
const fs = require("fs");
const { Console } = require("console");

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
      name: "Installation",
      message: "List the steps necessary for installation.",
    },
    {
      type: "input",
      name: "Useage",
      message: "Describe the Useage of your Application",
    },
    {
      type: "input",
      name: "Screenshot",
      message: "List the URL for a screenshot of the application in use",
    },
    {
      type: "list",
      name: "License",
      message: "Choose a License",
      choices: ["MIT", "Eclipse", "GNU GPL v3", "Creative Commons CC0"],
    },

    {
      type: "input",
      name: "Contributions",
      message: "List guidelines to contribute to the project",
    },

    {
      type: "input",
      name: "Tests",
      message: "List test instructions",
    },

    {
      type: "input",
      name: "Questions",
      message: "What is the contact Email for Questions?",
    },
  ])

  .then((data) => {
    console.log(data);
    const readMe = generateReadMe(data);
    const filename = `README.md`;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

function generateReadMe(data) {
  let dispLicenseBadge;
  let licenseURL;
  let inputLicense = data.License;

  console.log(inputLicense);

  switch (inputLicense) {
    case "MIT":
      dispLicenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      licenseURL = "https://opensource.org/licenses/MIT";
      break;

    case "Eclipse":
      dispLicenseBadge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      licenseURL = "https://opensource.org/licenses/EPL-1.0";
      break;

    case "GNU GPL v3":
      dispLicenseBadge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "Creative Commons CC0":
      dispLicenseBadge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      licenseURL = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
  }

  return `# ${data.Name}   ${dispLicenseBadge}

  # Description:
  
  ${data.Description}

  # Link to Deployed Application:
  
  ${data.Link}


  #Table of Contents
  
  [1. Installation](#installation)

  [2. Useage](#useage)

  [3. License](#license)

  [4. Contribution Guidelines](#contribution-guidelines)

  [5. Tests](#tests)

  [6. Questions](#questions)

  

  # Installation:
  
  ${data.Installation}
  
  # Useage:
  
  ${data.Useage}
  
  ![Screenshot showing deployed application on page load](${data.Screenshot})
  
  # License:
  
  ${data.License} URL: ${licenseURL}

  # Contribution Guidelines:

  ${data.Contributions}

  # Tests

  ${data.Tests}

  # Questions?

  ${data.Questions}

  `;
}
