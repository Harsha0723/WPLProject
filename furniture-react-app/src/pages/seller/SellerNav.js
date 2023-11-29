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
  background: "pink",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});

const NavText = styled("span")({
  padding: "0px 20px",
  cursor:'pointer'
});

const SellerNav = ({username}) => {
   
    const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        <NavText onClick={() => navigate(`/seller/acc_info/${username}`,{replace:true})}>Account Info</NavText>
        <NavText onClick={() => navigate(`/seller/add_product/${username}`,{replace:true})}>Add Product</NavText>
        <NavText onClick={() => navigate(`/seller/product_list/${username}`,{replace:true})}>View Product</NavText>
        <NavText>Edit Account Info</NavText>
      </NavContainer>
    </>
  );
};

export default SellerNav;
