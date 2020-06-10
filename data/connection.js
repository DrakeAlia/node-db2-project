const knex = require('knex');

const connectionConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/car.db3',
    },
    useNullAsDefault: true,
}


module.exports = knex(connectionConfig)