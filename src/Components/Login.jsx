import React, {useState} from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import {
  TextField,
  Container,
  Typography,
  Box,
  makeStyles,
  Button,
} from "@material-ui/core";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const signInWithEmailAndPasswordHandler = (e, email, password) => {
      e.preventDefault()
  }

  const useStyles = makeStyles(() => ({
    textField: {
      color: "white",
      marginTop: "15px",
      borderColor: "white",
    },

    button: {
      marginTop: "15px",
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <Typography variant="h4">Login</Typography>
        <form>
          <TextField
            className={classes.textField}
            label="Email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            name="email"
            variant="outlined"
          ></TextField>
          <TextField
            className={classes.textField}
            label="Password"
            value={password}
            id="confirmPassword"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            type="password"
            required
            name="password"
            variant="outlined"
          ></TextField>
          <Button
            onClick={(e) =>
              signInWithEmailAndPasswordHandler(e, email, password)
            }
            className={classes.button}
            type="submit"
            color="primary"
            variant="contained"
          >
            Login!
          </Button>
          <Box m={2} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
           
                <Typography variant="overline">
                  <NavLink exact to="/password-reset" className="Nav_Link">
                    Forgot password?
                  </NavLink>
                </Typography>
           
                <Typography variant="overline">
                  {" "}
                  <NavLink exact to="/signup" className="Nav_Link">
                    {"No account? Sign Up"}
                  </NavLink>
                </Typography>
            
          </Box>
          <Typography variant="overline">
            {"or go back "}
            <NavLink exact to="/" className="Nav_Link">
              {"home"}
            </NavLink>
          </Typography>
        </form>
      </Container>
    </div>
  );
}

export default Login;
