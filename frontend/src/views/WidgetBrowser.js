import React from 'react';
import { Formik, Field } from 'formik';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
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
  }

  findByFilter = (filter) => {
    console.log("doing search with:", filter);
  }

  componentDidMount() {
    this.props.findWidgets();
  }

  render() {
    const { widgetList } = this.props.widgetBrowser;
    const colors = [
      'Red',
      'Green',
      'Blue',
      'White',
      'Silver',
      'Gray',
      'Black',
      'Maroon',
      'Yellow',
      'Olive',
      'Lime',
      'Aqua',
      'Teal',
      'Navy',
      'Fuchsia',
      'Purple'
    ];
    const categories = ['Prime', 'Elite', 'Extreme Edition'];
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
          <Formik
            initialValues={{
              category: "All",
              color: '',
              size: ''
            }}
            onSubmit={(values, action) => {
              action.setSubmitting(false);
              this.findByFilter(values);
            }}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <label>Category:</label>
                <Field component={NativeSelect} style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }} name="category">
                  <option value="All">All</option>
                  {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                </Field>
                <label>Color:</label>
                <Field component={NativeSelect} style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }} name="color">
                  <option value=""></option>
                  {
                    colors.map((color, index) => <option key={index} value={color}>{color}</option>)
                  }
                </Field>
                <label>Size:</label>
                <Field component={NativeSelect} style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }} name="size">
                  <option value=""></option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Big">Big</option>
                </Field>
                <Button type="submit" color="primary" style={{ marginLeft: '0.5em' }}>
                  Search
                </Button>
              </form>
            )}
          />

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