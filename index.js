const inquirer = require('inquirer');
const fs = require('fs');



const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'where are you from?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'what is your favorite hobby?',
        name: 'hobby',
    },
    {
        type: 'input',
        message: 'what is your favorite food?',
        name: 'food',
    },

        {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL','None'],
      },

      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'confirm',
        message: 'Do you have a LinkedIn?',
        name: 'linkedin',
        default: false,
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'linkedinUsername',
        when: (answers) => answers.linkedin,//if the user has a linkedin, then ask for the username
        //if the user does not have a linkedin, then do not ask for the username

    },

    {
        type: 'confirm',
        message: 'Do you have a GitHub?',
        name: 'github',
        default: false,
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
        when: (answers) => answers.github 
        // when is a conditional that checks the value of the previous question
        // the previous question is a confirm question that asks if the user has a github account
        // if the user has a github account, then ask for the username
        // if the user does not have a github account, then do not ask for the username
        //answers will return true or false, depending on the user's input
        //answers is the object that is returned from the previous question
        //answers.github is the value of the github key in the answers object, if the value is true, then ask for the github username

        //if the user has a github, then ask for the username
        //if the user does not have a github, then do not ask for the username

    },
];

console.log(questions);


// function to prompt user input answers
const promptUser = (dataInquiry) => {
    return  inquirer.prompt(dataInquiry); //returning the inquirer.prompt method
  };
  



const init =() => {
    promptUser(questions)
    .then((data) => {
        const htmlPageContent = generateHTML(data);
        fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html')
        );

    });
}

const generateHTML = (Inquiry_DataObject) => {
  let githubUsername = '';
  let linkedinUsername = '';
  if (Inquiry_DataObject.github) {
    githubUsername = `My github userName: ${Inquiry_DataObject.githubUsername}`;
  }
  if (Inquiry_DataObject.linkedin) {
    linkedinUsername = `My LinkedIn userName: ${Inquiry_DataObject.linkedinUsername}`;
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:700,400&display=swap"
    rel="stylesheet"
  />
  <title>Personal Profile</title>
  <style>
    body {
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%);
    min-height: 100vh;
    margin: 0;
    }
    .profile-card {
    max-width: 700px;
    margin: 60px auto;
    background: linear-gradient(135deg, #fff 60%, #e0c3fc 100%);
    border-radius: 32px;
    box-shadow: 0 8px 32px rgba(67, 198, 172, 0.18), 0 2px 8px rgba(0,0,0,0.08);
    padding: 48px 56px;
    position: relative;
    overflow: hidden;
    }
    .profile-card::before {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
    width: 220px;
    height: 220px;
    background: radial-gradient(circle, #43c6ac 60%, #191654 100%);
    opacity: 0.18;
    border-radius: 50%;
    z-index: 0;
    }
    .profile-header {
    text-align: center;
    margin-bottom: 36px;
    position: relative;
    z-index: 1;
    }
    .profile-header h1 {
    font-size: 3.2rem;
    font-weight: 700;
    color: #191654;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px #e0c3fc80;
    }
    .profile-header .lead {
    font-size: 1.4rem;
    color: #43c6ac;
    font-weight: 500;
    margin-bottom: 0;
    }
    .profile-section {
    margin-bottom: 28px;
    position: relative;
    z-index: 1;
    }
    .profile-section h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #191654;
    font-weight: 700;
    letter-spacing: 0.5px;
    }
    .profile-section ul.list-group {
    background: transparent;
    border: none;
    padding-left: 0;
    }
    .profile-section .list-group-item {
    background: linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%);
    color: #191654;
    border: none;
    border-radius: 12px;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 1.1rem;
    box-shadow: 0 1px 4px #43c6ac22;
    }
    .profile-links a {
    margin-right: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    background: linear-gradient(90deg, #43c6ac 0%, #191654 100%);
    padding: 0.6em 1.4em;
    border-radius: 2em;
    transition: background 0.2s, color 0.2s;
    box-shadow: 0 2px 8px #43c6ac33;
    display: inline-block;
    margin-bottom: 8px;
    }
    .profile-links a:hover {
    background: linear-gradient(90deg, #f8ffae 0%, #43c6ac 100%);
    color: #191654;
    text-decoration: none;
    }
    .badge-contact {
    background: linear-gradient(90deg, #191654 0%, #43c6ac 100%);
    color: #fff;
    font-size: 1.1rem;
    padding: 0.7em 1.6em;
    border-radius: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px #19165433;
    }
    @media (max-width: 768px) {
    .profile-card {
      padding: 24px 10px;
    }
    .profile-header h1 {
      font-size: 2rem;
    }
    }
  </style>
  </head>
  <body>
  <div class="profile-card">
    <div class="profile-header">
    <h1>Hi! My name is ${Inquiry_DataObject.name}</h1>
    <p class="lead">
      <i class="fas fa-map-marker-alt"></i> ${Inquiry_DataObject.location} &nbsp;|&nbsp;
      <i class="fas fa-heart"></i> Hobby: ${Inquiry_DataObject.hobby} &nbsp;|&nbsp;
      <i class="fas fa-utensils"></i> Favorite food: ${Inquiry_DataObject.food}
    </p>
    </div>
    <div class="profile-section">
    <h4><i class="fas fa-code"></i> Programming Languages</h4>
    ${Programing_Languages(Inquiry_DataObject.stack)}
    </div>
    <div class="profile-section">
    <h4><i class="fas fa-comments"></i> Preferred Contact</h4>
    <span class="badge badge-contact">${Inquiry_DataObject.contact}</span>
    </div>
    <div class="profile-section profile-links">
    <h4><i class="fas fa-link"></i> Links to My Profiles</h4>
    ${Inquiry_DataObject.github ? `<a href="https://github.com/${Inquiry_DataObject.githubUsername}" target="_blank"><i class="fab fa-github"></i> My GitHub</a>` : ''}
    ${Inquiry_DataObject.linkedin ? `<a href="https://linkedin.com/in/${Inquiry_DataObject.linkedinUsername}" target="_blank"><i class="fab fa-linkedin"></i> My LinkedIn</a>` : ''}
    </div>
  </div>
  </body>
</html>`;
}

const Programing_Languages = (languages) =>{
    let allLanguages = [];
  
    if (languages) {
        languages.forEach(language => {
  allLanguages.push(language);
        });

        return  `<ul class= "list-group">
        ${allLanguages.map(language => `<li class="list-group-item">${language}</li>`).join('')}
        </ul>`;
        
    }
    
    else {
        return 'No languages selected';
    };
  };
  


  // Function call to initialize app
  init();