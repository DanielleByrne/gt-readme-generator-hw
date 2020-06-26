// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  

  ## Description 

  ${data.description}



  ##  Table of Contents 

  * [Installation](##Installation)

  * [Usage](##Usage)

  * [License](##License)

  * [Contributing](##Contributing)

  * [Tests](##Tests)

  * [Questions](##Questions)



  ## Installation

  To install the npm packages and their dependencies, run ${data.dependencies}



  ## Usage

  ${data.repo}



  ## License 

  License: ${data.license}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  Copyright 2020 ${data.contributerName}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  

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
