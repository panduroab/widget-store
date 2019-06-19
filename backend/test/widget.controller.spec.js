const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

let _widgets = [];
const colors = [
  'White',
  'Silver',
  'Gray',
  'Black',
  'Red',
  'Maroon',
  'Yellow',
  'Olive',
  'Lime',
  'Green',
  'Aqua',
  'Teal',
  'Blue',
  'Navy',
  'Fuchsia',
  'Purple'
];
const sizes = ['Small', 'Medium', 'Big'];
const categories = ['Prime', 'Elite', 'Extreme Edition'];

/**
 * Tests all Widget endpoints
 */
describe('Widget Controller', () => {

  it('should CREATE a Widget', done => {
    const random_name = Math.random().toString(36).substr(2, 5);
    const stock = Math.floor(Math.random() * 30) + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    chai.request(server)
      .post('/api/widgets')
      .send({
        name: `Widget-${random_name}`,
        category,
        color,
        size,
        stock
      })
      .then(res => {
        return done();
      })
      .catch(done);
  });

  it('should GET a list of available Widgets', done => {
    chai.request(server)
      .get('/api/widgets')
      .query({
        skip: 0,
        limit: 5
      })
      .then(res => {
        expect(res.body).to.be.an('array');
        //expect(res.body).to.have.length(5);
        _widgets = res.body;
        return done();
      })
      .catch(done);
  });

  it('it should GET a Widget by Id', done => {
    chai.request(server)
      .get(`/api/widgets/${_widgets[0]._id}`)
      .then(res => {
        expect(res.body).to.haveOwnProperty('_id');
        expect(res.body).to.haveOwnProperty('name');
        expect(res.body).to.haveOwnProperty('category');
        expect(res.body).to.haveOwnProperty('isAvailable');
        expect(res.body).to.haveOwnProperty('createdAt');
        expect(res.body).to.haveOwnProperty('updatedAt');
        return done();
      })
      .catch(done);
  });
});