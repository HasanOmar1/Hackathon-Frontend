import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginContext = createContext();

function LoginProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
<<<<<<< HEAD

    const logIn = async (user) => {
        try {

            const res = await axios.post('https://hackathon-backend-biy0.onrender.com/api/v1/users/login', user)
            console.log(res.data)
            localStorage.setItem('token',res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data));
            setCurrentUser(res.data)
            navigate('/main')
            
        } catch (error) {
            console.log(error.response.data.message)
        }
=======
>>>>>>> e4800c43a25b79b051f963ea4fae74bf3eae4ab5

    }
  };

  const createUser = async (user) => {
    try {
      const res = await axios.post(
        "https://hackathon-backend-biy0.onrender.com/api/v1/users/create",
        user
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      setErrMsg(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logIn,
        createUser,
        errMsg,
        setErrMsg,
}}
    >
      {children}
    </LoginContext.Provider>
  );

export const useLogInContext = ()=> useContext(LoginContext);
export { LoginProvider }
