const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

let _orders = [];
/**
 * Tests all Order endpoints
 */
describe('Order Controller', () => {

  it('should GET a list of Orders', done => {
    chai.request(server)
      .get('/api/orders')
      .query({
        skip: 0,
        limit: 10
      })
      .then(res => {
        expect(res.body).to.haveOwnProperty('data');
        _orders = res.body.data;
        return done();
      })
      .catch(done);
  });

  it('it should GET a Order by Id', done => {
    chai.request(server)
      .get(`/api/orders/${_orders[0].id}`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('id');
        expect(res.body).to.haveOwnProperty('createdAt');
        return done();
      })
      .catch(done);
  });


  it('should GET the list of Widgets from an Order', done => {
    chai.request(server)
      .get(`/api/orders/${_order.id}/widgets`)
      .query({
        skip: 0,
        limit: 10
      })
      .then(res => {
        expect(res.body).to.haveOwnProperty('data');
        return done();
      })
      .catch(done);
  });

  it('should GET the list of Widgets from an Order', done => {
    chai.request(server)
      .get(`/api/orders/${_order.id}/widgets/${_widget.id}/details`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('data');
        return done();
      })
      .catch(done);
  });
});