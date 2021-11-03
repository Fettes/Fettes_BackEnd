module.exports = {
    HOST: "localhost",
    USER: "fettes",
    PASSWORD: "123456",
    DB: "tutorial",
    dialect: "sqlite",
    storage: './database.sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };