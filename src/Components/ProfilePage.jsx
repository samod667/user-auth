import React, { useContext } from 'react'
import { UserContext } from '../Providers/UserProvider'
import { Container, Typography, Box, makeStyles, Button } from '@material-ui/core'
import { auth } from '../firebase';

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

    const user = useContext(UserContext);
    const {email, username} = user;

    const classes = useStyle()

    //WRITE SIGN OUT METHOD
    const signout = async () => {
      try {
        await auth.signOut();
      } catch(error) {
        console.log(error)
        alert("An error occurred")
      }
    }

    return (
        <div className="App">
            <Container className={classes.container}>
                <Typography variant="h5">Welcome back, {username}</Typography>
                <Box className={classes.box} mt={2}>
                    <Typography variant="h5"> Email: {email}</Typography>
                    <Typography variant="h5"> Username: {username}</Typography>
                    <Button type="button" onClick={(e) => signout()}>Sign Out</Button>
                </Box>
            </Container>
        </div>
    )
}

export default ProfilePage 
