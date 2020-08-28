import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { Container, Typography, makeStyles } from '@material-ui/core'



function Welcome() {

    const useStyles = makeStyles(() => ({
        text: {
            marginTop: '15px',
        },

        linkActive: {
            color: 'white'
        }
    }))

    const classes = useStyles();
   
    return (
      <div className="App">
        <Container>
          <Typography variant="h4">Hello, Guest!</Typography>
          <Typography className={classes.text}>
            New User? Sign up
            <NavLink
              className="Nav_Link"
              exact
              to="/signUp"
              activeStyle={{ color: "white" }}
            >
              here
            </NavLink>
            .
          </Typography>
          <Typography className={classes.text}>
            Already a user? <NavLink className="Nav_Link" exact to="/login"> Login</NavLink>
          </Typography>
        </Container>
      </div>
    );
}

export default Welcome
