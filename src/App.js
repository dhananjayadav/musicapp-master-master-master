// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import InputImage from "./Components/InputImage";
import LinkPut from "./Components/LinkPut";
import Onboarding from "./Components/Onboarding";
import Payment from "./Components/Payment";
import PlayMusic from "./Components/PlayMusic";
import Profile from "./Components/Profile";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import UploadService from "./Components/UploadService";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/LinkPut" element={<LinkPut/>}></Route>
          <Route path="/inputImage" element={<InputImage/>}></Route>
          <Route path="/PlayMusic" element={<PlayMusic/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
