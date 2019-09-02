import React, { useState } from 'react';



import { Route, Redirect } from 'react-router-dom';



// components
import Home from "./components/home/Home.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("localStorage: ", localStorage);

  return (
    <>
      <Route
        path="/register"
        render={props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
      />
      <PrivateRoute path="/" component={WebApp} />
    </>
  );
}

// the private route will check to make sure that the user has an authentication token, if they dont it will redirect them to the login page.
const PrivateRoute = ({ component: WebApp, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? <WebApp {...props} /> : <Redirect to="/register" />
    }
  />
);

export default App;
