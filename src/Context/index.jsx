import {createContext, useState} from 'react';

export const ShoppingCarContext = createContext()

export function ShoppingCarProvider({children}) {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCartAsideMenuOpen, setIsCartAsideMenuOpen] = useState(false);
    const openCartAsideMenu = () => setIsCartAsideMenuOpen(true);
    const closeCartAsideMenu = () => setIsCartAsideMenuOpen(false);

    const [productShow, setProductShow] = useState({})
    const [cartProduct, setCartProduct] = useState([])
    const [order, setOrder] = useState([])
    return (
        <ShoppingCarContext.Provider value={{count,setCount, isProductDetailOpen, openProductDetail,closeProductDetail, productShow, setProductShow, cartProduct, setCartProduct, isCartAsideMenuOpen, openCartAsideMenu, closeCartAsideMenu, order, setOrder}}>
            {children}
        </ShoppingCarContext.Provider>
    )
}
