const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

let _widgets = [];
/**
 * Tests all Widget endpoints
 */
describe('Widget Controller', () => {

  it('should GET a list of available Widgets', done => {
    chai.request(server)
      .get('/api/widgets')
      .query({
        skip: 0,
        limit: 10
      })
      .then(res => {
        expect(res.body).to.haveOwnProperty('data');
        _widgets = res.body.data;
        return done();
      })
      .catch(done);
  });

  it('it should GET a Widget by Id', done => {
    chai.request(server)
      .get(`/api/widgets/${_widgets[0].id}`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('id');
        expect(res.body).to.haveOwnProperty('type');
        expect(res.body).to.haveOwnProperty('name');
        expect(res.body).to.haveOwnProperty('createdAt');
        return done();
      })
      .catch(done);
  });
});