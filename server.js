const fs = require('fs');
const express = require('express');
const app = express();


const jsonContent = fs.readFileSync('./db/db.json', 'utf-8');
const data = JSON.parse(jsonContent);

// Serve HTML file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// Serve CSS file
app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/css/style.css');
});

// Serve static image files from images folder
app.use('/images', express.static(__dirname + '/images'));

// Serve static videos files from kitchen folder
app.use('/Kitchen', express.static(__dirname + '/Kitchen'));

// Serve static icons from webfonts folder
app.use('/webfonts', express.static(__dirname + '/webfonts'));

// Serve JS file
app.get('/js/mainTwo.js', function (req, res) {
    res.sendFile(__dirname + '/js/mainTwo.js');
});

// Serve JS icons file
app.get('/js/all.min.js', function (req, res) {
    res.sendFile(__dirname + '/js/all.min.js');
});
// Serve CSS icons file
app.get('/css/all.min.css', function (req, res) {
    res.sendFile(__dirname + '/css/all.min.css');
});

// Serve JSON file
app.get('/db/db.json', function (req, res) {
    res.sendFile(__dirname + '/db/db.json');
});




// Start the server
app.listen(3000, function () {
    console.log('Server started on port 3000');
});