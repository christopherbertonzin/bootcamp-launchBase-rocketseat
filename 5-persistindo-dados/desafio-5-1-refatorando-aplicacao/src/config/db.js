const { Poll } = require('pg')

module.exports = new Poll({
    user: 'postgress',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})