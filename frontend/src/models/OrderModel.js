class OrderModel {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  find() {
    return this.httpClient.get('orders');
  }
  create(params) {
    return this.httpClient.post('orders', params);
  }
};

export default OrderModel;