# Docspera Take Home Project
## By John Randis 

## Datastore

This project uses a PostgreSQL Database hosted on Google Cloud SQL. Connection details are as follows: 
```
    user: 'postgres',
    host: '35.223.209.198',
    database: 'DOCSPERA_PROJ',
	password: 'MN3BE24kul356GBB',
    port: 5432,
```

## APIs

This project serves three API GET endpoints built on the Node js platform. No authentication or headers are required. Data for the requested queries is available on the following uris in a JSON response format:

```
http://16d3036fabc4.ngrok.io/getAllMedicareProviders
http://16d3036fabc4.ngrok.io/getAverageCostByState
http://16d3036fabc4.ngrok.io/getPercentDiabeticByState
```

If you would like to configure and run the APIs yourself, clone the repository and run the following commands in the main directory (requires node js): 

```bash
npm install

npm run start
```

The server should start on port 3000. 


## Dashboard
Dashboard was built using javascript with the D3 library. Can be accessed at the following url: 

```
http://5ed27edb65b6.ngrok.io/
```

You can also use the http-server package from node to run the dashboard locally, or simply open the index.html file in a browser. 