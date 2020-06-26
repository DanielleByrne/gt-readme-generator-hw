// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ##  Table of Contents 

  ## Installation
  ${data.dependencies}

  ## Usage
  ${data.repo}

  ## License 
  ${data.license}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.username} ${data.emailAddress}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown,
};
