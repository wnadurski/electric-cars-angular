/**
 * Created by hyster on 13.12.15.
 */

var express = require('express');
var path = require('path');

var app = express();

var vehicles = [
    {
        id: 1,
        name: "Model S P85D",
        imgUrl: "http://magazynt3.pl/wp-content/uploads/2015/07/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg",
        company: "Tesla Motors",
        range: 300 //in miles
    },
    {
        id: 2,
        name: "Roadster",
        imgUrl: "http://insideevs.com/wp-content/uploads/2013/03/Used-White-Roadster.jpg",
        company: "Tesla Motors",
        range: 400 //in miles
    }
];

app.use(express.static('static'));

app.all("/api/vehicles", function(req,res) {
    res.json(vehicles);
});

app.all("/api/*", function(req,res) {
    console.log("Unknown api call");
    res.sendStatus(404);
});

app.get('/*', function (req, res) {
    console.log("Request for url: " + req.url);
    res.sendFile(path.join(__dirname, "index.html"));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
