const Sequelize = require('sequelize')
const config = require('./configuration/db')

module.exports = (db='') => {
  if(db !== ''){
    return new Sequelize(db, config.user, config.pass, {
      host: config.host,
      dialect: config.type,
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    
      // SQLite only
      // storage: 'path/to/database.sqlite'
    });
    // return new Sequelize(`mssql://sa:jOlWTE4jDZ5b@103.86.50.22/${db}`)
  }
  throw new Error('You must input database name');
}