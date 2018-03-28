const router = require("express").Router();
const fs = require("fs");
const path = require("path");

// register Router

// console.log("+ List of Routes")
fs.readdirSync(path.join(__dirname, "routes")).forEach(function(files) {
  router.use(require(path.join(__dirname, "routes", files)));
  
  // console.log("   - "+path.join(__dirname, "routes", files))
});

module.exports = router;
