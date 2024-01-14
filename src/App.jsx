import "./App.css";
import { Routes, Route } from "react-router-dom";



import LogIn from "./components/login/LogIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import { LoginProvider } from "./components/context/LoginContext.jsx";
import Sidebar from "./components/sidebar/Sidebar";
function App() {

  return (
    <>
    <LoginProvider>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/sidebar" element={<Sidebar/>}></Route>


    
    

      <Chatbox/>
  

      </Routes>
      </LoginProvider>

    </>
  );
}

export default App;
