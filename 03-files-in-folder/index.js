var fs = require('fs');

const path = require('path');

var myPath = path.join(__dirname,'secret-folder');

let rs = function() {
    return fs.promises.readdir(myPath).then(token => { return token } )
  }
  
  let userToken = rs();
  
  userToken.then(function(result) {
     console.log(result)
     for (let i = 0; i < result.length; i++) {
         let Path = path.join(__dirname,'secret-folder',result[i]);
        
     fs.stat(Path,(err,stats)=>{
         if (err) {
             return console.log(err);
         } else if (stats.isFile()) {
             let newResult = result[i].split(".");
            console.log(newResult[0] + ' - ' + newResult[1] + ' - ' + stats.size/1000 + 'kb');
         }
         
     })
  }
})

  