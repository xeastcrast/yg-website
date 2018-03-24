const router = require("express").Router();
const fs = require("fs");
const path = require("path");

fs.readdirSync(path.join(__dirname, "routes")).forEach(function(files) {
  router.use(require(path.join(__dirname, "routes", files)));
  // console.log("+ List of Routes")
  // console.log("   - "+path.join(__dirname, "routes", files))
});

module.exports = router;
