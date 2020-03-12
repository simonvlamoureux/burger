var express = require('express');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var expbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");
app.set('views', __dirname + '/views');

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
}); 

