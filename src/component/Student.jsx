import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, Typography, Link } from "@mui/material";

const Student = ({ onSwitchToAdmin }) => {
  const [formData, setFormData] = useState({
    tokenid: "",
    issuerAC: "",
    ownerAC: "",
    IPFS: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your form submission logic here
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height to center vertically
      }}
    >
      <Box
        sx={{ width: "150%", display: "flex", justifyContent: "center" }}
      >
        <div className="box">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{ width: "100%" }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Box className="d-flex gap-5">
                  <TextField
                    id="tokenid"
                    label="Token ID"
                    variant="standard"
                    fullWidth
                    value={formData.tokenid}
                    onChange={handleChange}
                    sx={{ marginBottom: '16px' }}
                  />
                </Box>
                <Box className="d-flex gap-5">
                  <TextField
                    id="issuerAC"
                    label="Issuer account address"
                    variant="standard"
                    fullWidth
                    value={formData.issuerAC}
                    onChange={handleChange}
                    sx={{ marginBottom: '16px' }}
                  />
                </Box>
                <Box>
                  {" "}
                  <TextField
                    id="ownerAC"
                    label="Owner account address"
                    variant="standard"
                    fullWidth
                    value={formData.ownerAC}
                    onChange={handleChange}
                    sx={{ marginBottom: '16px' }}
                  />
                </Box>
                <Box className="d-flex gap-5">
                  <TextField
                    id="IPFS"
                    label="IPFS Hash"
                    variant="standard"
                    fullWidth
                    value={formData.IPFS}
                    onChange={handleChange}
                    sx={{ marginBottom: '16px' }}
                  />
                </Box>
                
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  //marginTop: "45%",
                  height: "50%",
                  width: "100%",
                  //borderLeft: "1px solid #000", // Optional: add a divider line
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5);",
                  padding: "5%",
                  margin: "40%",
                }}
              >   
                <Typography 
                  variant="h6" gutterBottom
                  sx={{
                    //color: 'primary.main', // Change to your desired color
                    fontWeight: 'bold', // Make it bold
                    margin: '10px 0', // Add vertical margins
                    //fontSize: '16px', // Customize font size
                  }}
                >
                  OR
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    color: 'primary.main', // Change to your desired color
                    fontWeight: 'bold', // Make it bold
                    margin: '10px 0', // Add vertical margins
                    fontSize: '16px', // Customize font size
                  }}
                >
                  Upload the QR code
                </Typography>
                <Box className="d-flex justify-content-center">
                  <Button
                    variant="contained"
                    className="rounded-3"
                    color="success"
                    type="submit"
                    sx={{marginTop: '20%', marginBottom: '20%'}}
                  >
                    Upload
                  </Button>
                </Box>  
              </Box>
            </Grid>
          </Grid>
          <Box className="d-flex justify-content-center">
                  <Button
                    variant="contained"
                    className="rounded-3"
                    color="success"
                    type="submit"
                    sx={{marginTop: '6%', width: '250%' }}
                  >
                    ✅ Verify
                  </Button>
                </Box>
        </div>   
      </Box> 
    </Box>      
  );
};

export default Student;
