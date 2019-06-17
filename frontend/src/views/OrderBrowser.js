import React from 'react';
import { Formik, Field } from 'formik';
import {
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  Input,
  Card
} from '@material-ui/core';
export default class OrderBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      orderId: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      orderId: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { fetchOrderById } = this.props;
    if (this.state.orderId !== '') {
      fetchOrderById(this.state.orderId);
    }
    event.preventDefault();
  }

  handleCancel = () => {
    const { clearOrderBrowser } = this.props;
    this.setState({ orderId: '' });
    clearOrderBrowser();
  }

  render() {
    const {
      orderBrowser: {
        selectedOrder
      }
    } = this.props;
    const { items, createdAt } = selectedOrder;
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <h1>My Orders</h1>
        <form onSubmit={this.handleSubmit}>
          <Input value={this.state.orderId} onChange={this.handleChange} placeholder="Write your Order code" style={{
            width: '100%'
          }} />
          <div style={{
            marginTop: "1em",
            textAlign: "right"
          }}>
            <Button type="submit" variant="contained" size="large" color="primary" style={{
              marginLeft: "1em"
            }}>Search</Button>
            <Button onClick={this.handleCancel} variant="outlined" size="large" color="secondary" style={{
              marginLeft: "1em"
            }}>Cancel</Button>
          </div>
        </form>
        <Grid item xs={12} sm={12} md={12}>
          {
            items.map(item =>
              <Paper key={item._id} style={{ padding: '1em', margin: '1em' }}>
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
              </Paper>
            )
          }
        </Grid>
      </Container>
    );
  }
}