import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';
import { ShoppingCarContext } from '../../Context';

function ContextClick() {
    const {count, setCount} = useContext(ShoppingCarContext);
    return count;
}

export let menu1 = [
    { to: '/', text: 'Shopi', className: 'font-semibold text-lg'},
    { to: '/', text: 'All', className: ''},
    { to: '/clothes', text: 'clothes', className: ''},
    { to: '/electronics', text: 'electronics', className: ''},
    { to: '/furnitures', text: 'furnitures', className: ''},
    { to: '/toys', text: 'toys', className: ''},
    { to: '/others', text: 'others', className: ''},
  ]

export let menu2 = [
    { to: '/email', text: 'example@gmail.com', className: 'text-black/60'},
    { to: '/myorders', text: 'My orders', className: ''},
    { to: '/myoccount', text: 'My occount', className: ''},
    { to: '/signin', text: 'Sign in', className: ''},
    { to: '/shoppcar', text: <ShoppingCartIcon className="w-6 h-6"/>, className: 'flex justify-between', count: <ContextClick/>}
  ]

function NavItem(props) {
    let activeStyle = 'underline underline-offset-4';

    
    return(
        <li className={props.className}>
            <NavLink to={`${props.to}`} 
            className={({isActive}) => isActive ? activeStyle : undefined}>
                {props.text} 
            </NavLink>
            <span>{props.count}</span>
        </li>
    )
}

export {NavItem}