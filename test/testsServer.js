const assert = require('assert');
const request = require('supertest');
const fs = require('fs');
const app = require('../server').app;

describe("Tests server", () => {
    describe("Post запрос /json", () => {
        it("should write an array of objects to persons.json", done => {
            const persons = [];
            const expected = '[]';

            request(app)
                .post("/json")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(() => {
                    const actual = fs.readFileSync("persons.json", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });

        it("should write an array of objects to persons.json", done => {
            const persons = [{id: 1567279709259, firstName: "Петр", lastName: "Шарапов", age: "16"}, {id: 1567279733653, firstName: "Светлана", lastName: "Гру", age: "25"}];
            const expected = '[{id: 1567279709259, firstName: "Петр", lastName: "Шарапов", age: "16"}, {id: 1567279733653, firstName: "Светлана", lastName: "Гру", age: "25"}]';

            request(app)
                .post("/json")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(() => {
                    const actual = fs.readFileSync("persons.json", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });
    });

    describe("Post запрос /xml", function() {
        it("should write an array of objects to persons.xml", function (done) {
            const persons = [];
            const expected = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<persons>\n' +
                '</persons>\n';

            request(app)
                .post("/xml")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.xml", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });

        it("should write an array of objects to persons.xml", function (done) {
            const persons = [{id: 1567279709259, firstName: "Петр", lastName: "Шарапов", age: "16"}, {id: 1567279733653, firstName: "Светлана", lastName: "Гру", age: "25"}];
            const expected = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<persons>\n' +
                '\t<person_0>\n' +
                '\t\t<id>1567279709259</id>\n' +
                '\t\t<firstName>Петр</firstName>\n' +
                '\t\t<lastName>Шарапов</lastName>\n' +
                '\t\t<age>16y</age>\n' +
                '\t</person_0>\n' +
                '\t<person_1>\n' +
                '\t\t<id>1567279733653</id>\n' +
                '\t\t<firstName>Светлана</firstName>\n' +
                '\t\t<lastName>Гру</lastName>\n' +
                '\t\t<age>25y</age>\n' +
                '\t</person_1>\n' +
                '</persons>\n';

            request(app)
                .post("/xml")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.xml", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });
    });

    describe("Post запрос /yaml", function() {
        it("should write an array of objects to persons.yaml", function (done) {
            const persons = [];
            const expected = '';

            request(app)
                .post("/yaml")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.yaml", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });

        it("should write an array of objects to persons.yaml", function (done) {
            const persons = [{id: 1567279709259, firstName: "Петр", lastName: "Шарапов", age: "16"}, {id: 1567279733653, firstName: "Светлана", lastName: "Гру", age: "25"}];
            const expected = '-\n' +
                '  id: 1567279709259\n' +
                '  firstName: Петр\n' +
                '  lastName: Шарапов\n' +
                '  age: 16\n' +
                '-\n' +
                '  id: 1567279733653\n' +
                '  firstName: Светлана\n' +
                '  lastName: Гру\n' +
                '  age: 25\n';

            request(app)
                .post("/yaml")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.yaml", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });
    });

    describe("Post запрос /csv", function() {
        it("should write an array of objects to persons.csv", function (done) {
            const persons = [];
            const expected = 'id,firstName,lastName,age';

            request(app)
                .post("/csv")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.csv", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });

        it("should write an array of objects to persons.csv", function (done) {
            const persons = [{id: 1567279709259, firstName: "Петр", lastName: "Шарапов", age: "16"}, {id: 1567279733653, firstName: "Светлана", lastName: "Гру", age: "25"}];
            const expected = 'id,firstName,lastName,age\n' +
                '1567279709259,Петр,Шарапов,16\n' +
                '1567279733653,Светлана,Гру,25\n';

            request(app)
                .post("/csv")
                .send(persons)
                .set('Content-Type', 'application/json')
                .expect(function (response) {
                    const actual = fs.readFileSync("persons.csv", "utf8");
                    assert.deepEqual(actual, expected)
                })
                .end(done);
        });
    });
});