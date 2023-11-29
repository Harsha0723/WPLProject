import React, {useRef, useEffect} from 'react';
import "./header.css"

import logo from '../../assets/images/WebsiteLogo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';

import {motion} from 'framer-motion'
import {Container, Row} from 'reactstrap';
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from 'react-router-dom';

const nav__link = [
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'shop',
        display: 'Shop'
    },
    {
        path:'cart',
        display: 'Cart'
    },

]

const Header = () => {

    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    
    useEffect(() =>{
        stickyHeaderFunc()
        return ()=>window.removeEventListener("scroll", stickyHeaderFunc);
    });

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");
    
    const navigateToCart = () => {
        navigate('/cart')
    }

    return (<header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className = "nav__wrapper">
                    
                    <div className="logo">
                        <img src={logo} alt="WPL Furnitures"/>
                        <div>
                            <h1>WPL Furnitures</h1>
                            <p> Since 2023</p>
                        </div>
                    </div>
                    
                    <div className="navigation" ref={menuRef} onClick={menuToggle}> 
                        <motion.ul className="menu">
                            {
                                nav__link.map((item, index) => (
                                    <li className='nav__item' key={index}>
                                        <NavLink 
                                            to={item.path} className={(navClass)=>
                                            navClass.isActive? 'nav__active' : ''
                                            } >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </motion.ul>
                    </div>

                    <div className="nav__icons">
                        <span className="fav__icon">
                            <Badge badgeContent={1} color="error">
                                <FavoriteIcon />
                            </Badge>
                        </span>
                        <span className="cart__icon" onClick={navigateToCart}>
                            <Badge badgeContent={totalQuantity} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </span>
                        <span className="account__icon">
                            <motion.div whileTap={{ scale: 1.5 }}>
                                <AccountCircleIcon />
                            </motion.div>
                        </span>
                        <div className="mobile__menu">
                            <span onClick={menuToggle}>
                                <MenuIcon></MenuIcon>
                            </span>
                        </div>
                    </div>   
                </div>
            </Row>
        </Container>
    </header>)
};

export default Header;