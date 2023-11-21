import { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import { OrderCard } from '../../Component/OrderCard';
import "./style.css";
function CartAsideMenu() {
    //const {isProductDetailOpen, setIsProductDetailOpen} = useContext(ShoppingCarContext);
    const context = useContext(ShoppingCarContext)
    return(
        <aside className={`${context.isCartAsideMenuOpen ? 'flex' : 'hidden'} cart-aside-menu z-10 scrollable-cards flex-col bg-white border border-black fixed right-0 rounded-lg py-6`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium font-xl">My Order</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => context.closeCartAsideMenu()}></XMarkIcon>
            </div>
            <div className="px-6">
                {context.cartProduct.map(product => (
                    <OrderCard key={product.id} title={product.title} image={product.image} price={product.price}/>
                ))}
            </div>
        </aside>
    )
}

export {CartAsideMenu};