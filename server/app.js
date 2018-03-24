const app = require("./server");
const sqlConnect = require("./model/sql");
const request = require("tedious").Request;
const bodyParser = require("body-parser");

//Handling Routers
const route = require("./route.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);


sqlConnect.on("connect", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected To Database!");
    // executeStatement();
  }
});

function executeStatement() {
  let request = new Request("", function(err) {});
}
