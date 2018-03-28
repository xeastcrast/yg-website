const app = require("./server");
const request = require("tedious").Request;
const bodyParser = require("body-parser");

//Handling Routers
const route = require("./route.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);
