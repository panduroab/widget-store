import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  CssBaseline,
} from '@material-ui/core';
import { HashRouter as Router, Route } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './redux/reducers';
import logger from './redux/middleware/logger';
import * as actionCreators from './redux/actions';
import throttle from 'lodash/throttle';
import { saveState } from './lib/localStorageHandler';

import WidgetStoreBar from './views/WidgetStoreBar';
import WidgetBrowser from './views/WidgetBrowser';
import OrderBrowser from './views/OrderBrowser';
import CartBrowser from './views/CartBrowser';

const ConnectedWidgetStoreBar = connect(
  state => ({
    cartBrowser: state.cartBrowser
  })
)(WidgetStoreBar);
const connectedWidgetBrowser = connect(
  state => ({
    widgetBrowser: state.widgetBrowser
  }),
  actionCreators
)(WidgetBrowser);
const connectedCartBrowser = connect(
  state => ({
    cartBrowser: state.cartBrowser
  }),
  actionCreators
)(CartBrowser);
const connectedOrderBrowser = connect(
  state => ({
    orderBrowser: state.orderBrowser
  }),
  actionCreators
)(OrderBrowser);

export const store = configureStore({
  reducer: rootReducer,
  //immutableStateInvariant, thunk, serializableStateInvariant
  middleware: [...getDefaultMiddleware(), logger]
});

store.subscribe(throttle(() => {
  saveState({
    cartBrowser: store.getState().cartBrowser
  });
}, 1000));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <CssBaseline />
          <ConnectedWidgetStoreBar />
          <Route exact path="/" component={connectedWidgetBrowser} />
          <Route path="/orders/" component={connectedOrderBrowser} />
          <Route path="/cart/" component={connectedCartBrowser} />
        </div>
      </Router>
    </Provider>
  );

}

export default App;
