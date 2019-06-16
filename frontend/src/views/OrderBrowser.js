import React from 'react';
import { Formik, Field } from 'formik';
import {
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  Input
} from '@material-ui/core';
export default class OrderBrowser extends React.Component {
  render() {
    return (
      <Container style={{
        paddingTop: '5px',
        paddingBottom: '5px'
      }} maxWidth="md">
        <h1>My Orders</h1>
        <Input placeholder="Write your Order code" style={{
          width: '100%'
        }} />
        <div style={{
          marginTop: "1em",
          textAlign: "right"
        }}>
          <Button variant="contained" size="large" color="primary" style={{
            marginLeft: "1em"
          }}>Search</Button>
          <Button variant="outlined" size="large" color="secondary" style={{
            marginLeft: "1em"
          }}>Cancel</Button>
        </div>
        <Grid item xs={12} sm={12} md={12}>
          <Paper style={{ padding: '1em', margin: '1em' }}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
              </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>
          <Paper style={{ padding: '1em', margin: '1em' }}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
              </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>
          <Paper style={{ padding: '1em', margin: '1em' }}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
              </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>
          <Paper style={{ padding: '1em', margin: '1em' }}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
              </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>
        </Grid>
      </Container>
    );
  }
}