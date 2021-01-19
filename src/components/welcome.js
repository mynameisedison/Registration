import React from 'react'
import '../App.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Welcome(props) {
  return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={4}
        >
          <Grid item>
            <Box  p="10">
              <Typography id="Typography" component="h3" variant="h4">
                Thanks for choosing Availity!
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button
              onClick={props.handleRegisterClick}
              style={{backgroundColor: "#ff6f00"}}
              variant="contained" color="primary" className={Button}>
                Click here to get started
            </Button>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" style={{color: "#2196f3"}}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
  );
}