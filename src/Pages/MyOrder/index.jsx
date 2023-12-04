import {useContext} from "react";
import { Layout } from "../../Component/Layout";
import { Link } from "react-router-dom";
import {ChevronLeftIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
import { OrderCard } from '../../Component/OrderCard';

function MyOrder() {
    const {order} = useContext(ShoppingCarContext)
    //console.log(order);
    return(
        <Layout>
            <div className="flex items-center justify-center mb-2 w-80 relative">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black"/>
                </Link>
                <h1>My Order</h1>
            </div>
             <div className="flex flex-col w-80">
                {order.slice(-1)[0].products.map(product => (
                    <OrderCard key={product.id} title={product.title} image={product.image} price={product.price}/>
                ))}
            </div>
        </Layout>
    )
}

export {MyOrder};