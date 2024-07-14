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

{/*const handleSaveAsPDF = () => {
  if (certRef.current) {
    html2canvas(certRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgWidth = 794;
      const imgHeight = 1123;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('certificate.pdf');
    });
  }
};*/}

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

      {/*{imgData && (
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
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSaveAsPDF}
          >
            Save as PDF
          </Button>
        </Box>
      )}*/}
      <Box
        sx={{
          backgroundColor: '#ffff2wf',
          margin: '25%',
          marginTop: '-6%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.5)',
          borderRadius: '10px 10px 10px 10px',
          marginBottom: '20%' ,
          position: 'relative',
          height: '100vh',
          width: '50%'
        }}
      >
        <Box
          ref={certRef}
          sx={{
            display: isSubmitted ? "block" : "none", // Show if the form has been submitted
            width: "595px",
            height: "842px",
            backgroundColor: "white",
            padding: "2% 2% 2% 2%",
            border: "0px solid #000",
            //borderRadius: "10px",
          }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontSize: '2rem', 
              background: '#A7E6FF', 
              padding: '1%', 
              width: '100%', 
              marginTop: '5%' 
            }}
          >
            CERTIFICATE OF COMPLETION
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem', 
              fontStyle: 'italic', 
              marginTop: '6%'
            }}
          >
            This is to certify that
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            <Box
              sx={{
                border: '0px solid',
                background: '#FFF9D0',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2%',
                paddingLeft: '1%',
                paddingRight: '1%',
                //borderRadius: '12%'
              }}
            >
              <Typography 
                variant="h4" 
                align="center" 
                sx={{ 
                  fontWeight: "bold", 
                  fontSize: '3rem', 
                  fontStyle: 'arial', 
                  marginTop: '5.5%', 
                  marginBottom: '5.5%' 
                }}
              >
                {formData.name}
              </Typography>
            </Box>
          </Box>  
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem',
              fontStyle: 'italic' 
            }}
          >
            has successfully completed the programme
          </Typography>
          {/*<Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                border: '0px solid',
                background: '#FFF9D0',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2%',
                paddingLeft: '1%',
                paddingRight: '1%',
                borderRadius: '12%'
              }}
            >*/}
              <Typography 
                variant="h4" 
                align="center" 
                sx={{ 
                  fontWeight: "bold", 
                  fontSize: '2rem',
                  marginTop: '3.5%', 
                  marginBottom: '3.5%'  
                }}
              >
                {formData.pgm}
              </Typography>
            {/*</Box> 
          </Box>*/}   
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem' 
            }}
          >
            at
          </Typography>
          {/*<Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                border: '0px solid',
                background: '#FFF9D0',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2%',
                paddingLeft: '1%',
                paddingRight: '1%',
                borderRadius: '12%'
              }}
            >*/}
              <Typography 
                variant="h4" 
                align="center" 
                sx={{ 
                  fontWeight: "bold", 
                  fontSize: '2rem',
                  marginTop: '3.5%', 
                  marginBottom: '7%'  
                }}
              >
                {formData.college}
              </Typography>
            {/*</Box>
          </Box>*/}    
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem',
            }}
          >
            <Box component="span" sx={{ fontStyle: 'italic' }}>Registration Number :</Box> <Box component="span" sx={{ fontWeight: 'bold' }}>{formData.reg}</Box>
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem',
            }}
          >
            <Box component="span" sx={{ fontStyle: 'italic' }}>Date of Birth :</Box> <Box component="span" sx={{ fontWeight: 'bold' }}>{formData.dob}</Box>
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              fontSize: '1.5rem',
            }}
          >
            <Box component="span" sx={{ fontStyle: 'italic' }}>Student Wallet Address:</Box> <Box component="span" sx={{ fontWeight: 'bold' }}>{formData.wallet}</Box>
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Typography 
              variant="body1" 
              align="center" 
              sx={{ 
                fontSize: '1.5rem',
                marginTop: '8%',
                marginBottom: '1.5%',
                fontStyle: 'italic'
              }}
            >
              Issued by
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  border: '0px solid',
                  background: '#FFF9D0',
                  display:'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '2%',
                  paddingLeft: '1%',
                  paddingRight: '1%',
                  //borderRadius: '12%'
                }}
              >
              <Typography 
                variant="h6" 
                align="center" 
                sx={{ 
                  fontWeight: "bold", 
                  fontSize: '2.4rem' 
                }}
              >
                Kannur University
              </Typography>
            </Box> 
          </Box>   
          </Box>
        </Box>
      </Box>  
    </>
  );
};

export default University;
