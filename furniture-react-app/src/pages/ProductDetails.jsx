import React, { useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import "../styles/productDetails.css";
import products from "../assets/data/products";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import {useDispatch} from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import {toast} from "react-toastify";

import {motion} from "framer-motion"

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    image_link,
    title,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello product", product?.image_link);
  });

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image_link,
        price
      })
    );

    toast.success('Product added to cart successfully!')
  };

  return (
    <Helmet title={title}>
      <CommonSection title={title} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg-6>
              <img src={image_link} alt="" />
            </Col>
            <Col lg-6>
              <div className="product_details mb-3">
                <h2>{title}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <StarIcon />
                    </span>
                    <span>
                      <StarIcon />
                    </span>
                    <span>
                      <StarIcon />
                    </span>
                    <span>
                      <StarIcon />
                    </span>
                    <span>
                      <StarHalfIcon />
                      </span>    
                  </div>
                  <p>(<span>{avgRating}</span>  ratings)</p>
                </div>
                <span className="product_price">${price}</span>
                <p>{description}</p>

                <button className="buy_btn" onClick={addToCart()}>Add to Cart</button></div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* review section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab-wrapper"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
