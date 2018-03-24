const Connection = require("tedious").Connection;

const config = {
  userName: 'sa',
  password: 'jOlWTE4jDZ5b',
  server: '103.86.50.22',
  // options: {encrypt: true, database: 'AdventureWorks'}  

}

module.exports = new Connection(config);