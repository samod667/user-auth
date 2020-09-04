import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "../App.css";

function emailWasSent() {
  return (
    <div>
      <Typography variant="body1" style={{ marginTop: "15px" }}>
        An email has been sent to you!
      </Typography>
      <Typography variant="overline">Login now</Typography>
    </div>
  );
}

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const sendResetEmail = (e, email) => {
    e.preventDefault();
    validateEmail(email);
  };

  const useStyle = makeStyles(() => ({
    button: {
      margin: "10px",
    },
  }));
  const classes = useStyle();

  const emailWasSent = () => {
      return (
        <Box display="flex" flexDirection="column">
          <Typography variant="h5">
            Reset link was sent to your email!
          </Typography>
          <Typography variant="overline" style={{marginTop: '15px'}}>
            <NavLink exact to="/login" className="Nav_Link">Login now</NavLink>
          </Typography>
        </Box>
      );
  }

  const validateEmail = (mail) => {
    const emailRegEx = RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegEx.test(String(mail).toLocaleLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmailHasBeenSent(true)
    }
  }

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        {emailHasBeenSent ? (
          emailWasSent()
        ) : (
          <form onSubmit={(e) => sendResetEmail(e, email)}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Reset Password</Typography>
              <TextField
                margin="normal"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                label="Email"
                value={email}
                name="email"
                id="email"
                autoFocus
                error ={emailError ? true : false}
                required
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Send me a reset link
              </Button>
              <Typography variant="overline">or</Typography>
              <Typography variant="overline">
                go back{" "}
                <NavLink exact to="/" className="Nav_Link">
                  home
                </NavLink>
              </Typography>
            </Box>
          </form>
        )}
      </Container>
    </div>
  );
}

export default PasswordReset;


