import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SellerNav from "./SellerNav";

export default function AddProduct() {
  const { username } = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      // Prepare the product data
      const productData = {
        title: data.get("title"),
        category: data.get("category"),
        image_link: data.get("image_link"),
        seller_id: username,

        mrp: parseFloat(data.get("mrp")),
        tax: parseFloat(data.get("tax")),
        shipping_cost: parseFloat(data.get("shipping_cost")),

        street: data.get("street"),
        city: data.get("city"),
        country: data.get("country"),
        zipCode: parseInt(data.get("zip_code")),
        quantity: parseInt(data.get("quantity")),
        username: username,
      };

      // Make the Axios POST request to your API
      const response = await axios.post(
        "http://localhost:5000/products/add",
        productData
      );

      // Show success toast
      toast.success("Product added successfully", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      event.target.reset();
      // You can redirect the user to another page or handle success in your desired way
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Handle the error, show a message to the user, etc.
    }
  };

  return (
    <div style={{marginBottom:'30px'}}>
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
          <Avatar sx={{ m: 1, bgcolor: "#3d85c6" }}>
            <Inventory2Icon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image_link"
                  label="Image Link"
                  name="image_link"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mrp"
                  label="MRP"
                  name="mrp"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tax"
                  label="Tax"
                  name="tax"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="shipping_cost"
                  label="Shipping Cost"
                  name="shipping_cost"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="zip_code"
                  label="Zip Code"
                  name="zip_code"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  type="number"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
