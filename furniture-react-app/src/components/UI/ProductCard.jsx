import React from "react";

import {motion} from "framer-motion";
import "../../styles/product-card.css";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";
import {toast} from 'react-toastify';


import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice";
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProductCard = ({item}) => {
    const dispatch = useDispatch()

    const addToCart =() => {
        dispatch(cartActions.addItem({
            id: item.id,
            title: item.title,
            price: item.price.mrp,
            image_link: item.image_link,
        }));

        toast.success("Product added successfully.")
    };

    return (
        <Col lg="3" md="4" className="mb-2">
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover = {{scale:0.9}} src={item.image_link} alt="" style={{height:"255.55px"}}/>
                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name">
                        <Link to={`/shop/${item._id}`}>{item.title}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item?.price?.mrp}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}>
                        <AddCircleIcon/>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard;