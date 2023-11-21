import { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import "./style.css";
function ProductDetail() {
    //const {isProductDetailOpen, setIsProductDetailOpen} = useContext(ShoppingCarContext);
    const context = useContext(ShoppingCarContext)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col bg-white border border-black fixed right-0 rounded-lg py-6`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium font-xl">Detail</h2>
                <XMarkIcon className="h-6 w-6 text-black" onClick={() => context.closeProductDetail()}></XMarkIcon>
            </div>
            <figure className="px-6">
                <img className="w-full h-full" src={context.productShow.image} alt={context.productShow.title}/>
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl">{context.productShow.price}</span>
                <span className="truncate font-medium text-md">{context.productShow.title}</span>
            </p>
        </aside>
    )
}

export {ProductDetail};