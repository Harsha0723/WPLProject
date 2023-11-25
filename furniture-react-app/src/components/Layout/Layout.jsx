import React from 'react'
import StickyFooter from '../StickyFooter'
import Routers from '../../routers/Routers'

const Layout = () => {
    return (
        <>
            <div>
                <Routers/>
            </div>
            <StickyFooter size="sm"/>
        </>
    )
}

export default Layout
