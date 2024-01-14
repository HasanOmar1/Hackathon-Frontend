import React from 'react'
import '../signup/SignUp.css'
import Paper from '@mui/material/Paper';
 import '../login/LogIn.css'
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

function SignUp() {
    const paperStyle = { padding: 20,height:'70vh',width:280, margin:'20px auto' }
    const avatarStyle = {backgroundColor:'green'}
    const btnStyle = {margin:'8px 0'}
    return (
        <div className='signUp-container'>
            {/* <h1>Log In</h1> */}
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign Up</h2>
                </Grid>
                <section className='inputs'>
                <TextField label='username' placeholder='Enter name' fullWidth required/>
                <TextField label='email' placeholder='Enter Email' fullWidth required/>
                <TextField label='password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button type='submit' color='success' variant='contained' style={btnStyle} fullWidth>Sign in</Button>
                </section>
               <Typography>Already  have an account? <Link href="#" > Sign In</Link>
 
                </Typography>

            </Paper>

        </div>
  )
}

export default SignUp
