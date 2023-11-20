import {createContext, useState} from 'react';

export const ShoppingCarContext = createContext()

export function ShoppingCarProvider({children}) {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const [productShow, setProductShow] = useState({})
    const [cartProduct, setCartProduct] = useState([])
    return (
        <ShoppingCarContext.Provider value={{count,setCount, isProductDetailOpen, openProductDetail,closeProductDetail, productShow, setProductShow, cartProduct, setCartProduct}}>
            {children}
        </ShoppingCarContext.Provider>
    )
}
