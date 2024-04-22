import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';
//import { data } from 'autoprefixer';

function ContextClick() {
    const {cartProduct} = useContext(ShoppingCarContext);
    return cartProduct.length;
}

// function ShowEmail() {
//     const {dataUser} = useContext(ShoppingCarContext)
//     const res = dataUser.map((data) => data.email == null ? '' : data.email)
//     return res
// }

// function Showsign() {
//     const {dataUser} = useContext(ShoppingCarContext)
//     if(dataUser.length == 0) {
//         return 'sign in'
//     } else {
//         return 'sign out'
//     }
// }


export let menu1 = [
    { to: '/', text: 'Shopi', className: 'font-semibold text-lg'},
    { to: '/', text: 'All', className: ''},
    { to: '/clothes', text: 'clothing', className: '', type: 'category'},
    { to: '/electronics', text: 'electronics', className: '', type: 'category'},
    { to: '/furnitures', text: 'furnitures', className: '', type: 'category'},
    { to: '/toys', text: 'toys', className: '', type: 'category'},
    { to: '/others', text: 'others', className: '', type: 'category'},
  ]


export let menu2 = [
    { to: '/email', text: '', className: 'text-black/60'},
    { to: '/my-orders', text: 'My orders', className: ''},
    { to: '/my-account', text: 'My account', className: ''},
    { to: '/sign-in', text: 'sign out', className: ''},
    { to: '/shoppcar', text: <ShoppingCartIcon className="w-6 h-6"/>, className: 'flex justify-between', count: <ContextClick/>}
  ]


export let menu3 = [
    { id: 1, text: '', className: 'text-black/60'},
    { id: 2, text: '', className: ''},
    { id: 3, text: '', className: ''},
    { id: 4, text: 'sign in', className: ''},
    { id: 5, text: '', className: 'flex justify-between'}
]





function NavItem(props) {
    let activeStyle = 'underline underline-offset-4';
    const {setSearchByCategory, setSignOut, signOut} = useContext(ShoppingCarContext)

    const handleSignOut = () => {
        localStorage.setItem('sign-out', JSON.stringify(true))
        setSignOut(true)
    }
    
    return(
        <li className={props.className} onClick={props.to == '/sign-in'? handleSignOut() : null}>
            <NavLink to={`${props.to}`} 
            className={({isActive}) => isActive ? activeStyle : undefined}
            onClick={() => props.type ? setSearchByCategory(props.text): setSearchByCategory(false)}>
                {props.text} 
            </NavLink>
            <span>{props.count}</span>
        </li>
    )
}

export {NavItem}