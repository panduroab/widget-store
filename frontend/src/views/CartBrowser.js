import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Button,
  Link,
  Paper
} from '@material-ui/core';

export default class CartBrowser extends React.Component {
  render() {
    const { removeCartItem, cartBrowser: { cartList } } = this.props;
    const displayItems = (cartList.length > 0) ?
      cartList.map(item =>
        <Paper key={item.cart_id} style={{ padding: '1em', margin: '1em' }}>
          <Typography variant="h5" component="h3">
            {item.name}
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
          <Link style={{
            cursor: 'pointer'
          }}
            onClick={() => { removeCartItem(item) }}>Remove</Link>
        </Paper>
      ) : <div>
        <Typography component="h5">
          Your cart is empty
      </Typography>
        <Link style={{
          cursor: 'pointer'
        }}
          href="#">Continue shopping</Link>
      </div>
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <h1>My Cart</h1>
        <Grid container spacing={4}>
          <Grid item xs={8} sm={8} md={8}>
            {displayItems}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Paper style={{ padding: '1em', marginTop: '1em' }}>
              <h3>You have {cartList.length} items in your Cart</h3>
              <Button size="large" variant="contained" color="secondary">Pay now</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}