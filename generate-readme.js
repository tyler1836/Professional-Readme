const fs = require("fs");
const { type } = require("os");

const generateReadme = (title, description, table) => {
    return `
    # ${title}



## Description

- ${description}

## Table of contents
    *${table}
## Installation
-

## Licensing


## Usage


    `
}
const tableContents = (templateData) => {
    if(templateData.table === false) {
        return;
    }
    return `## Table of contents
* **[Installation](#installation)**
* **[Licensing](#licensing)**
* **[Usage](#usage)**
* **[Contributers](#contributers)**
* **[Tests](#test)**
* **[Questions](#additional-questions)**
     `
   
}
const badge = (templateData) =>{
    if(templateData.badge !== 'None'){
        return `![license badge](https://img.shields.io/badge/license-${templateData.addBadge}-blue.svg)


* For more info on MIT licensing please visit the [MIT page](https://opensource.org/licenses/MIT)
* For more info on GPL 3.0 please visit the [GPL page](https://www.gnu.org/licenses/gpl-3.0.en.html)        
* For more info on Apache 2.0 please visit the [Apache page](https://www.apache.org/licenses/LICENSE-2.0)       ` 
    }
     return '';
    
}

module.exports = templateData => {
    console.log(templateData);
    return ` 
# ${templateData.title}
## Licensing
${badge(templateData)}



## Description
    
- ${templateData.description}
    
${tableContents(templateData)}
 
## Installation
-${templateData.install}
    
## Usage
-${templateData.use}
    
    
## Contributions
-${templateData.contributers}

## Test
-${templateData.test}

## Additional Questions
[Github](https://github.com/${templateData.github})

-Contact Me at ${templateData.email}  
    
    `
};
