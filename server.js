const Express = require("express");
const BodyParser = require("body-parser");
const PORT = 3000;

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var util = require('./api/util/DocsperaProjUtil');
var routes = require('./api/routes/DocsperaProjRoutes');
routes(app);

app.listen(PORT, () => {
	console.log("API Started on port " + PORT); 
});
