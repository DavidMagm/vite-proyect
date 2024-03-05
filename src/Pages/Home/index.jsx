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
                <div className='col-start-2 w-full text-black/80'>No se encuentra resultado</div>
            )
        }
}

    return(
        <Layout>
            <input className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' type="text" placeholder='Search' onChange={(event) => setSearchByTitle(event.target.value)}/>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {rewindRender()}
            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    )
}

export {Home};