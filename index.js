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
  }
  ]);
    const url = `https://api.github.com/users/${answer.username}/repos?per_page=100`;
    
    const response = await axios.get(url)
        .then(function(data) {
          console.log(data);
        })
        .catch(function(err) {
          console.log(err);
        });

    



  
    console.log(response.data);
  
}

fetchUserInfo();




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
