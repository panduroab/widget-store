import React from 'react';
import { Formik, Field } from 'formik';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Badge,
  Link,
  NativeSelect
} from '@material-ui/core';
import { Store, ShoppingCart } from '@material-ui/icons'
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Widget } from '../src/models';

class WidgetBrowser extends React.Component {
  constructor() {
    super();
    this.state = {
      widgets: []
    };
  }

  findByFilter = (filter) => {
    console.log("doing search with:", filter);
  }

  componentDidMount() {
    Widget.find()
      .then(res => this.setState({ widgets: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { widgets } = this.state;
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
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
          {widgets.map(widget => (
            <Grid item key={widget._id} xs={12} sm={6} md={4}>
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
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

class OrderBrowser extends React.Component {
  render() {
    return (
      <div>
        <h1>Order browser</h1>
      </div>
    );
  }
}

function App() {
  return (
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
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={WidgetBrowser} />
        <Route path="/orders/" component={OrderBrowser} />
      </div>
    </Router>
  );
}

export default App;
