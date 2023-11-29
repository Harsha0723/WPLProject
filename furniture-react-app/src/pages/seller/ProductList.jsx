import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductListContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "16px",
  padding: "16px",
});

const ProductList = () => {
  const { username } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        // Fetch user info to get the sell_products_id
        const userInfoResponse = await axios.get(`http://localhost:5000/users/userInfo/${username}`);
        const sellProductsIds = userInfoResponse.data.sell_products_id;

        // Fetch product details for each product ID
        const productDetailsPromises = sellProductsIds.map(async (productId) => {
          const productDetailsResponse = await axios.get(`http://localhost:5000/products/details/${productId}`);
          return productDetailsResponse.data;
        });

        // Wait for all product details to be fetched
        const productDetails = await Promise.all(productDetailsPromises);
        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchUserProducts();
  }, [username]);
  
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product._id} // Use a unique key for React
          id={product._id}
          title={product.title}
          category={product.category}
          price={product.price.mrp}
          username={username}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
