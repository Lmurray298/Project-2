require("dotenv").config();


module.exports = {
  "development": {
      "username": "root",
      "password": "liam2898",
      "database": "binge",
      "host": "127.0.0.1",
      "dialect": "mysql"
  },
  "test": {
      "username": "root",
      "password": "liam2898",
     "database": "binge",
      "host": "localhost",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }


