const express = require('express');
const app = express();

const argv = require('minimist')(process.argv.slice(2))
argv['port']
const port = argv['port'] || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage)
});

app.get('/app/flips/:number', (req, res) => {
    res.statusCode = 200;
    const flips = req.params.number;
    res.json({'raw': coinFlips(flips), 'summary': countFlips(flips)});
});

app.get('/app/flip/', (req, res) => {
    res.statusCode = 200;
    res.json({"flip": coinFlip()});
});

app.get('/app/flip/call/heads', (req, res) => {
    res.statusCode = 200;
    res.json(flipACoin("heads"));
});

app.get('/app/flip/call/tails', (req, res) => {
    res.statusCode = 200;
    res.json(flipACoin("tails"));
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND');
});

function countFlips(array) {
    var heads = 0;
    var tails = 0;
    if (array.length == 1) {
        if (array[0] == "heads") {
            return "{ heads: " + 1 + " }";
        }
        if (array[0] == "tails") {
            return "{ tails: " + 1 + " }";
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "heads") {
            heads += 1;
        } else {
            tails += 1;
        }
    }
    return {"heads": heads, "tails": tails };
}

function flipACoin(call) {
    var result = "";
    var flip = "";
    flip = coinFlip();
    if (call == flip) {
        result = "win";
    } else {
        result = "lose"
    }
    return {"call": call, "flip": flip, "result": result };
}

function coinFlips(flips) {
    if (flips == null) {
        return coinFlip();
    }
    var arr = [];
    for (let i = 0; i < flips; i++) {
        arr[i] = coinFlip()
    }
    return arr;
}
function coinFlip() {
    var coin = Math.floor(Math.random() * 2)
    if (coin == 0) {
        return "heads"
    }
    if (coin == 1) {
        return "tails"
    }
    return "oops";
}      