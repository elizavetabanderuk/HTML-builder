var fs = require('fs');

const path = require('path');

var myPath = path.join(__dirname,'project-dist','bundle.css');
var filesPath = path.join(__dirname,'styles'); 

var transferFile = (file)=>{
  
    //gets file name and adds it to dir2
    var f = path.basename(file);
    var source = fs.createReadStream(file);
    var dest = fs.createWriteStream(myPath);
  
    source.pipe(dest);
    source.on('end', function() { console.log('Succesfully copied'); });
    source.on('error', function(err) { console.log(err); });
  };

let rs = function() {
    return fs.promises.readdir(filesPath).then(token => { return token } )
  }
  
  let userToken = rs();
  
  userToken.then(function(result) {
     console.log(result);
     for (let i = result.length-1; i >=0; i=i-1) {
        transferFile(path.join(filesPath,result[i]))
    }
})
