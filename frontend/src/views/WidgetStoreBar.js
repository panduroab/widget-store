import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Link
} from '@material-ui/core';
import { Store, ShoppingCart } from '@material-ui/icons'
export default class WidgetStoreBar extends React.Component {
  render() {
    const { cartList } = this.props.cartBrowser;
    const totalItems = cartList.length;
    return (
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
            <Badge badgeContent={totalItems} color="secondary">
              <Link variant="button" color="inherit" href="#/cart">
                <ShoppingCart />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}