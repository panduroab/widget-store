const package = require('./package.json');
const express = require('express');
const router = express.Router();

const widgetModel = require('./models/widget.model');
const orderModel = require('./models/order.model');

const WidgetsController = require('./controllers/widgets.controller');
const OrdersController = require('./controllers/orders.controller');
const widgetsCtrl = new WidgetsController(widgetModel);
const ordersCtrl = new OrdersController(orderModel);

router.get('/', (req, res) => { res.json({ version: package.version }); });

router.get('/widgets', widgetsCtrl.find);
router.get('/widgets/:widget_id', widgetsCtrl.findById);

router.get('/orders', ordersCtrl.find);
router.post('/orders', ordersCtrl.create);

router.get('/orders/:order_id', ordersCtrl.findById);
router.put('/orders/:order_id', ordersCtrl.update);
router.delete('/orders/:order_id', ordersCtrl.delete);
router.get('/orders/:order_id/pay_order', ordersCtrl.payOrder);

router.get('/orders/:order_id/items', ordersCtrl.findItemsByOrderId);
router.get('/orders/:order_id/items/:item_id', ordersCtrl.findItemById);

module.exports = () => router;