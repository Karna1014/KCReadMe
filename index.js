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



// write each value of the array on the file breaking line
writeStream.write(` ** Github Username: **\n ${github.login}\n\n #${answer.title}\n\n ## Description: \n${answer.description}\n\n ## Table of Contents: \n * Installation \n * Usage \n * License \n * Contributing \n * Tests \n * Questions \n * Images \n\n #### Installation: \n${answer.installation}\n\n ### Usage: \n${answer.usage}\n\n #### License: \n${answer.license}: ${licChoice}\n\n ### Contributions: ${answer.contributing}\n\n ** Tests: **\n${answer.tests}\n\n### Questions: \n<img src="${github.avatar_url}" alt="avatar" style="border-radius: 16px" width="20px" />\n If you have any questions about this repo, please reach out: \n ** Email: ** \n${answer.email}\n\n #### Images:`)

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

const licChoice = function() {
  if(answer.license[0] => {`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`);
  } else (answer.license[1] => {`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
  } else {
    `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }; 
};





//     fs.readFile("data.json", "utf8", function(err, data) {
//         if (err) {
//         throw err;
//         }

// const dataJSON = JSON.parse(data); 

//     });
// const dataJSON = JSON.stringify(data);

// fs.writeFile("README.md", dataJSON, (error, contents) => {
//     if(error){
//       throw error;
//     }
//     console.log("ReadMe created successfully");

// Pull profile pic 
  // return axios.get(url, { responseType: 'arraybuffer' }).then(res => {
  //   ;`data:${res.headers['content-type']};base64,${Buffer.from(String.fromCharCode(...new Uint8Array(res.data)), 'binary')
  //     .toString('base64')}`
  // })
