const knex = require('knex');

const knexfile = require('../knexfile.js');

const config = knexfile.development;

console.log('config', config);

// const connectionConfig = {
//     client: 'sqlite3',
//     connection: {
//         filename: './data/car.db3',
//     },
//     useNullAsDefault: true,
// }


module.exports = knex(config);