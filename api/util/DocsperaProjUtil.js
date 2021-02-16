const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: '35.223.209.198',
    database: 'DOCSPERA_PROJ',
	password: 'MN3BE24kul356GBB',
    port: 5432,
});

client.connect();

exports.client = client;
