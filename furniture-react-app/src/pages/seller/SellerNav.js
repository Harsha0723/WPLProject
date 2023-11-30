import { styled } from "@mui/system";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";

const NavContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  overflow: "hidden",
  width: "100%",
  height: "50px",
  lineHeight: "30px",
  background: "#73e6ff",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});

const NavText = styled("span")({
  padding: "0px 25px",
  cursor: 'pointer',
  transition: "background-color 0.3s", // Add transition for smooth color change
  borderRadius: '5px',

  // Hover effect
  ":hover": {
    backgroundColor: "#5aa6c2", // Change to your desired hover color
  },
});

const SellerNav = ({username}) => {
   
    const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        <NavText onClick={() => navigate(`/seller/acc_info/${username}`)}>Account Info</NavText>
        <NavText onClick={() => navigate(`/seller/add_product/${username}`)}>Add Product</NavText>
        <NavText onClick={() => navigate(`/seller/product_list/${username}`)}>View Products</NavText>
        <NavText onClick={() => navigate(`/seller/edit_account_info/${username}`)}>Edit Account Info</NavText>
      </NavContainer>
    </>
  );
};

export default SellerNav;
