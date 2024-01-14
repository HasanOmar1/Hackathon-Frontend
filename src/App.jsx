import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import { LoginProvider } from "./components/context/LoginContext.jsx";
function App() {
  return (
    <>
    <LoginProvider>
      <Routes>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
