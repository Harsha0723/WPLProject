import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SellerNav from "./SellerNav";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


export default function AccInfo() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/userInfo/${username}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      <SellerNav username={username} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Information
          </Typography>
      {userData ? (
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={userData.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                value={userData.fname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                value={userData.lname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={userData.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="street"
                label="Street"
                name="street"
                value={userData.street}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                value={userData.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                value={userData.country}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                required
                fullWidth
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                value={userData.zipCode}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <p>Loading user data...</p>
      )}
      </Box>
      </Container>
    </div>
  );
}
