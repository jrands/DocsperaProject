const service = require('../service/DocsperaProjService');

exports.list_all_zips = function(request, response) {
  console.log('running controller method...');
  service.getAllZipCodes(function(result){
	  response.send(result.rows);
  });
};

exports.listAllMedicareProviders = function(request, response){
    service.getProvidersByState(function(result){
	console.log('result in controller is : ')
	console.log(result.rows);
	response.send(result);
  });
};


exports.listAvgCost = function(request, response){
    service.getAvgCost(function(result){
	console.log('result in controller is : ')
	console.log(result.rows);
	response.send(result);
});
};

exports.listPercDiabetic = function(request, response){
    service.getAvgCost(function(result){
	console.log('result in controller is : ')
	console.log(result.rows);
	response.send(result);
});
};
