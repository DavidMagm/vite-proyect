import { useContext } from 'react';
import {PlusIcon, CheckIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
function Card(data) {
    //const {count, setCount} = useContext(ShoppingCarContext);
    //const {openProductDetail} = useContext(ShoppingCarContext);
    const context = useContext(ShoppingCarContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductShow(productDetail)
    }

    const addProductCart = (productData) => {
        context.setCount(context.count + 1)
        context.openCartAsideMenu()
        context.closeProductDetail()
        context.setCartProduct([...context.cartProduct, productData])
    }

    const renderIcon = (id) => {
        const isCardCompleted = context.cartProduct.filter(product => product.id == id).length > 0;
        if(isCardCompleted) {
            return (
                <span className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m2 p-1 font-bold" onClick={() => addProductCart(data.data)}><CheckIcon className="w-6 h-6 text-white"></CheckIcon></span>
            )
        }
        else {
            return(
                <span className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m2 p-1 font-bold" onClick={() => addProductCart(data.data)}><PlusIcon className="w-6 h-6 text-black"></PlusIcon></span>
            )
        }
    }
    return(
        <div className="bg-white w-56 h-60 cursor-pointer">
            <figure className="relative w-full h-4/5 mb-2 rounded-lg">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs px-3 py-0.5 m-2">{data.data.category}</span>
                <img onClick={() => showProduct(data.data)} className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="example" />
               {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-ligth truncate">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card};