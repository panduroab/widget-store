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
  NativeSelect,
  CircularProgress
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
        }}>{widget.stock} Widgets available</div>
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
        category: '',
        color: '',
        size: ''
      },
      isFiltered: false
    };
  }

  componentDidMount() {
    this.props.findWidgets();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const newState = update(this.state, {
      selectedFilter: {
        [name]: { $set: value }
      },
      isFiltered: { $set: true }
    });
    this.setState(newState);
  }

  handleSubmit = (event) => {
    this.props.findWidgets(this.state.selectedFilter);
    event.preventDefault();
  }

  handleResetFilter = () => {
    this.setState({
      selectedFilter: {
        category: '',
        color: '',
        size: ''
      },
      isFiltered: false
    }, () => {
      this.props.findWidgets(this.state.selectedFilter);
    });
  }

  render() {
    const {
      widgetList, filterOptions: { category, size, color }, isLoading
    } = this.props.widgetBrowser;
    const {
      selectedFilter,
      isFiltered
    } = this.state;
    const loading = (isLoading) ? <CircularProgress /> : null;
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
              <option value=""></option>
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
            <Button disabled={!isFiltered} type="submit" color="primary" style={{ marginLeft: '0.5em' }}>
              Search
            </Button>
            <Button disabled={!isFiltered} onClick={this.handleResetFilter}>Reset filter</Button>
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