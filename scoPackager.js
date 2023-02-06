var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
	version: '1.2',
	organization: 'SENAC São Paulo',
	title: 'Template',
	language: 'pt-BR',
	masteryScore: 70,
	startingPage: 'index.html',
	source: path.join(__dirname, 'build'),
	package: {
		version: process.env.npm_package_version,
		zip: true,
		author: 'TAE',
		outputFolder: path.join(__dirname, 'scorm_packages'),
		description: 'A test of the course packaging module',
		keywords: ['scorm', 'test', 'course'],
		typicalDuration: 'PT0H5M0S',
		rights: `©${new Date().getFullYear()} My Amazing Company. All right reserved.`,
		vcard: {
		author: 'TAE',
		org: 'SENAC São Paulo',
		tel: '(000) 000-0000',
		address: 'my address',
		mail: 'my@email.com',
		url: 'https://mydomain.com'
		}
	}
};

scopackager(config, function(msg){
	console.log(msg);
	process.exit(0);
});