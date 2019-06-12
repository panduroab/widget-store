const BaseController = require('./base.controller');
class OdersControllers extends BaseController {
  constructor() {
    super();
  }
  payOrder(req, res) {
    res.json({});
  }
  findItemsByOrderId(req, res) {
    res.json([]);
  }
  findItemById(req, res) {
    res.json({});
  }
}
module.exports = OdersControllers;