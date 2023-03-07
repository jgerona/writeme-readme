// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  else if(license === "Boost"){
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  }
  else if(license === "Apache 2.0"){
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if(license === "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  }
  else if(license === "Boost"){
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  }
  else if(license === "Apache 2.0"){
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT"){
    return "[Link to License](#MIT-License)";
  }
  else if(license === "Boost"){
    return "[Link to License](#Boost-License)";
  }
  else if(license === "Apache 2.0"){
    return "[![Link to License](#Apache-2.0-License)]";
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);
  return `# ${data.title}

 # Description

  ${data.description}


  # Table of Contents

  *[Installation](#installation) 
  *[Usage](#usage)
  *[Contributors](#contributors)
  *[Testing](#testing)
  *[License](#license)
  *[Questions](#questions)


  # Installation

  ${data.installation}


  # Usage

  ${data.usage}


  # Contributors

  ${data.contributors}


  # Testing

  ${data.test}


  # License

  ${badge}

  ${link}


  # Questions

  https://github.com/${data.github}

  If there are additional questions, reach this email: ${data.email}
  `;
}

module.exports = generateMarkdown;
