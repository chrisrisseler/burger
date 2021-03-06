// const connection = require('../config/connection');
const orm = require('../config/orm');

const burger = {
    selectAll(callback) {
        orm.selectAll('burgers', (response) => callback(response))
    },
    insertOne(columns, values, callback) {
        orm.insertOne('burgers', columns, values, (response) => callback(response))
    },
    updateOne(objectColumnValues, condition, callback) {
        orm.updateOne('burgers', objectColumnValues, condition, (response) => callback(response))
    }

};

module.exports = burger;