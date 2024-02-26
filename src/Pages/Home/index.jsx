import {useContext} from 'react';
import { Layout } from "../../Component/Layout";
import {Card} from '../../Component/Card';
import { ProductDetail } from "../../Component/ProductDetail";
import { ShoppingCarContext } from '../../Context';


function Home() {
    
const {items, setSearchByTitle, searchByTitle, filterItems, searchByCategory} = useContext(ShoppingCarContext)
//console.log('es del home' + filterItems)

const rewindRender = () => {

        if(filterItems.length > 0) {
                    return(
                        filterItems?.map(item => (<Card key={item.id} data={item}/>))
                    )
                } 

        
        else {
            return(
                <div>hola</div>
            )
        }
}

    return(
        <Layout>
            <input className='w-80 border border-black rounded-lg mb-8 bg-slate-500 focus:outline-none' type="text" placeholder='Search' onChange={(event) => setSearchByTitle(event.target.value)}/>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {rewindRender()}
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export {Home};