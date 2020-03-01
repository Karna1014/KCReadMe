const fs = require ("fs");
const inquirer = require ("inquirer");
const axios = require ("axios");
const promise = require ("promise");



async function fetchUserInfo () {

const answer = await inquirer
  .prompt([
    {
      message: "Enter your email",
      name: "email"
    },

    {
    message: "Enter your GitHub username",
    name: "username"
    },

    {
    message: "What is the Title of your project",
    name: "title"
    },

    {
    message: "Give a short description of your project",
    name: "description"
    },

    {
    message: "Installation Information?",
    name: "installation"
    },

    {
    message: "Project Usage?",
    name: "usage"
    },
    {
      type: "list",
      message: "License?",
      name: "license",
      choices: [
        "ISC",
        "MIT",
        "IBM",
        "  "
      ]
    },

    {
      message: "Who worked on the project?",
      name: "contributing"
    },

    {
     message:  "Tests required?",
     name: "tests"
    }


  ]);
    const url = `https://api.github.com/users/${answer.username}`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    const response = await axios.get(url)
       

    writeFile(answer, response.data);
    console.log(response.data);
  
}

   fetchUserInfo();

function writeFile(answer, github) {
const writeStream = fs.createWriteStream('README.md');

const pathName = writeStream.path;

let licChoice = "";

if(answer.license === "MIT") {
  licChoice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
} else if (answer.license === "ISC") {
  licChoice = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
} else {
  licChoice = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
}


// write each value of the array on the file breaking line
writeStream.write(`
**Github Username:**
 ${github.login}
 
 # ${answer.title}
 
 ## Description: 
 ${answer.description}
 
 ## Table of Contents: 
  * Installation 
  * Usage 
  * License 
  * Contributing 
  * Tests 
  * Questions 
  * Images 
   
   #### Installation: 

   ${answer.installation}
   
   ### Usage: 

   ${answer.usage}
   
   #### License: 

   ${answer.license}: ${licChoice}
   
   ### Contributions: ${answer.contributing}
   
   **Tests:**
   
   ${answer.tests}
   
   ### Questions: 
   <img src="${github.avatar_url}" alt="avatar" style="border-radius: 16px" width="40px" />
   
   #### If you have any questions about this repo, please reach out: 

   **Email: ${answer.email}**
     
   #### Images:
`)

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
   console.log(`wrote all the array data to file ${pathName}`);
});

// handle the errors on the write process
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

// close the stream
writeStream.end();
};


    
    
    
 







