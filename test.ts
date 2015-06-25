///<reference path="./api/wakanda.d.ts" />

application.addHttpRequestHandler("/abc", "./handlers.js", "handler");

var modelFolder = ds.getModelFolder();

modelFolder.forEachFile(function (file) {
	file.remove();
});