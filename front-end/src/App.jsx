import './App.css'
import SignUp from "./components/UserSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./components/UserSignIn";
import ConfirmMail from "./components/ConfirmMail";
import Home from './components/Home';
import Signuph from './components/signuph';
import Signupo from './components/signupo';
import UserSignIn from './components/UserSignIn';
import HostSignIn from './components/HostSignIn';
import SignInh from './components/SignInh';
import Meet from './components/Meet';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route exact path="/signinh" element={<SignInh/>}/>
        <Route exact path="/signupu" element={<SignUp />} />
        <Route exact path="/signupo" element={<Signupo />} />
        <Route exact path="/signuph" element={<Signuph />} />
        <Route exact path="/signinUser" element={<UserSignIn/>} />
        <Route exact path="/signinHost" element={<HostSignIn/>} />
        
        <Route path="/meet/:meetId" element={<Meet />} />
        <Route path="/verify" element={<ConfirmMail />} />
        {/* <Route path="/signup" element={< />} /> */}
      </Routes>
  </BrowserRouter>
  )
}

export default App
