const fs = require("fs");

const generateReadme = (title, description, table) => {
    return `
    # ${title}



## Description

- ${description}

## Table of contents
    *${table}
## Installation
- Better catch of user inputed data in the search bar.
- Button to create a new random cat fact!

## Licensing


## Usage


    `
}

module.exports = templateData => {
    console.log(templateData);
    return ` 
    # ${templateData.title}



    ## Description
    
    - ${templateData.description}
    
    ## Table of contents
        *${templateData.table}
    ## Installation
    - Better catch of user inputed data in the search bar.
    - Button to create a new random cat fact!
    
    ## Licensing
    
    
    ## Usage
    
    
    `
};