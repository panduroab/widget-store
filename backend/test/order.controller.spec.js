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

  it('should CREATE a Order', done => {
    chai.request(server)
      .post(`/api/orders`)
      .send({
        'items': [{}]
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

  it('should GET a list of Orders', done => {
    chai.request(server)
      .get('/api/orders')
      .query({
        skip: 0,
        limit: 5
      })
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(5);
        _orders = res.body;
        return done();
      })
      .catch(done);
  });

  it('should GET a Order by Id', done => {
    chai.request(server)
      .get(`/api/orders/${_orders[0]._id}`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('_id');
        expect(res.body).to.haveOwnProperty('items');
        expect(res.body).to.haveOwnProperty('createdAt');
        expect(res.body).to.haveOwnProperty('updatedAt');
        return done();
      })
      .catch(done);
  });

  it('should DELETE a Order', done => {
    chai.request(server)
      .delete(`/api/orders/${_orders[0]._id}`)
      .then(() => {
        return done();
      })
      .catch(done);
  });

  it('should Add a Item to a Order', done => {
    chai.request(server)
      .put(`/api/orders/${_orders[0]._id}/add_item`)
      .send({})
      .then(res => {
        expect(res.body).to.haveOwnProperty('_id');
        expect(res.body).to.haveOwnProperty('items');
        expect(res.body).to.haveOwnProperty('createdAt');
        expect(res.body).to.haveOwnProperty('updatedAt');
        return done();
      })
      .catch(done);
  });

  it('should Add many Items to a Order', done => {
    chai.request(server)
      .put(`/api/orders/${_orders[0]._id}/add_many_items`)
      .send([{}])
      .then(res => {
        expect(res.body).to.haveOwnProperty('_id');
        expect(res.body).to.haveOwnProperty('items');
        expect(res.body).to.haveOwnProperty('createdAt');
        expect(res.body).to.haveOwnProperty('updatedAt');
        return done();
      })
      .catch(done);
  });

  it('should Remove a Item from a Order', done => {
    chai.request(server)
      .put(`/api/orders/${_orders[0]._id}/items/${_orders[0].items[0]._id}/remove_item`)
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