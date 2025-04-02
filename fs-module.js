
console.log(`==== fs module====`);
const fs = require('fs');
fs.readFile('sample.txt', 'utf8' ,(err,data)=>{
    if (err){
        console.log(err);
        
    }
    console.log(data);
    
})