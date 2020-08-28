import React, {useStyle} from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom'

import { Typogrophy, Form, TextField, Container, Typography, makeStyles, Button } from '@material-ui/core'

function SignUp() {

    const useStyles = makeStyles(() => ({
        textField: {
            color: 'white'
        }
    }))

    const classes = useStyles()

    return (
        <div className="App">
            <Typography variant="h4">Sign Up</Typography>
            <form>
            <TextField className={classes.textField} label="Username" required variant="outlined"></TextField>
            </form>

        </div>
    )
}

export default SignUp
