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
  function hello() {
    
  }
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
              value={props.state.fullName}
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
              value={props.state.email}
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
              value={props.state.emailConfirm}
              onChange={e=>props.handleEmailConfirm(e)}
              helperText={!props.state.emailsMatch ? "Emails don't match!" : ""}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Confirm Email Address"
              name="email"
              autoComplete="email"
              type="email"
              error={!props.state.emailsMatch}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={props.state.npiNumber}
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
                value={props.state.businessAddress}
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
                value={props.state.phone}
                onChange={e=>props.handlePhone(e)}
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                inputProps={{maxLength: 10}}
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