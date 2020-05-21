
function generateMarkdown(data) {
    const fs = require('fs');
    let filename = "README".toLocaleLowerCase().split(" ").join("") + ".md";

    fs.writeFile(
        filename,
    `(https://img.shields.io/badge/Rutgers-100.0%25-red)${"# " + data.title}
    [${data.tableOfContents[0]}](#Installations)]
    [${data.tableOfContents[1]}](#Usage)
    [${data.tableOfContents[2]}](#Credits)
    [${data.tableOfContents[3]}](#License)
    ## Credits 
    ${data.description} 
    ## Installation
    ${data.installation}
    ## Description
    ${data.credits}
    ## Usage 
    ${data.usage}
    ## License 
    ${data.license}
    ## UserName:
    ${data.githubUserName}`,


    function(err){
        if(err){
            return console.log(err);
        }
        console.log('Success!');
    }
    
    )};
      
    module.exports = generateMarkdown;
    
    

     
  
   
  
   

   