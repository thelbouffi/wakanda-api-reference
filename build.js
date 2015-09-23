/**
 * #Step1
 * 
 * Run command : typedoc --includeDeclarations --json application.json ./api/application.d.ts
 */


/**
 * #Step2
 */
var fs		= require('fs');
var content = fs.readFileSync('application.json', 'utf8');
var json	= JSON.parse(content);
var output  = '';
var global  = json.children[0].children[0].children;


output+= '/// <reference path="application.d.ts" />\r\n';
output+= "var application:Application;\r\n"


global.forEach(function(element){
	if(element.name !== "application") {
		output += 'var ' + element.name + '=application.' + element.name + ';\r\n';
	}	
});

fs.writeFileSync('./api/wakanda.ts', output, 'utf8');

/**
 * #Step3
 * 
 * Run command : typedoc --includeDeclarations --mode file --readme ./README.md --out ./docs ./api/application.d.ts
 */
