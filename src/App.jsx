import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import University from "./component/University";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Replace this with actual authentication logic
    if (email && password) {
      setIsAuthenticated(true);
    } else {

    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <Home onSubmit={handleLogin} />
      ) : (
        <University />
      )}
    </>
  );
}

export default App;
