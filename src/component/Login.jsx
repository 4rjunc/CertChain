import React, { useState } from 'react';
import { Container, Box, Avatar, Typography, TextField, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({ onLogin, onShowStudentForm, onSubmit }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Container component="main" maxWidth="xs" >
      <Box
        sx={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className='box'>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Center-aligns children horizontally
              justifyContent: 'center', // Center-aligns children vertically if needed
              textAlign: 'center', // Centers the text within the Typography
            }}
          > 
            <Avatar 
              sx={{ m: 1, bgcolor: 'secondary.main' }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>   
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={onShowStudentForm}>
                  Student form
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>  
      </Box>
    </Container>
   
  );
};

export default Login;
