const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

let order = null;
/**
 * Tests all Order endpoints
 */
describe('Order Controller', () => {

  it('should CREATE a Order', done => {
    chai.request(server)
      .get('/api/widgets')
      .then(res => res.body)
      .then(widgets => {
        chai.request(server)
          .post(`/api/orders`)
          .send({
            "items": [
              widgets[0],
              widgets[0],
              widgets[0],
              widgets[0],
              widgets[1],
              widgets[2],
              widgets[2],
              widgets[2]
            ]
          })
          .then(res => {
            order = res.body;
            expect(res.body).to.haveOwnProperty('_id');
            expect(res.body).to.haveOwnProperty('items');
            expect(res.body).to.haveOwnProperty('createdAt');
            expect(res.body).to.haveOwnProperty('updatedAt');
            return done();
          })
          .catch(done);
      })
      .catch(done);
  });

  it('should GET a Order by Id', done => {
    chai.request(server)
      .get(`/api/orders/${order._id}`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('_id');
        expect(res.body).to.haveOwnProperty('items');
        expect(res.body).to.haveOwnProperty('createdAt');
        expect(res.body).to.haveOwnProperty('updatedAt');
        return done();
      })
      .catch(done);
  });

});