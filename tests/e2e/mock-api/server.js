'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.put('/api/publisherlist/ffg', function test(req, res) {

    res.status(201);

    var publisher = req.body;

    if (publisher.name !== 'Fantasy Flight Games') {
        res.status(500);
    }

    if (publisher.webSite !== 'http://www.ffg.com') {
        res.status(500);
    }

    if (publisher.code !== 'FFG') {
        res.status(500);
    }

    if (publisher.isActive !== true) {
        res.status(500);
    }

    if (publisher.description !== 'Owned by Asmodee') {
        res.status(500);
    }

    res.send();
});

app.server = app.listen(8100, function() {
    console.log('Gulp is running the mock server on port: ' + 8100);
});

module.exports = app;
