var fs = require('fs');

var JavascriptObfuscator = require('javascript-obfuscator');


fs.readFile('./index.js', "utf-8", function(err,data){
    if(err){
        throw err;
    }

    var obfuscationResult = JavascriptObfuscator.obfuscate(data);

    fs.writeFile('./index.js', obfuscationResult.getObfuscatedCode(), function(err){
        if(err){
            return console.log(err);
        }
        console.log('O arquivo esta salvo!');
    });
});

