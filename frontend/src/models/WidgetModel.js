class WidgetModel {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  find(params) {
    return this.httpClient.get('widgets', { params });
  }
};

export default WidgetModel;