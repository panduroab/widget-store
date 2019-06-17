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
      <CardMedia
        style={{
          paddingTop: '56.25%', // 16:9
        }}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent style={{
        flexGrow: 1
      }}>
        <Typography gutterBottom variant="h5" component="h2">
          {widget.name}
        </Typography>
        <Typography>
          <b>{widget.category}</b>
        </Typography>
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
                  <option value="Premium">Premium</option>
                  <option value="Elite">Elite</option>
                </Field>
                <label>Color:</label>
                <Field component={NativeSelect} style={{ marginLeft: '0.3em', marginRight: '0.8em', width: '8em' }} name="color">
                  <option value=""></option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
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