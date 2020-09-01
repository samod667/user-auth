import React, {useState} from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom'
import { TextField, Container, Typography, Box, makeStyles, Button } from '@material-ui/core'

function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userError, setUserError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [confirmPasswordError, setConfirmPasswordError] = useState(null)
    const [wasValidated, setWasValidated] = useState(false)

    const createUserWithEmailAndPasswordHandler = (e, email, password) => {
        e.preventDefault()
        // validation(username, email, password, confirmPassword)

        wasValidated ? console.log("confirmed") : console.log("error")

    }

    //CREATE VALIDATION FUNCTION
    const validation = (username, email, password, confirmPassword) => {

      const userRegEx = RegExp(/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
      const emailRegEx = RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      const passwordRegEx = RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/
      );

        if(!userRegEx.test(username)) {
          setUserError(true)
        } else {
          setUserError(false)
          setWasValidated(false)
        }

        if(!emailRegEx.test(String(email).toLocaleLowerCase())) {
          setEmailError(true)
        } else {
          setEmailError(false)
          setWasValidated(false);
        }

        if(!passwordRegEx.test(password)) {
          setPasswordError(true)
        } else {
          setPasswordError(false)
          setWasValidated(false);
        }

        if(!passwordRegEx.test(password) || confirmPassword !== password) {
          setConfirmPasswordError(true)
        } else {
          setConfirmPasswordError(false)
          setWasValidated(false);
        }
    if(userError === false && emailError === false && passwordError === false && confirmPasswordError === false) {
      setWasValidated(true) 
    }
   
    }

    const useStyles = makeStyles(() => ({
        textField: {
            marginTop: '15px',
        },

        button: {
            marginTop: '15px'
        },

        errorMsg: {
          color: 'red',
          alignSelf: 'flex-start',
          margin: '-3px',
          fontSize: '10px'
        }
    }))

    const classes = useStyles()

    return (
      <div className="App">
        <Container component="main" maxWidth="xs">
          <Typography variant="h4">Sign Up</Typography>
          <form
            onSubmit={(e) =>
              createUserWithEmailAndPasswordHandler(e, email, password)
            }
          >
            <TextField
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={classes.textField}
              label="Username"
              error={userError ? true : false}
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
              error={emailError ? true : false}
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
              error={passwordError ? true : false}
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
              error={confirmPasswordError ? true : false}
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
              type="submit"
              onClick={() => validation(username, email, password, confirmPassword)}
              color="primary"
              variant="contained"
            >
              Signup!
            </Button>
            <Box
              mt={2}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
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
        <Box display="flex" flexDirection="column" mt={2}>
          {userError ? (
            <Typography className={classes.errorMsg} variant="overline">
              * Username must be 5-20 characters long, with no special
              characters{" "}
            </Typography>
          ) : null}
          {emailError ? (
            <Typography className={classes.errorMsg} variant="overline">
              * Please enter a valid email address{" "}
            </Typography>
          ) : null}
          {passwordError ? (
            <Typography className={classes.errorMsg} variant="overline">
              * Password must contain at least 5 characters, one uppercase, one
              lowercase, one number, and one special character{" "}
            </Typography>
          ) : null}
          {confirmPasswordError ? (
            <Typography className={classes.errorMsg} variant="overline">
              * Passwords do not match{" "}
            </Typography>
          ) : null}
        </Box>
      </div>
    );
}

export default SignUp
