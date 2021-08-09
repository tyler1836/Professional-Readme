const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generate-readme');
const read = require('./generate-readme')

//const with questions about title 'which will be title of readme' 
// description, table of contents, installation, usage, contributing, tests, and questions

const readMe = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?'
        }, 
        {
            type: 'input',
            name: 'Description',
            message: 'Please provide a description of the project?',
            validate: description => {
                if (description){
                    return true;
                }
                else{
                    console.log('Please enter a description.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a table of contents?',
            default: false
        },

    ])
}

readMe().then(templateData => {
    const title = title + '.md'
    const page = generateReadme(templateData);
    fs.writeFile(title, page, err => {
    if (err) throw new Error(err);
})
})