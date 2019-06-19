import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Button,
  Link,
  Paper,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem
} from '@material-ui/core';

const OrderDialog = ({
  title,
  subTitle,
  content,
  open,
  handleCancel,
  handleAgree
}) => {
  return (<Dialog
    open={open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {subTitle}
      </DialogContentText>
      <div>
        {content}
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => { handleCancel() }} color="primary">
        Close
      </Button>
      <Button onClick={() => { handleAgree() }} color="primary" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>)
};

export default class CartBrowser extends React.Component {
  render() {
    const {
      removeCartItem,
      payOrder,
      checkoutOrder,
      cancelOrder,
      closeOrderDetails,
      cartBrowser: {
        cartList,
        showCheckout,
        showOrderDetails,
        completedOrder,
        error
      }
    } = this.props;
    const displayItems = (cartList.length > 0) ?
      cartList.map(item =>
        <Paper key={item.cart_id} style={{ padding: '1em', margin: '1em' }}>
          <Card style={{
            paddingTop: '10%',
            backgroundColor: item.color
          }} />
          <Typography variant="h5" component="h3">
            {item.name}
          </Typography>
          <div><b>Category: </b>{item.category}</div>
          <div><b>Size: </b>{item.size}</div>
          <div><b>Color: </b>{item.color}</div>
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
    const checkoutContent = (cartList) ?
      <List>
        {
          cartList.map((item, i) => <ListItem key={i}>{item.name}, {item.category} {item.color} {item.size}</ListItem>)
        }
      </List> : null;
    const completedOrderContent = (completedOrder) ?
      <div><h3>Order ID: {completedOrder._id}</h3></div>
      : null;
    const subTitle = (error !== null) ?
    `${error}. It was not possible to complete your order, please try again.`:
    "Your order has been completed successfully! Please save your Order ID."
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <OrderDialog
          open={showCheckout}
          title="Order details"
          subTitle="Please confirm your purchase."
          content={checkoutContent}
          handleAgree={payOrder}
          handleCancel={cancelOrder} />
        <OrderDialog
          open={showOrderDetails}
          title="Order details"
          subTitle={subTitle}
          content={completedOrderContent}
          handleAgree={closeOrderDetails}
          handleCancel={closeOrderDetails} />
        <h1>My Cart</h1>
        <Grid container spacing={4}>
          <Grid item xs={8} sm={8} md={8}>
            {displayItems}
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Paper style={{ padding: '1em', marginTop: '1em' }}>
              <h3>You have {cartList.length} items in your Cart</h3>
              <Button
                disabled={cartList.length === 0}
                onClick={() => { checkoutOrder() }}
                size="large"
                variant="contained"
                color="secondary"
              >
                Pay now
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}