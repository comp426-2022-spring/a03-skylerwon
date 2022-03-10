import { coinFlip, coinFlips, countFlips, countFLips, flipACoin } from './coin.mjs';
const express = require('express');
const app = express();    

const argv = require('minimist')(process.argv.slice(2))
argv['port']
const port = argv['port'] || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flips/:number', (req, res) => {
    res.statusCode = 200;
    const flips = req.params.number;
    res.json({"raw":coinFlips(flips), "summary":countFlips(flips)})
});

app.get('/app/flip/', (req, res) => {
    res.statusCode = 200;
    res.json({"flip": coinFlip()})
});


app.get('/app/flip/call/heads', (req, res) => {
    res.statusCode = 200;
    res.json(flipACoin("heads"))
});

app.get('/app/flip/call/tails', (req, res) => {
    res.statusCode = 200;
    res.json(flipACoin("tails"))
});

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});