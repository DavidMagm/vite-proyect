import {useRoutes, BrowserRouter} from 'react-router-dom';
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {NotFound} from '../NotFound';
import {SignIn} from '../SignIn';
import { SignUp } from '../SingUp';
import {NavContainer} from '../../Component/Nav/NavContainer';
import  { NavItem, menu2, menu1, menu3 } from '../../Component/Nav/NavItem';
import { ShoppingCarProvider } from '../../Context';
import { CartAsideMenu } from '../../Component/CartAsideMenu';
import '../../App.css'


// Las opciones del Navbar en la izquierda

// Las opciones del Navbar en la izquierda




function AppRoutes() {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/all', element: <Home/>},
    {path: '/clothes', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/furnitures', element: <Home/>},
    {path: '/toys', element: <Home/>},
    {path: '/others', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/sing-up', element: <SignUp/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes
}

const localSignOut = localStorage.getItem('sign-out');
const parsedSignOut = JSON.stringify(localSignOut);
isUserSignOut = localSignOut || parsedSignOut


function App() {
  
  const condicionalNav = () => {
    if(isUserSignOut) {
      return (
        menu3.map(menu => (
          <NavItem key={menu.id} text={menu.text} className={menu.className}/>
        ))
      )
    } else {
      menu2.map(menu => (
        <NavItem key={menu.text} to={menu.to} text={menu.text} className={menu.className} count={menu.count}/>
      ))
    }
  }

  return (
    <ShoppingCarProvider>
      <BrowserRouter>
          <nav className="flex bg-white justify-between items-center w-full top-0 fixed z-10 text-sm font-ligth py-5 px-8">
          <NavContainer>
            {menu1.map(menu => (
              <NavItem key={menu.text} to={menu.to} text={menu.text} className={menu.className} type={menu.type}/>
            ))}
          </NavContainer>
          <NavContainer>
          {condicionalNav()}
          </NavContainer>
          </nav>
          <CartAsideMenu/>
      <AppRoutes/>
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default App
