import {useState,useEffect} from 'react';
import { Layout } from "../../Component/Layout";
import {Card} from '../../Component/Card';
import { ProductDetail } from "../../Component/ProductDetail";

function Home() {
    const url = 'https://fakestoreapi.com';
    //const url = 'https://api.escuelajs.co/api/v1'
    const [items, setitems] = useState(null);
    useEffect(() => {
        fetch(`${url}/products`)
            .then(response => response.json())
            .then(data => setitems(data));
    }, [])

    return(
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {items?.map(item => (<Card key={item.id} data={item}/>))}
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export {Home};