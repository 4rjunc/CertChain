import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, Link } from "@mui/material";

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
        component="form"
        className="d-flex flex-column gap-4"
        sx={{ width: "50%" }}
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
          />
        </Box>
        <Box>
          <TextField
            id="ownerAC"
            label="Owner account address"
            variant="standard"
            fullWidth
            value={formData.ownerAC}
            onChange={handleChange}
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
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Verify
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={onSwitchToAdmin}>
              Switch to Administrator
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Student;
