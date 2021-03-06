const util = require('../util/DocsperaProjUtil');
const sql = require('../businessrules/DocsperaProjRules');

function getAllZipCodes(callback){
	console.log('running service method...');
	util.client.query('SELECT * FROM ZIP_CODE', (err, res) => {
    if (err) {
        console.error(err);
    }
	console.log('done');
	callback(res);
    console.log('query run successful');
});
}

function getProvidersByState(callback){
	var queryStr = sql.PROVIDER_COUNT_BY_STATE;
	util.client.query(queryStr, (err, res) => {
    if (err) {
        console.error(err);
    }
	console.log('done');
	callback(res);
    console.log('query run successful');
});
}

function getAvgCost(callback){
	var queryStr = sql.AVG_COST_BY_STATE;
	util.client.query(queryStr, (err, res) => {
    if (err) {
        console.error(err);
    }
	console.log('done');
	callback(res);
    console.log('query run successful');
});
}

function getPercDiabetic(callback){
	var queryStr = sql.PERC_DIABETIC_BY_STATE;
	util.client.query(queryStr, (err, res) => {
    if (err) {
        console.error(err);
    }
	console.log('done');
	callback(res);
    console.log('query run successful');
});
}



module.exports = {getAllZipCodes, getProvidersByState, getAvgCost, getPercDiabetic};