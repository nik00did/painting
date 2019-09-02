const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const converters = require('./converters');
const fs = require("fs");
const {
    convertToCSV,
    convertToYaml,
    convertToXML,
    convertToJSON
} = converters;

const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.post('/csv', jsonParser, function (req, res) {
    const csv = convertToCSV(req.body);    
    res.send(convertToJSON(req.body));
    fs.writeFileSync('persons.csv', csv);
});

app.post('/xml', jsonParser, function (req, res) {
    const xml = convertToXML(req.body);    
    res.send(convertToJSON(req.body));
    fs.writeFileSync('persons.xml', xml);
});

app.post('/yaml', jsonParser, function (req, res) {
    const yaml = convertToYaml(req.body);    
    res.send(convertToJSON(req.body));
    fs.writeFileSync('persons.yaml', yaml);
});

app.post('/json', jsonParser, function (req, res) {
    const json = convertToJSON(req.body);
    res.send(convertToJSON(req.body));
    fs.writeFileSync('persons.json', json);
});

app.listen(3000);

module.exports.app = app;