import { useContext } from 'react';
import {XMark} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import "./style.css";
function CartAsideMenu() {
    //const {isProductDetailOpen, setIsProductDetailOpen} = useContext(ShoppingCarContext);
    const context = useContext(ShoppingCarContext)
    return(
        <aside className={`${context.isCartAsideMenuOpen ? 'flex' : 'hidden'} cart-aside-menu flex-col bg-white border border-black fixed right-0 rounded-lg py-6`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium font-xl">My Order</h2>
                <XMark className="h-6 w-6 text-black" onClick={() => context.closeCartAsideMenu()}></XMark>
            </div>
        </aside>
    )
}

export {CartAsideMenu};