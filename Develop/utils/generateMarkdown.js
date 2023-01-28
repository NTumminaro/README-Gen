// TODO: Create a function that returns a license badge based on which license is passed in
// let licenseBadge;
// let licenseLink;
// let licenseSection;

// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {

    case "MIT License": 
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Apache License v2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "GNU General Public License v3.0":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      licenseBadge = "";
      break;

  };

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "I will not be using a license") {
    licenseLink = `- [License](#license)`
  } else {
    licenseLink = "";
  };
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "I will not be using a license") {
    licenseSection = `## license
    
    this is where the license information will go
    
    `
  } else {
    licenseSection = "";
  };

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(data.license);
  renderLicenseSection(data.license);
  renderLicenseLink(data.license);

  return `${licenseBadge}
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  ${licenseSection}
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions or comments, please feel free to reach out to me here on GitHub, or send me and email!

  - Github: [${data.github}](github.com/${data.github})
  - Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
