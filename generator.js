
function generateMarkdown(data) {
    const fs = require('fs');
    let filename = "README".toLocaleLowerCase().split(" ").join("") + ".md";

    fs.writeFile(
        filename,
    `[!https://img.shields.io/badge/Rutgers-100.0%25-red]
     # ${data.title}
    \n\n[${data.tableOfContents[0]}](# Installations)\n\n[${data.tableOfContents[1]
    }](# Usage)\n\n[${data.tableOfContents[2]}](# Credits)\n\n[${data.tableOfContents[3]}](# License)
    \n\n ## Credits \n ${data.description} \n\n ## Installation \n ${data.installation}
    \n\n ## Description \n ${data.credits} \n\n ## Usage \n ${data.usage}
    \n\n ## License \n ${data.license} ## UserName: ${data.githubUserName}`,


    function(err){
        if(err){
            return console.log(err);
        }
        console.log('Success!');
    }
    
    )};
      
    module.exports = generateMarkdown;
    
    

     
  
   
  
   

   