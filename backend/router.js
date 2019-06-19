const package = require('./package.json');
const express = require('express');
const router = express.Router();

const widgetsController = require('./controllers/widgets.controller')();
const ordersController = require('./controllers/orders.controller')();

router.get('/', (req, res) => { res.json({ version: package.version }); });

router.post('/widgets', widgetsController.create);
router.get('/widgets', widgetsController.find);
router.get('/widgets/:widget_id', widgetsController.findById);

router.get('/orders', ordersController.find);
router.post('/orders', ordersController.checkoutOrder, ordersController.create);
router.get('/orders/:order_id', ordersController.findById);

module.exports = () => router;