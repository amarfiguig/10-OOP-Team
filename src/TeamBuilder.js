// Including the required dependencies from the following files to run the code on this page.
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Generate the HTML for each manager

let managerDetails = '';
manager.forEach(manager => {
  managerDetails += 
    `<div class="card">
      <div class="card-header">
        <h2>${manager.name}</h2>
        <h3><span class="fa-solid fa-user-gear"></span> Engineer</h3>
      </div>
      <div class="card-info">
        <p><b><i>Employee ID:</i></b> ${manager.id} </p>
        <p><b><i>Email:</i></b> <a href="mailto:${manager.email}">${engineer.email}</a></p>
        <p><b><i>Office number :</i></b> ${manager.office.number}</p>
      </div>
    </div>`;
});

// Generate the HTML for each engineer

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
    </div>`;
});

// Generate the HTML for each intern
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
    </div>`;
});

// Replace placeholders in the HTML template with the generated HTML
page = page.replace('<!--managerteam-->', managerDetails);
page = page.replace('<!--engineerteam-->', engineerDetails);
page = page.replace('<!--internteam-->', internDetails);

// Write the final HTML to file
fs.writeFileSync('./dist/profile.html', page, 'utf8');
