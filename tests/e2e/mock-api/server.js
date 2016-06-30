'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
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

app.put('/api/books/', function testPutBook(req, res) {
    
    res.status(201);
    
    var book = req.body;
    
    if (book.title !== 'Test Wrong Book') {
        res.status(500);
    }
    
    if (book.code !== 'TC01') {
        res.status(500);
    }
    
    if (book.description !== 'Test Description') {
        res.status(500);
    }
    
    if (book.cost !== 12.95) {
        res.status(500);
    }
    
    if (book.inInventory !== true) {
        res.status(500);
    }
    
    if (book.isPdf !== true) {
        res.status(500);
    }
    
    if (book.isPrint !== true) {
        res.status(500);
    }
    
    if (book.location !== 'Location 1') {
        res.status(500);
    }
    
    if (book.type !== 'RPG') {
        res.status(500);
    }
    
    res.send();
    
});

app.server = app.listen(8100, function listenOn() {
    console.log('Gulp is running the mock server on port: ' + 8100);
});

module.exports = app;
