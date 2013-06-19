var async = require('async'),
	csv = require('csv'),
	fs = require('fs'),
	spawn = require('child_process').spawn,
	path = require('path'),
	out = require('out'),
	records = [],
	ignoreFields = ['password', 'title', 'contentsHash', 'securityLevel'];

function insertPassword(record, callback) {
	var title = record.title.replace(/\s/g, '_'),
		dataFields = Object.keys(record).filter(function(field) {
			return ignoreFields.indexOf(field) < 0 && record[field];
		}),
		password = record.password || record.reg_code,
		proc;

	out('creating pass entry: !{grey}{0}', title);

	// create the process
	proc = spawn('pass', ['insert', '--multiline', '--force', title]);

	// write data to the standard in
	proc.stdin.setEncoding('utf8');
	proc.stdin.write(record.password + '\n');

	// iterate through the valid data fields and add
	dataFields.forEach(function(field) {
		proc.stdin.write(field + ': ' + record[field] + '\n');
	});

	proc.on('exit', function(statusCode) {
		callback(statusCode === 0 ? null : new Error('Could not create entry "' + title + '" successfully'));
	});

	// close stdin
	proc.stdin.end();
}

// load the export data script
csv()
.from.options({
	columns: true,
	delimiter: '\t'
})
.from(path.resolve(__dirname, 'export.txt'))
.on('record', function(data) {
	records.push(data);
})
.on('end', function() {
	async.each(records, insertPassword);
});