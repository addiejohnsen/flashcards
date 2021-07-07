const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'flashcards',
  port: '5432'
});

client.connect((err) => {
  if (err) {
    console.log('Error in connecting to the database: ', err);
  } else {
    console.log('Successfully connected to the database');
  }
});

module.exports = client;