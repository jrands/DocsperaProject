'use strict';
module.exports = function(app) {
  var docsperaController = require('../controllers/DocsperaProjController');

  app.route('/ZipCodes')
    .get(docsperaController.list_all_zips);
	
  app.route('/getAllMedicareProviders')
    .get(docsperaController.listAllMedicareProviders);
	
  app.route('/getAverageCostByState')
	.get(docsperaController.listAvgCost);
	
  app.route('/getPercentDiabeticByState')
	.get(docsperaController.listPercDiabetic);
};
