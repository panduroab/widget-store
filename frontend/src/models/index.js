import axios from 'axios';
import WidgetModel from './WidgetModel';
import OrderModel from './OrderModel';

const httpClient = axios.create({
  baseURL: `/api/`,
  headers: {
    'content-type': 'application/json'
  }
});

const Widget = new WidgetModel(httpClient);
const Order = new OrderModel(httpClient);

export {
  Widget,
  Order
};