var service = require('../service/DocsperaProjService');

exports.list_all_zips = function(req, res) {
  getAllZipCodes();
};

exports.listAllMedicareProviders = function(request, response){
    medicareProviderCollection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
};