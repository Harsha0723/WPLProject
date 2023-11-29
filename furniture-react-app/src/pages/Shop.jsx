import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from '../assets/data/products';

const Shop = () => {

    const [productsData, setProductsData] = useState(products);
    // const handleFilter = e => {
    //     const filterVal = e.target.value;
    //     if (filterVal == 'sofa') {
    //         const fileredProd = products.filter(
    //             (item) => item.category == "sofa"
    //         );
    //     }
    // };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row class="Shop">
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select >
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
                    <input type='text' placeholder="Search..... " />
                    <span>
                        <SearchIcon/>
                    </span>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
