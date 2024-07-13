import React from "react";

import TextField from "@mui/material/TextField";
import Login from "./Login"; 

const Home = () => {
  return (
    <>
      <div className="px-1">
        {/* <div className="d-flex flex-column">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div> */}
        <Login />
      </div>
    </>
  );
};

export default Home;
