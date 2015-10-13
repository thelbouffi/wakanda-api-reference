var fs		= require('fs');

function getGlobalDeclaration(){

	var content = fs.readFileSync('application.json', 'utf8');
	var json	= JSON.parse(content);
	var output  = '';
	var global  = json.children[0].children[0].children;
	
	
	output+= '/// <reference path="application.d.ts" />\r\n';
	output+= "var application:Application;\r\n"
	
	
	global.forEach(function(element){
		if(element.name !== "application") {
			output += 'var ' + element.name + ' = application.' + element.name + ';\r\n';
		}	
	});
	
	return output;
}

function concatenateFiles(folderPath, outputFile, initialContent){
	var files  = fs.readdirSync(folderPath);
	var output = initialContent;
	
	files.forEach(function(file){
		output += fs.readFileSync(folderPath + "/" + file, 'utf8');		
	});
	output = cleanOutput(output);
	fs.writeFileSync(outputFile, output, 'utf8');
}

function cleanOutput(output){
	return output.replace(new RegExp("///.*","g"), "");
}

function runCommand(cmd, callback){
	var exec = require('child_process').exec;
	
	exec(cmd,callback);
}

console.log("Parsing Wakanda API..");
runCommand("typedoc --includeDeclarations --json application.json ./api/application.d.ts", function(){
	console.log("Constructing global scope declarations..");
	var globalDeclarations = getGlobalDeclaration();
	console.log("Concatenating Wakanda API files..");
	concatenateFiles("api", "build/wakanda.ts", globalDeclarations);
	console.log("Concatenating Wakanda Model API files..");
	concatenateFiles("model", "build/model.ts");
	console.log("Done.");
	//runCommand("typedoc --includeDeclarations --mode file --readme ./README.md --out ./docs ./api/application.d.ts");
	
});