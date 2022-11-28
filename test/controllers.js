let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('controllers test', () => {
    describe('/GET countNumbers', () => {
        it('it should GET count of numbers between 2 positive numbers', (done) => {
            const body = { start: 1, end: 9 }
            chai.request(server)
                .get('/api/countNumbers/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data').eql(8);
                    done();
                });
        });
        it('it should GET count of numbers between 2 negative numbers', (done) => {
            const body = { start: -15, end: -5 }
            chai.request(server)
                .get('/api/countNumbers/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data').eql(9);
                    done();
                });
        });
        it('it should GET count of numbers between 1 positibe number and 1 negative number', (done) => {
            const body = { start: -15, end: 15 }
            chai.request(server)
                .get('/api/countNumbers/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data').eql(27);
                    done();
                });
        });
    });
    describe('/GET alphabetIndex', () => {
        it('it should GET the corrsponding number in sequence to the alphabet', (done) => {
            const body = { text: "BFG" }
            chai.request(server)
                .get('/api/alphabetIndex/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data').eql(1515);
                    done();
                });
        });
    });
    describe('/GET fewSteps', () => {
        it('it should GET the corrsponding number in sequence to the alphabet', (done) => {
            const body = { arr: [3, 4, 720, 625, 10000] }
            chai.request(server)
                .get('/api/fewSteps/')
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('data').eql([3, 3, 6, 6, 7]);
                    done();
                });
        });
    });
});