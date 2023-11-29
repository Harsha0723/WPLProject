import React from "react";
import "../styles/cart.css"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";

import tdImg from '../assets/images/arm-chair-01.jpg'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={tdImg} alt="" />
                                        </td>
                                        <td>Modern Arm Chair</td>
                                        <td>$299</td>
                                        <td>2px</td>
                                        <td>
                                            <DeleteIcon/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>

            </section>
        </Helmet>
    );
}

export default Cart;