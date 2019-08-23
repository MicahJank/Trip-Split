import React, { useState } from "react";
import logo from "./logo.svg";

import { Route } from "react-router-dom";

import "./App.css";

// components
import Home from "./Components/home/Home.js";

function App() {
  // currentUser is set in the LogInForm.js
  const [currentUser, setCurrentUser] = useState("");
  console.log("currentUser: ", currentUser);
  console.log("localStorage: ", localStorage);
  return (
    <>
      <Route
        path="/"
        render={props => <Home {...props} setCurrentUser={setCurrentUser} />}
      />
      {/* <Route path='/trips' component={} />
    <Route path='/people' component={} />
    <Route path='/transactions' component={} />
    <Route path='trip-form' component={} /> */}
      /{" "}
    </>
  );
}

export default App;
