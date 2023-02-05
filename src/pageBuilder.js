const fs = require('fs');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//function that will generate the HTML content and take the inquirer information 
function buildTeam(managers, engineers, interns) {

    //open the template HTML file 
    let html = fs.readFileSync('../template/index.html', 'utf-8');
    //console.log(html + 'consoled html filesync')
    if (html)
    {
        //creating empty template for content
        let managerHTML = '';
        managers.forEach(manager =>{
            managerHTML +=
             `<div class="card">
                <div class="card-header">
                    <h2> ${manager.getRole()}: ${manager.getName()} </h2>
                    <p>Employee ID: ${manager.getID()}</p>
                    <p>Email: ${manager.getEmail()}</p>
                    <p>Office Number: ${manager.getOfficeNumber()}</p>
                </div>
            </div>
            `;
        })

        let engineerHTML = '';
        engineers.forEach(engineer =>{
            engineerHTML +=
             `<div class="card">
                <div class="card-header">
                    <h2> ${engineer.getRole()} : ${engineer.getName()} </h2>
                    <p>Employee ID: ${engineer.getID()}</p>
                    <p>Email: ${engineer.getEmail()}</p>
                    <p>GitHub profile : <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
                </div>
            </div>
            `;

        })

    let internHTML = '';
        interns.forEach(intern =>{
            internHTML +=
             `<div class="card">
                <div class="card-header">
                    <h2> ${intern.getRole()} : ${intern.getName()} </h2>
                    <p>Employee ID: ${intern.getID()}</p>
                    <p>Email: ${intern.getEmail()}</p>
                    <p>School: ${intern.getSchool()}</p>
                </div>
            </div>
            `;

})

//replacing the placeholders in the template for the new generated HTML
html = html.replace('<!---Manager--->', managerHTML);
html = html.replace('<!---Engineer--->', engineerHTML);
html = html.replace(' <!---Intern--->', internHTML);
console.log(html)

fs.writeFileSync('../dist/team.html', html, 'utf-8');

console.log('Team has been successfully built!')

    }}


module.exports = {buildTeam}
