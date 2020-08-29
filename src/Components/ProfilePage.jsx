import React from 'react'
import { Container, Typography, Box, makeStyles, Button } from '@material-ui/core'

function ProfilePage() {
    const useStyle = makeStyles(() => ({
      box: {
        display: "flex",
        flexDirection: "column",
      },

      container: {
        width: "400px",
        height: "250px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "#e8e8e8",
      },
    }));

    const classes = useStyle()

    const signout = () => {

    }

    return (
        <div className="App">
            <Container className={classes.container}>
                <Typography variant="h5">Welcome back, username</Typography>
                <Box className={classes.box} mt={2}>
                    <Typography variant="p"> Email: sample@gmail.com</Typography>
                    <Typography variant="p"> Username: username</Typography>
                    <Button type="button" onClick={(e) => signout()}>Sign Out</Button>
                </Box>
            </Container>
        </div>
    )
}

export default ProfilePage 
