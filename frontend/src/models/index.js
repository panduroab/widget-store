import axios from 'axios';
import WidgetModel from './WidgetModel';
import OrderModel from './OrderModel';

/*axios.interceptors.response.use(res => res, error => {
  console.log("Intercepted error on RESPONSE:", error);
  return Promise.reject(error);
});*/

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api/',
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