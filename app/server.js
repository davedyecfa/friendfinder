var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type : "application/vnd.api+json"}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, funtion() {
    console.log("App is listening on PORT: " + PORT);
});