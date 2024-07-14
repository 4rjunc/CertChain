import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import University from "./component/University";
import { Typography } from '@mui/material'; 

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
     <Typography 
     variant="h2" 
     component="div" 
     sx={{ textAlign: 'center', mt: 4, pt: 4}}>
    CertChain
  </Typography>
      {!isAuthenticated ? (
        <Home onSubmit={handleLogin} />
      ) : (
        <University />
      )}
    </>
  );
}

export default App;
