class OrderModel {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  findById(orderId) {
    return this.httpClient.get(`orders/${orderId}`);
  }
  create(params) {
    return this.httpClient.post('orders', params);
  }
};

export default OrderModel;