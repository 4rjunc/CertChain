import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const University = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    marks: "",
    attendance: "",
    course: "",
    wallet: "",
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
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="dob"
            label="Date Of Birth"
            type="date"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={formData.dob}
            onChange={handleChange}
          />
        </Box>
        <Box className="d-flex gap-5">
          <TextField
            id="marks"
            label="Marks"
            variant="standard"
            fullWidth
            value={formData.marks}
            onChange={handleChange}
          />
          <TextField
            id="attendance"
            label="Attendance"
            variant="standard"
            fullWidth
            value={formData.attendance}
            onChange={handleChange}
          />
        </Box>
        <Box className="d-flex gap-5">
          <TextField
            id="course"
            label="Course"
            variant="standard"
            fullWidth
            value={formData.course}
            onChange={handleChange}
          />
          <TextField
            id="wallet"
            label="Student Wallet Address"
            variant="standard"
            fullWidth
            value={formData.wallet}
            onChange={handleChange}
          />
        </Box>
        <Box className="d-flex justify-content-center">
          <Button
            variant="contained"
            className="rounded-3"
            color="success"
            type="submit"
          >
            🏅 Issue Certificate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default University;
