import { useContext } from 'react';
import { Link } from "react-router-dom";
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import { OrderCard } from '../../Component/OrderCard';
import { totalPrice } from "../../utils";
import "./style.css";
function CartAsideMenu() {
    //const {isProductDetailOpen, setIsProductDetailOpen} = useContext(ShoppingCarContext);
    const {cartProduct,setCartProduct,isCartAsideMenuOpen,closeCartAsideMenu, setOrder, order} = useContext(ShoppingCarContext)

    const handleDelete = (id) => {
        const filterCart = cartProduct.filter(product => product.id !== id)
        setCartProduct(filterCart)
    }

    const handleOrder = () => {
        const orderObject = {
            date: "dia",
            products : cartProduct,
            totalProducts: cartProduct.length,
            totalPrice: totalPrice(cartProduct)
        };

        setOrder([...order, orderObject])
        setCartProduct([])
    }
    return(
        <aside className={`${isCartAsideMenuOpen ? 'flex' : 'hidden'} cart-aside-menu z-10 flex-col bg-white border border-black fixed right-0 rounded-lg py-6`}>
            <div className="flex justify-between items-center px-4 mb-4">
                <h2 className="font-medium font-xl">My Order</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => closeCartAsideMenu()}></XMarkIcon>
            </div>
            <div className="px-4 overflow-y-scroll flex-1">
                {cartProduct.map(product => (
                    <OrderCard key={product.id} title={product.title} image={product.image} price={product.price} handleDelete={ handleDelete}/>
                ))}
            </div>

            <div className="px-6 mb-6">
                <p className="flex justify-between mb-4">
                    <span className="font-ligth">Total</span>
                    <span className="font-medium text-lg">{totalPrice(cartProduct)}</span>
                </p>
                <Link to="/my-orders/last">
                    <div className="bg-black py-3 text-white cursor-pointer w-full rounded-lg" onClick={() => handleOrder()}>Checkout</div>
                </Link>
            </div>
        </aside>
    )
}

export {CartAsideMenu};