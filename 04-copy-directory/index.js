var fs = require('fs');

const path = require('path');

var myPath = path.join(__dirname,'files-copy');
var filesPath = path.join(__dirname,'files'); 

if (!fs.existsSync(myPath)){
    fs.mkdirSync(myPath, { recursive: true });
}

var copyFile = (file, dir2)=>{
  
    //gets file name and adds it to dir2
    var f = path.basename(file);
    var source = fs.createReadStream(file);
    var dest = fs.createWriteStream(path.resolve(dir2, f));
  
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
     for (let i = 0; i < result.length; i++) {
        copyFile(path.join(filesPath,result[i]), myPath)
    }
})




  