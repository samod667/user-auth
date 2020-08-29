import React, {useState} from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom'
import { TextField, Container, Typography, Box, makeStyles, Button } from '@material-ui/core'

function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)

    const createUserWithEmailAndPasswordHandler = (e, email, password) => {
        e.preventDefault()

    }

    const useStyles = makeStyles(() => ({
        textField: {
            color: 'white',
            marginTop: '15px',
            borderColor: 'white'
        },

        button: {
            marginTop: '15px'
        }
    }))

    const classes = useStyles()

    return (
      <div className="App">
        <Container component="main" maxWidth="xs">
          <Typography variant="h4">Sign Up</Typography>
          <form>
            <TextField
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={classes.textField}
              label="Username"
              value={username}
              autoFocus
              id="username"
              fullWidth
              required
              name="username"
              variant="outlined"
            ></TextField>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={classes.textField}
              label="Email"
              value={email}
              type="email"
              id="email"
              fullWidth
              required
              name="email"
              variant="outlined"
            ></TextField>
            <TextField
              className={classes.textField}
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              fullWidth
              type="password"
              required
              name="password"
              variant="outlined"
            ></TextField>
            <TextField
              className={classes.textField}
              label="Confirm Password"
              value={confirmPassword}
              id="confirmPassword"
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              fullWidth
              required
              name="password"
              variant="outlined"
            ></TextField>
            <Button
              className={classes.button}
              onClick={(e) => createUserWithEmailAndPasswordHandler(e, email, password)}
              type="submit"
              color="primary"
              variant="contained"
            >
              Signup!
            </Button>
            <Box mt={2} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
              <Typography variant="overline">
                Have a user?{" "}
                <NavLink exact to="/login" className="Nav_Link">
                  Login
                </NavLink>
              </Typography>
              <Typography variant="overline">
                or go back{" "}
                <NavLink exact to="/" className="Nav_Link">
                  home
                </NavLink>
              </Typography>
            </Box>
          </form>
        </Container>
      </div>
    );
}

export default SignUp
