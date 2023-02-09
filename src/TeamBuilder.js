//Requiring the file system module from node.js.
const fs = require('fs');


// Including the required dependencies from the following files to run the code on this page.
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// This function is executed when the user requests. It retrieves the information from the arrays created in the "teamquestions.js" file and inserts 
//it into the appropriate template literals.
const htmlGenerator = (managers, engineers, interns) => {
    let page = fs.readFileSync('./Template/index.html', 'utf8');

    if (page) {
        let managerDetails = '';
        managers.forEach(manager => {
            managerDetails += 
            `<div class="card">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                    <h3><span class="fa-solid fa-user-tie"></span> Manager</h3>
                </div>
                <div class="card-info">
                    <p><b><i>Employee ID:</i></b> ${manager.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p><b><i>Office Number:</i></b> ${manager.officeNumber}</p>
                </div>
             </div>`
        })

        let engineerDetails = '';
        engineers.forEach(engineer => {
            engineerDetails += 
            `<div class="card">
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                    <h3><span class="fa-solid fa-user-gear"></span> Engineer</h3>
                </div>
                <div class="card-info">
                    <p><b><i>Employee ID:</i></b> ${engineer.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p><b><i>GitHub:</i></b> <a href="https://github.com/${engineer.github}">@${engineer.github}</a></p>
                </div>
            </div>`
        })

        let internDetails = '';
        interns.forEach(intern => {
            internDetails += 
            `<div class="card">
                <div class="card-header">
                    <h2>${intern.name}</h2>
                    <h3><span class="fa-solid fa-graduation-cap"></span> Intern</h3>
                </div>
                <div class="card-info">
                    <p><b><i>Employee ID:</i></b> ${intern.id} </p>
                    <p><b><i>Email:</i></b> <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p><b><i>School:</i></b> ${intern.school}</p>
                </div>
            </div>`
        })

 //Replacing the text with the generated template literals.       
    pagePopulate = pagePopulate.replace('<!--managerteam-->', managerteam);
    pagePopulate = pagePopulate.replace('<!--engineerteam-->', engineerteam);
    pagePopulate = pagePopulate.replace('<!--internteam-->', internteam);

    fs.writeFileSync('./dist/profile.html', pagePopulate, 'utf8');

    console.log('Team page created');
  },
};

//Exporting the function for use in the questions.js file.
module.exports = htmlGenerator;
module.exports = TeamBuilder;
