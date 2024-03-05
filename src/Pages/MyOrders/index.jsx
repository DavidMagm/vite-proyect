import { useContext } from "react";
import { ShoppingCarContext } from '../../Context';
import { Link } from "react-router-dom";
import { Layout } from "../../Component/Layout";
import { OrdersCards } from "../../Component/OrdersCards";

function MyOrders() {
    const {order} = useContext(ShoppingCarContext);
    return(
        <Layout>
            {order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}> 
                    <OrdersCards totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                </Link>
            ))}
        </Layout>
    )
}

export {MyOrders};