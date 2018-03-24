const router = require('express').Router();
const register = require("../controller/user/register")

//register
router.post('/user/register', (req, res) => {
  register(req, res)
})

module.exports = router;