import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const Student = () => {
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
        <div className="box">
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
            {" "}
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
          <Box className="d-flex justify-content-center">
            <Button
              variant="contained"
              className="rounded-3"
              color="success"
              type="submit"
              sx={{marginTop : '6%'}}
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
