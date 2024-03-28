import {createContext, useState, useEffect} from 'react';

export const ShoppingCarContext = createContext()

export function ShoppingCarProvider({children}) {

    const url = 'https://fakestoreapi.com';
    //const url = 'https://api.escuelajs.co/api/v1'
    const [items, setitems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [searchByTitle, setSearchByTitle] = useState('');
    const [searchByCategory, setSearchByCategory] = useState('');

    //console.log(filterItems)
    //console.log(items)
    useEffect(() => {
        fetch(`${url}/products`)
            .then(response => response.json())
            .then(data => setitems(data));
    }, [])

    const filterByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filterByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchBy, items, searchByTitle, searchByCategory) => {
        if(searchBy == 'BY_TITLE') {
            return filterByTitle(items, searchByTitle)
        }
        else if(searchBy == 'BY_CATEGORY') {
            return filterByCategory(items, searchByCategory)
        }
        else if(searchBy == 'BY_TITLE_AND_CATEGORY') {
            return filterByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        else if(!searchBy) {
            return items
        }
    }

   //console.log(items)    

    useEffect(() => {
        if(searchByTitle && !searchByCategory) {
            return setFilterItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
        }
        else if(searchByCategory && !searchByTitle) {
            return setFilterItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
        } 
        else if(searchByCategory && searchByTitle) {
            return setFilterItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
        }
        else if(!searchByCategory && !searchByTitle) {
            return setFilterItems(filterBy(false, items, searchByTitle, searchByCategory))
        }
    }, [items, searchByTitle, searchByCategory])

    //console.log(searchByCategory)

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCartAsideMenuOpen, setIsCartAsideMenuOpen] = useState(false);
    const openCartAsideMenu = () => setIsCartAsideMenuOpen(true);
    const closeCartAsideMenu = () => setIsCartAsideMenuOpen(false);

    const [productShow, setProductShow] = useState({})
    const [cartProduct, setCartProduct] = useState([])
    const [order, setOrder] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [newUserValueName, setNewUserValueName] = useState('')
    const [newUserValueEmail, setNewUserValueEmail] = useState('')
    const [newUserValuePassword, setNewUserValuePassword] = useState('')
     return (
        <ShoppingCarContext.Provider value={{items, count, setCount, isProductDetailOpen, openProductDetail,closeProductDetail, productShow, setProductShow, cartProduct, setCartProduct, isCartAsideMenuOpen, openCartAsideMenu, closeCartAsideMenu, order, setOrder, filterItems, setSearchByTitle, searchByTitle, searchByCategory, setSearchByCategory, dataUser, setDataUser, newUserValueName, setNewUserValueName, newUserValueEmail, setNewUserValueEmail, newUserValuePassword, setNewUserValuePassword}}>
            {children}
        </ShoppingCarContext.Provider>
    )
}
