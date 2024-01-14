import React, { useRef } from 'react'
import '../signup/SignUp.css'
import Paper from '@mui/material/Paper';
import '../login/LogIn.css'
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useLogInContext } from '../context/LoginContext';

function SignUp() {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '8px 0' }

    // const emailRef = useRef();
    // const passRef = useRef();
    // const nameRef = useRef();

    const { currentUser, setCurrentUser, logIn, createUser } = useLogInContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        await createUser(user);
    };
    return (
        <div className='signUp-container'>
            {/* <h1>Log In</h1> */}
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <section className='inputs'>
                        <TextField name='name' label='Name' placeholder='Enter name' fullWidth required />
                        <TextField name='email' label='Email' placeholder='Enter Email' fullWidth required />
                        <TextField name='password' label='Password' placeholder='Enter Password' type='password' fullWidth required />
                        <Button type='submit' color='success' variant='contained' style={btnStyle} fullWidth>Sign up</Button>
                    </section>
                </form>
                <Typography>Already  have an account? <Link href="#" > Sign In</Link>

                </Typography>

            </Paper>

        </div>
    )
}

export default SignUp
