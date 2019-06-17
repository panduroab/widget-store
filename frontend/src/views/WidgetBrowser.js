import React from 'react';
import update from 'immutability-helper';
//import { Formik, Field } from 'formik';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  NativeSelect
} from '@material-ui/core';

const WidgetView = ({
  widget,
  addItemToCart
}) => {
  return (<Grid item xs={12} sm={6} md={4}>
    <Card style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Card
        style={{
          paddingTop: '56.25%',
          backgroundColor: widget.color
        }}
      />
      <CardContent style={{
        flexGrow: 1
      }}>
        <Typography gutterBottom variant="h5" component="h2">
          {widget.name}
        </Typography>
        <div><b>Category: </b>{widget.category}</div>
        <div><b>Size: </b>{widget.size}</div>
        <div><b>Color: </b>{widget.color}</div>
        <div style={{
          textAlign: 'right'
        }}>{widget.inventory} Widgets available</div>
      </CardContent>
      <CardActions>
        <Button onClick={() => { addItemToCart(widget) }} size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  </Grid>);
};

export default class WidgetBrowser extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedFilter: {
        category: 'All',
        color: '',
        size: ''
      },
    };
  }

  findByFilter = (filter) => {
    console.log("doing search with:", filter);
  }

  componentDidMount() {
    this.props.findWidgets();
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    const newState = update(this.state, {
      selectedFilter: {
        [name]: { $set: value }
      }
    });
    this.setState(newState);
  }

  handleSubmit = (event) => {
    console.log(this.state.selectedFilter);
    event.preventDefault();
  }

  render() {
    const {
      widgetList, filterOptions: { category, size, color }
    } = this.props.widgetBrowser;
    const {
      selectedFilter
    } = this.state;
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <h1>Store</h1>
        <Container style={{
          paddingTop: '5px',
          paddingBottom: '5px',
        }}>
          <form onSubmit={this.handleSubmit}>
            <label>Category:</label>
            <NativeSelect
            onChange={this.handleChange}
              value={selectedFilter.category}
              name="category"
              style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }}
            >
              {category.map((val, i) => <option key={i} value={val}>{val}</option>)}
            </NativeSelect>
            <label>Color:</label>
            <NativeSelect
            onChange={this.handleChange}
              value={selectedFilter.color}
              name="color"
              style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }}
            >
              <option value=""></option>
              {
                color.map((val, i) => <option key={i} value={val}>{val}</option>)
              }
            </NativeSelect>
            <label>Size:</label>
            <NativeSelect
            onChange={this.handleChange}
              value={selectedFilter.size}
              name="size" style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }}
            >
              <option value=""></option>
              {
                size.map((val, i) => <option key={i} value={val}>{val}</option>)
              }
            </NativeSelect>
            <Button type="submit" color="primary" style={{ marginLeft: '0.5em' }}>
              Search
            </Button>
          </form>
        </Container>
        <Grid container spacing={4}>
          {widgetList.map(widget => (
            <WidgetView
              key={widget._id}
              widget={widget}
              addItemToCart={this.props.addItemToCart}
            />
          ))}
        </Grid>
      </Container>
    );
  }
}