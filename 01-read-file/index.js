var fs = require('fs');
const path = require('path');

var myPath = path.join(__dirname,'text.txt');
var rs = fs.createReadStream(myPath, 'utf8');

rs.on('data', function(chunk) {
    console.log(chunk);
});