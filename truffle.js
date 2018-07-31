// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost', //'127.0.0.1',
      port: 8545,
      //from: "0xeac3b27b03f5617148a138e6b986684a7527182f",
      network_id: '*', // Match any network id
      gas: 5000000
    }
  }
}
