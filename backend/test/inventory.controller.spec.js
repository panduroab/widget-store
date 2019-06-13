const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server')();

/**
 * Tests all Inventory endpoints
 */
describe('Inventory Controller', () => {

});