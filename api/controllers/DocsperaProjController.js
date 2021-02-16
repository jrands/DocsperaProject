const service = require('../service/DocsperaProjService');

exports.list_all_zips = function(request, response) {
  console.log('running controller method...');
  service.getAllZipCodes(function(result){
	    console.log('result in controller is : ')
	  console.log(result.rows);
	  response.send(result.rows);
  });
};

exports.listAllMedicareProviders = function(request, response){
    medicareProviderCollection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};