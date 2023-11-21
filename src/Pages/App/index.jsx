import {useRoutes, BrowserRouter} from 'react-router-dom';
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {NotFound} from '../NotFound';
import {SignIn} from '../SignIn';
import {NavContainer} from '../../Component/Nav/NavContainer';
import  { NavItem, menu2, menu1 } from '../../Component/Nav/NavItem';
import { ShoppingCarProvider } from '../../Context';
import { CartAsideMenu } from '../../Component/CartAsideMenu';
import '../../App.css'


// Las opciones del Navbar en la izquierda

// Las opciones del Navbar en la izquierda




function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes
}

function App() {

  return (
    <ShoppingCarProvider>
      <BrowserRouter>
          <nav className="flex bg-white justify-between items-center w-full top-0 fixed z-10 text-sm font-ligth py-5 px-8">
          <NavContainer>
            {menu1.map(menu => (
              <NavItem key={menu.text} to={menu.to} text={menu.text} className={menu.className}/>
            ))}
          </NavContainer>
          <NavContainer>
          {menu2.map(menu => (
              <NavItem key={menu.text} to={menu.to} text={menu.text} className={menu.className} count={menu.count}/>
            ))}
          </NavContainer>
          </nav>
          <CartAsideMenu/>
      <AppRoutes/>
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default App
