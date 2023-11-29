import React from 'react'
import Header from "../Header/Header";
import StickyFooter from '../StickyFooter';
import Routers from '../../routers/Routers';

const Layout = () => {
    return (
        <>
        <Header />
            <div>
                <Routers/>
            </div>
            <StickyFooter size="sm"/>
        </>
    )
}

export default Layout
