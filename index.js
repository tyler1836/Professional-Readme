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
            name: 'description',
            message: 'Please provide a description of the project?',
            validate: description => {
                if (description) {
                    return true;
                }
                else {
                    console.log('Please enter a description.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please describe which modules need to be installed.'
        },
        {
            type: 'input',
            name: 'use',
            message: 'Please describe the how to use your application.'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Please list any contributers here.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please describe how to test your application.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input your github user name.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: email => {
                if (email.includes('@gmail.com') || email.includes('@outlook.com') || email.includes('@hotmail.com')) {
                    return true;
                }
                else {
                    return 'Please enter a valid email address!'
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to include a table of contents?',
            default: true
        },
        {
            type: 'list',
            name: 'addBadge',
            message: 'Please select a licensing badge from the list. If none are required select none.',
            choices: ['MIT', 'GPL3.0', 'Apache2.0', 'None']
        }

    ])
}

readMe().then(templateData => {
    const pageTitle = templateData.title + '.md'
    const page = generateReadme(templateData);
    fs.writeFile(pageTitle, page, err => {
        if (err) throw new Error(err);
    })
})
