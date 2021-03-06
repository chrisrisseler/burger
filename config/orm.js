const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(`${key}=${value}`);
        }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {

    selectAll(table, callback) {
        const queryString = `select * from ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne() {

    },
    updateOne() {

    }

}