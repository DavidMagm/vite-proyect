import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';

function ContextClick() {
    const {cartProduct} = useContext(ShoppingCarContext);
    return cartProduct.length;
}

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
    { to: '/email', text: 'example@gmail.com', className: 'text-black/60'},
    { to: '/my-orders', text: 'My orders', className: ''},
    { to: '/my-occount', text: 'My occount', className: ''},
    { to: '/sign-in', text: 'Sign in', className: ''},
    { to: '/shoppcar', text: <ShoppingCartIcon className="w-6 h-6"/>, className: 'flex justify-between', count: <ContextClick/>}
  ]

function NavItem(props) {
    let activeStyle = 'underline underline-offset-4';
    const {setSearchByCategory} = useContext(ShoppingCarContext)
    
    return(
        <li className={props.className}>
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