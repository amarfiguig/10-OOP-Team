// Requiring the Node.js file system module
const fs = require('fs');

// Requiring the information from the following files to run the code on this page
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// This function will execute when the user runs the "Team" request. 
// It will retrieve data from arrays generated in the runQuestions.js file and write it into the template literals.
const htmlGenerator = (Managers, Engineers, Interns) => {
  
 // Reading and synchronizing the information in the starter.html with the data added through the template literals
  let pagePopulate = fs.readFileSync('./Template/index.html', 'utf8');

  if (pagePopulate) {
    let managerInfo = '';
    // Looping through the Manager data
    Managers.forEach(manager => {
      managerInfo += 
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
    });

    let engineerInfo = '';
    // Looping through the Engineer data
    Engineers.forEach(engineer => {
      engineerInfo += 
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
    });

let internInfo = '';
Interns.forEach(intern => {
    internInfo += `
    <div class="box">
        <div class="box-header">
            <h2>${intern.name}</h2>
            <h3><span class="fa-solid fa-graduation-cap"></span> Intern</h3>
        </div>
        <div class="box-info">
            <p><b><i>Employee ID:</i></b> ${intern.id} </p>
            <p><b><i>Email:</i></b> <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p><b><i>School:</i></b> ${intern.school}</p>
        </div>
    </div>`;
});
    
//Substituting the placeholder text with the template literals.
pagePopulate = pagePopulate.replace('<!--managerteam-->', managerteam);
pagePopulate = pagePopulate.replace('<!--engineersteam-->', engineersteam);
pagePopulate = pagePopulate.replace('<!--internsteam-->', internsteam);

// Exporting the function for connection from the runQuestions.js file.
fs.writeFileSync('./dist/teamPage.html', pagePopulate, 'utf8');
console.log('Team page created');





