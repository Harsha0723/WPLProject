import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SellerNav from "./SellerNav";

export default function AccInfo() {
  const [userData, setUserData] = useState(null);
  const {username} = useParams();

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
      <h2>User Information</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>First Name: {userData.fname}</p>
          <p>Last Name: {userData.lname}</p>
          <p>Is Seller: {userData.is_seller ? "Yes" : "No"}</p>
          <p>Phone: {userData.phone}</p>
          <p>Address:</p>
          <ul>
            <li>Street: {userData.street}</li>
            <li>City: {userData.city}</li>
            <li>Country: {userData.country}</li>
            <li>Zip Code: {userData.zipCode}</li>
          </ul>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
