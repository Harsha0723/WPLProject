import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import axios from "axios";

const Shop = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await axios.get(
          `http://localhost:5001/products/list`
        );
          console.log(productsData.data);
        setProductsData(productsData.data);
      } catch (error) {
        console.error("Error fetching user products:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleFilter = (e) => {
    const filterVal = e.target.value;
    if (filterVal) {
      const fileredProd = productsData.filter(
        (item) => item?.category === filterVal
      );
      setProductsData(fileredProd);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchedProd = products.filter(item => item?.productName.toLowerCase().includes(searchItem.toLowerCase()));
    setProductsData(searchedProd);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row class="Shop">
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="table">Table</option>
                  <option value="bed">Bed</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search..... "
                  onChange={handleSearch}
                />
                <span>
                  <SearchIcon />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>No products found!!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
