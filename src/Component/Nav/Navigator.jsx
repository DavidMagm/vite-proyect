import { useContext } from "react";
import { ShoppingCarContext } from "../../Context";
import { NavLink } from "react-router-dom"
import {ShoppingCartIcon} from '@heroicons/react/24/solid';

function Navigator() {

    let activeStyle = 'underline underline-offset-4';

    const {setSignOut, setSearchByCategory, cartProduct, signOut} = useContext(ShoppingCarContext)

    const handleSignOut = () => {
        localStorage.setItem('sign-out', JSON.stringify(true))
        setSignOut(true)
    }

    const localDataUser= localStorage.getItem('DATA_USER');
    const parsedDataUser = JSON.parse(localDataUser)

    const noDataLocal = parsedDataUser.length == 0 ? false : true
    const hasAccout = !noDataLocal;

    const localSignOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(localSignOut);
    const isUserSignOut = signOut || parsedSignOut


    const condicionalNav = () => {
        if(hasAccout  || isUserSignOut) {
          return (
                <li>
                    <NavLink to={'/sing-in'}>
                        Sing in
                    </NavLink>
                </li>
          )
        } else {
          return (
            <>
                <li className="font-semibold text-lg">
                    <NavLink to={'/email'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Email
                    </NavLink>
                </li>
                <li className="font-semibold text-lg">
                    <NavLink to={'/my-orders'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li className="font-semibold text-lg">
                    <NavLink to={'/my-account'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => handleSignOut()}>
                    <NavLink to={'/sing-in'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Sign Out
                    </NavLink>
                </li>
                <li className="flex justify-between">
                    <NavLink to={'/shopcar'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        <ShoppingCartIcon className="w-6 h-6"/>
                    </NavLink>
                    <span>{cartProduct.length}</span>
                </li>
            
            </>
          )
        }
      }

    return(
        <nav className="flex bg-white justify-between items-center w-full top-0 fixed z-10 text-sm font-ligth py-5 px-8">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={'/'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li className="font-semibold text-lg">
                    <NavLink to={'/'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => setSearchByCategory('clothing')}>
                    <NavLink to={'/clothes'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Clothing
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => setSearchByCategory('electronics')}>
                    <NavLink to={'/electronics'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => setSearchByCategory('furnitures')}>
                    <NavLink to={'/furnitures'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => setSearchByCategory('toys')}>
                    <NavLink to={'/toys'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li className="font-semibold text-lg" onClick={() => setSearchByCategory('others')}>
                    <NavLink to={'/others'} className={({isActive}) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                {condicionalNav()}
            </ul>
        </nav>
    )
}

export { Navigator };