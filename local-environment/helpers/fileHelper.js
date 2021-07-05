const fs = require('fs');


exports.readFile = (filePath) => {

    return fs.readFileSync(filePath, 'utf8')

}

exports.writeFile = (filePath, content) => {
    
    fs.writeFileSync(filePath, content, 'utf8');

}