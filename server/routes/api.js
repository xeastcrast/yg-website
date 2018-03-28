const router = require('express').Router();
const register = require("../controller/user/register")
const login = require("../controller/user/login")
const app = require("../next")

//register api
router.post('/api/user/register', (req, res) => {
  return register(req, res)
})

//login api
router.post('/api/user/login', (req, res) => {
  return login(req, res)
})

module.exports = router;