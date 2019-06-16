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
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <h1>My Cart</h1>
        <Grid container spacing={4}>
          <Grid item xs={8} sm={8} md={8}>
            <Paper style={{ padding: '1em', margin: '1em' }}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
              <Link>Delete</Link>
            </Paper>
            <Paper style={{ padding: '1em', margin: '1em' }}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
              <Link>Delete</Link>
            </Paper>
            <Paper style={{ padding: '1em', margin: '1em' }}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
              <Link>Delete</Link>
            </Paper>
            <Paper style={{ padding: '1em', margin: '1em' }}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
              <Link>Delete</Link>
            </Paper>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <Paper style={{ padding: '1em', marginTop: '1em' }}>
              <h3>4 items in your Cart</h3>
              <Button size="large" variant="contained" color="secondary">Pay now</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}