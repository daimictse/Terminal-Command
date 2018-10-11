const fs = require('fs');

module.exports.ls = () => {
	fs.readdir('./', (err, files) => {
		const filesToString = files.reduce((acc, file) => {
			return `${acc} ${file}`;
		}, '');

		console.log(filesToString);
	});
};

module.exports.touch = (fname) => {
    fs.appendFile(fname, '', function (err) {
  	if (err) throw err;
  	console.log('File ' + fname + ' Created!');
    });
};

module.exports.mkdir = (dirName) => {
   fs.mkdir(dirName, function(err) {
	if (err) {
	   return console.log(err);
	}
	console.log('Directory ' + dirName + ' Created!');
   });
};
