import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import QRCodeGenerator from "./Qr"; // Import QRCodeGenerator if needed for reference

const University = ({ onSubmit }) => { // Accept onSubmit as a prop
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    reg: "",
    college: "",
    pgm: "",
    wallet: "",
  });

  const [imgData, setImgData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // State for tracking submission
  const certRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setIsSubmitted(true); // Set to true on form submission

    if (certRef.current) {
      try {
        const canvas = await html2canvas(certRef.current, { useCORS: true, scale: 2 });
        const img = canvas.toDataURL("image/png");
        console.log("Image captured and converted to data URL: ", img);
        setImgData(img);
        onSubmit(); // Call onSubmit prop to update state in App component
      } catch (error) {
        console.error("Error capturing the form:", error);
      }
    }
  };

  const handleDownload = () => {
    if (imgData) {
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificate.png";
      link.click();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
                id="name"
                label="Name"
                variant="standard"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
              <TextField
                id="dob"
                label="Date Of Birth"
                type="date"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formData.dob}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
            </Box>
            <Box className="d-flex gap-5">
              <TextField
                id="reg"
                label="Register Number"
                variant="standard"
                fullWidth
                value={formData.reg}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
              <TextField
                id="college"
                label="College Name"
                variant="standard"
                fullWidth
                value={formData.college}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
            </Box>
            <Box className="d-flex gap-5">
              <TextField
                id="pgm"
                label="Programme"
                variant="standard"
                fullWidth
                value={formData.pgm}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
              <TextField
                id="wallet"
                label="Student Wallet Address"
                variant="standard"
                fullWidth
                value={formData.wallet}
                onChange={handleChange}
                sx={{ marginBottom: '16px' }}
              />
            </Box>
            <Box className="d-flex justify-content-center">
              <Button
                variant="contained"
                className="rounded-3"
                color="success"
                type="submit"
                sx={{ marginTop: '6%' }}
              >
                🏅 Issue Certificate
              </Button>
            </Box>
          </div>  
        </Box>
      </Box>

      {imgData && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={imgData}
            alt="Generated Certificate"
            style={{ marginBottom: "20px", maxWidth: "90%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
          >
            Download Certificate
          </Button>
        </Box>
      )}

      <Box
        ref={certRef}
        sx={{
          display: isSubmitted ? "block" : "none", // Show if the form has been submitted
          position: "absolute",
          top: 0,
          left: 0,
          width: "800px",
          height: "600px",
          backgroundColor: "#fff",
          padding: "20px",
          border: "2px solid #000",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Certificate of Completion
        </Typography>
        <Typography variant="h5" align="center">
          This is to certify that
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          {formData.name}
        </Typography>
        <Typography variant="h5" align="center">
          has successfully completed the program
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          {formData.pgm}
        </Typography>
        <Typography variant="h5" align="center">
          at
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          {formData.college}
        </Typography>
        <Typography variant="h6" align="center">
          Registration Number: {formData.reg}
        </Typography>
        <Typography variant="h6" align="center">
          Date of Birth: {formData.dob}
        </Typography>
        <Typography variant="h6" align="center">
          Student Wallet Address: {formData.wallet}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="body1" align="center">
            Issued by
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
            [University Name]
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default University;
