import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useLogInContext } from "../context/LoginContext";
import "./SignUp.css";
import ErrorModal from "../Modals/ErrorMsg";

function SignUp() {
  const errorRef = useRef();
  const { createUser, errMsg } = useLogInContext();

  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 310,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "green" };
  const btnStyle = { margin: "8px 0" };

  useEffect(() => {
    if (errMsg) {
      errorRef?.current?.showModal();
    }
  }, [errMsg]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        };
        await createUser(user);
    };
<<<<<<< HEAD
    return (
        <main className='signUpPage'>
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
                <Typography>Already  have an account? <Link to='/' > Sign In</Link>

                </Typography>

            </Paper>

        </div>
        </main>
    )
=======
    await createUser(user);
  };
  return (
    <main className="signUpPage">
      <div className="signUp-container">
        {/* <h1>Log In</h1> */}
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <form onSubmit={(e) => handleSubmit(e)}>
            <section className="inputs">
              <TextField
                name="name"
                label="Name"
                placeholder="Enter name"
                fullWidth
                required
              />
              <TextField
                name="email"
                label="Email"
                placeholder="Enter Email"
                fullWidth
                required
              />
              <TextField
                name="password"
                label="Password"
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
              />
              <Button
                type="submit"
                color="success"
                variant="contained"
                style={btnStyle}
                fullWidth
              >
                Sign up
              </Button>
            </section>
          </form>
          <Typography>
            Already have an account? <Link to="/"> Sign In</Link>
          </Typography>
        </Paper>
        <ErrorModal ref={errorRef} />
      </div>
    </main>
  );
>>>>>>> e4800c43a25b79b051f963ea4fae74bf3eae4ab5
}

export default SignUp;
