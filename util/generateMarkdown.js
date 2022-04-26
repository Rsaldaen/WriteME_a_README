let licenseURL;
let licenseImg;

function getLicense(answers) {
    if (answers.promptFileLicense === "MIT") {
        licenseURL = "https://opensource.org/licenses/MIT";
        licenseImg = "MIT-red";
        
    } else if (answers.promptFileLicense === "Mozilla Public License 2.0") {
        licenseURL = "https://www.mozilla.org/en-US/MPL/2.0/";
        licenseImg = "Mozilla-blue";
        
    } else if (answers.promptFileLicense === "Apache License 2.0") {
        licenseURL = "http://www.apache.org/licenses/LICENSE-2.0";
        licenseImg = "Apache-brightgreen";
        
    } else if (answers.promptFileLicense === "The Unlicense") {
        licenseURL = "https://unlicense.org/";
        licenseImg = "Unlicense-yellow";
        
    } else if (answers.promptFileLicense === "Boost Software License 1.0") {
        licenseURL = "https://www.boost.org/LICENSE_1_0.txt";
        licenseImg = "Boost-orange";
        
    }
}

function generateMarkdown(answers) {
    getLicense(answers)
    
    return `# ${answers.promptTitle}
    
    ![shields.io](https://img.shields.io/badge/license-${licenseImg})
    
    ## Table Of Contents
    1.  [Description](#description)
    2.  [Installation](#installation)
    3.  [Usage](#usage)
    4.  [Test](#test)
    5.  [Collaborating](#collborating)
    6.  [Contact](#contact)
    7.  [License](#License)

    ________________________________

    ### Description

    ${answers.promptFileDescription}

    ________________________________

    ### Instructions

    ${answers.promptFileInstallation}

    _________________________________

    ### Usage

    ${answers.promptFileUsage}

    _________________________________
    
        ### Test
    
        ${answers.promptFileCollaborating}
    
        _________________________________

    ### Collaborating

    ${answers.promptFileCollaborating}

    _________________________________
    ### Contact Me

    #### ${answers.promptUserName}
    - [E-mail](mailto:${answers.promptFileEmail})
    - [Github](${answers.promptFileGitHub})
    _________________________________

    ### License

    This application is [licensed](${licenseURL}) under the ${answers.promptFileLicense}
    `;
}

module.exports = generateMarkdown;