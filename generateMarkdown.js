// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  

  ## Description 

  ${data.description}



  ##  Table of Contents 

  [Installation](##Installation)

  [Usage](##Usage)

  [License](##License)

  [Contributing](##Contributing)

  [Tests](##Tests)

  [Questions](##Questions)



  ## Installation

  To install the npm packages and their dependencies, run ${data.dependencies}



  ## Usage

  ${data.repo}



  ## License 

  ${data.license}



  ## Contributing

  ${data.contributions}



  ## Tests

  Tests can be run using ${data.tests}



  ## Questions
  
  If you have any questions, please contact me at github.com/${data.username} or email me at ${data.emailAddress}.
`;
}

module.exports = {
  generateMarkdown: generateMarkdown,
};
