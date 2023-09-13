import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import Navbar from 'node_modules/components/Navbar';
import Textform from './Textform';
import About from './About';
import React from "react";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title ="JEEVZ" about= "Contact US"/>
      <div className="container">
      <Textform heading="Tell US"/>
      {/* <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
{/* \
          <Route path="/">
            <Home />
          </Route> */}
        {/* </Switch>
        // </Router> */} */}
      </div>
      
      <About/>


    </>
  );
}

export default App;
