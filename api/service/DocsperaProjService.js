const util = require('../util/DocsperaProjUtil');

function getAllZipCodes(callback){
	console.log('running service method...');
	util.client.query('SELECT * FROM ZIP_CODE', (err, res) => {
    if (err) {
        console.error(err);
    }
	console.log('done');
	callback(res);
    console.log('query run successful');
    util.client.end();
});
}

module.exports = {getAllZipCodes};