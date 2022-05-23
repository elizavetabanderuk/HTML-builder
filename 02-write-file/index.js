var fs = require('fs');
const path = require('path');

var myPath = path.join(__dirname,'writetext.txt');
var rs = fs.createWriteStream(myPath, 'utf8');
console.log('Your text here')

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    // Эхо-вывод текста
    rs.write(input);
    var command = input.trim();
    if (command == 'exit')
      process.exit(0);
  }
});