import {useContext} from "react";
import { Layout } from "../../Component/Layout";
import { ShoppingCarContext } from '../../Context';
import { OrderCard } from '../../Component/OrderCard';

function MyOrder() {
    const {order} = useContext(ShoppingCarContext)
    //console.log(order);
    return(
        <Layout>
             <div className="flex flex-col w-80">
                {order.slice(-1)[0].products.map(product => (
                    <OrderCard key={product.id} title={product.title} image={product.image} price={product.price}/>
                ))}
            </div>
        </Layout>
    )
}

export {MyOrder};