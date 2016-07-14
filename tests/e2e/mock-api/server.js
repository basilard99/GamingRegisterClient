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

app.put('/api/books/Test%20Wrong%20Book', function testPutBook(req, res) {

    res.status(201);

    var book = req.body;

    if (book.title !== 'Test Wrong Book') {
        res.status(400);
    }
    
    if (book.publisher !== 'publisherList/PEG') {
        res.status(500);
    }

    if (book.code !== 'TC01') {
        res.status(400);
    }

    if (book.description !== 'Test Description') {
        console.log('BOOK DESCRIPTION: ' + book.description);
        res.status(400);
    }

    if (book.cost !== 12.95) {
        res.status(400);
    }

    if (book.inInventory !== false) {
        res.status(400);
    }

    if (book.isPdf !== true) {
        res.status(400);
    }

    if (book.isPrint !== false) {
        res.status(400);
    }

    if (book.location !== 'Location 1') {
        res.status(400);
    }

    if (book.type !== 'RPG') {
        res.status(400);
    }

    res.send();

});

app.get('/api/publisherList', function returnSamplePublisherList(req, res) {
    var results = [];
    results.push({ name: 'Fantasy Flight Games', uri: 'publisherList/FFG' });
    results.push({ name: 'Pinnacle Entertainment Group', uri: 'publisherList/PEG' });

    var returnedList = { list: results };
    res.status(200);
    res.json(returnedList);
});

app.server = app.listen(8100, function listenOn() {
    console.log('Gulp is running the mock server on port: ' + 8100);
});

module.exports = app;
