import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FAQs from './pages/FAQs';
import React, {useEffect, useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import jwt_decode from "jwt-decode"

function App() {
  // setting user state and creating a user object
  const [ user, setUser] = useState({});
  function handleCredentialResponse(response){
    console.log("Encoded JWT ID token: "+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("nav--signin").hidden = true;
    document.getElementById("nav--signout").hidden = false;
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: '687299978192-mhvc428qid0lescjhsth7vjfcradl50h.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("nav--signin"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with"
      }
    );
// another way of prompting to login
google.accounts.id.prompt();
  },[])

// If we have no user, show sign in button

// If we have a user, show log out button
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
      {
        // showing sign out if user signed in
        Object.keys(user).length !=0 &&
        // <button onClick={(e)=> handleSignOut(e)}>Sign Out</button>
        document.getElementById("nav--signout").addEventListener('click',function handleSignOut(event){
          setUser({});
          document.getElementById("nav--signin").hidden = false;
          document.getElementById("nav--signout").hidden = true;
        })
      }

      {
        user&&
        <div>
          <img src={user.picture}/>
          <h2>{user.name}</h2>
        </div>
      }
      <Footer />
    </div>
  );
}

export default App;
