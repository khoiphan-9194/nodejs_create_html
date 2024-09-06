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
        //answers will return true or false, depending on the user's input
        //answers is the object that is returned from the previous question
        //answers.github is the value of the github key in the answers object, if the value is true, then ask for the github username

        //if the user has a github, then ask for the username
        //if the user does not have a github, then do not ask for the username

    },
];

console.log(questions);


// function to prompt user input answers
const  promptUser = (dataInquiry) => {
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


init();





const generateHTML = (Inquiry_DataObject) =>
    {
        let githubUsername = '';
        let linkedinUsername = '';
        if (Inquiry_DataObject.github) // if Inquiry_DataObject.github is true, then assign the value of Inquiry_DataObject.githubUsername to the variable github
            {
                githubUsername = `My github userName: ${Inquiry_DataObject.githubUsername}`;
      
    
             
            }

        if (Inquiry_DataObject.linkedin) {
            linkedinUsername = `My LinkedIn userName: ${Inquiry_DataObject.linkedinUsername}`;
     
   
            }

        return  `<!DOCTYPE html>
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
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${Inquiry_DataObject.name}</h1>
      <p class="lead">I am from ${Inquiry_DataObject.location}. I like ${Inquiry_DataObject.hobby}. 
      My favorite food is ${Inquiry_DataObject.food}.
      </p>
      <h4>Programing languages: </h4>
     ${Programing_Languages(Inquiry_DataObject.stack)} 
        <br>
        <h6>Prefered contact: ${Inquiry_DataObject.contact}</h6>
        <br>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>


    <div class="container">

     <script>
    if (${Inquiry_DataObject.github}) {
            h1.innerHTML = 'My github userName: ${githubUsername}'
       document.write('<h4><a href="www.github.com/${Inquiry_DataObject.githubUsername}">GitHub</a></h4>') 
      
    }
    if (${Inquiry_DataObject.linkedin}) {
        document.write('<h4><a href="www.linkedin.com/${Inquiry_DataObject.linkedinUsername}">LinkedIn</a></h4>') 

    }


    </script>
    </div>


    </div>
  </header>
</body>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
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
  
