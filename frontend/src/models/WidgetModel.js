class WidgetModel {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  find() {
    return this.httpClient.get('widgets');
  }
};

export default WidgetModel;