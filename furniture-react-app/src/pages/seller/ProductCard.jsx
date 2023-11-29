import React from "react";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ProductCardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ccc",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: (theme) => theme.spacing(2),
});

const ProductImg = styled("div")({
  height: "150px",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ProductInfo = styled("div")({
  padding: (theme) => theme.spacing(2),
});

const ProductName = styled("h3")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: (theme) => theme.spacing(1),
});

const ProductCategory = styled("span")({
  textAlign: "center",
  color: "#555",
});

const ProductCardBottom = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: (theme) => theme.spacing(1, 2),
  backgroundColor: "#f5f5f5",
  alignItems:'center',
  padding:'0px 20px'
});

const Price = styled("span")({
  color: "#ff5722",
  fontWeight: "bold",
});

const Icon = styled("span")({
  paddingTop:'4px',
  cursor: "pointer",
});
const Edit = styled("span")({
  paddingTop:'4px',
  cursor: "pointer",
});
const handleDelete = async (id,username) => {
  try {
    // Make DELETE request to the server
    await axios.delete(`http://localhost:5000/products/delete/${id}/${username}`);

    // Show success toast
    toast.success("Product deleted successfully", {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    // Optionally, you can update the UI by removing the deleted product from the state
    // or triggering a re-fetch of the product list.
  } catch (error) {
    console.error("Error deleting product:", error);

    // Show error toast
    toast.error("Error deleting product", {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};



const ProductCard = (props) => {
  const navigate = useNavigate();

  const handleEdit = (id,username) => {
    try {
      navigate(`/seller/edit_product/${username}/${id}`,{replace:true})
    } catch(error) {
      console.error("Error Editing Product",error);
    }
  }
  const {id,title,category,price,username} = props;
  return (
    <ProductCardContainer>
      <ProductImg>
        <img src="" alt="Product" />
      </ProductImg>
      <ProductInfo>
        <ProductName>{title}</ProductName>
        <ProductCategory>{category}</ProductCategory>
      </ProductInfo>
      <ProductCardBottom>
        {" "}
        <Price>${price}</Price>
        <Edit onClick={()=> handleEdit(id,username)}>
          {'Edit'}
        </Edit>
        <Icon onClick={()=> handleDelete(id,username)}>
          <DeleteIcon />
        </Icon>
      </ProductCardBottom>
    </ProductCardContainer>
  );
};

export default ProductCard;
