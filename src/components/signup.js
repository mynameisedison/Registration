import React from 'react';
import '../App.css'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SignUp(props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      <Box mb={4}>
        <Typography id="Typography" component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={e=>props.handleName(e)}
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Full Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={e=>props.handleEmail(e)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={e=>props.handleEmailConfirm(e)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Confirm Email Address"
              name="email"
              autoComplete="email"
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={e=>props.handleNpi(e)}
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="npiNumber"
              label="NPI Number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                onChange={e=>props.handleAddress(e)}
                variant="outlined"
                required
                fullWidth
                id="businessAddress"
                label="Business Address"
                name="address"
                autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                onChange={e=>props.handlePhone(e)}
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
              />
              </Grid>
          </Grid>
          <Grid container justify="center">
            <Box mt={4}>
              <Button
                style={{backgroundColor: "#ff6f00"}}
                onClick={props.handleNext}
                type="submit"
                variant="contained"
                color="primary">
                Next
              </Button>
            </Box>
          </Grid>
        </form>
      </div>
    </Container>
  );
}