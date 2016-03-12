var pg = require('pg');
var connectionString = 'postgres://postgres:postgres@localhost:5432/todo';


console.log('Crating Database: %s', connectionString);

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

