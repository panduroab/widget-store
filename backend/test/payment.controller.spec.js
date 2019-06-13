const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

/**
 * Tests all Payment endpoints
 */
describe('Payment Controller', () => {

  it('should Pay an Payment', done => {
    chai.request(server)
      .post(`/api/payments/orders/${order._id}/pay`)
      .send({
        email: "my@email.com"
      })
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