const {
  PORT = 3001,
  DB_ADDRESS = 'mongodb://localhost:27017/mobile-shop',
} = process.env;

module.exports = {
  PORT,
  DB_ADDRESS,
};
