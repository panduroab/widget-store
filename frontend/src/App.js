import React from 'react';
import { Provider, connect } from 'react-redux';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Link
} from '@material-ui/core';
import { Store, ShoppingCart } from '@material-ui/icons'
import { HashRouter as Router, Route } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './redux/reducers';
import logger from './redux/middleware/logger';
import * as actionCreators from './redux/actions';

import WidgetBrowser from './views/WidgetBrowser';
import OrderBrowser from './views/OrderBrowser';
import CartBrowser from './views/CartBrowser';

//connect to actions
const connectedWidgetBrowser = connect(
  //mapStateToProps
  state => ({
    browserWidgets: state.browserWidgets
  }),
  //mapDispatchToProps
  actionCreators
)(WidgetBrowser);


const store = configureStore({
  reducer: rootReducer,
  //immutableStateInvariant, thunk, serializableStateInvariant
  middleware: [...getDefaultMiddleware(), logger]
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <Store />
              <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
                <Link variant="button" color="inherit" href="#">
                  Widget Store
              </Link>
              </Typography>
              <nav>
                <Link variant="button" color="inherit" href="#/orders">
                  My Orders
              </Link>
              </nav>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Link variant="button" color="inherit" href="#/cart">
                    <ShoppingCart />
                  </Link>
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={connectedWidgetBrowser} />
          <Route path="/orders/" component={OrderBrowser} />
          <Route path="/cart/" component={CartBrowser} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
