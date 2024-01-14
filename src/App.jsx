import "./App.css";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn.jsx";
import SignUp from "./components/signup/SignUp.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        


      </Routes>
    </>
  );
}

export default App;
