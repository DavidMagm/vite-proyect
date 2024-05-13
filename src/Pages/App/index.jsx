import {useContext} from 'react';
import {useRoutes, BrowserRouter, Navigate} from 'react-router-dom';
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {NotFound} from '../NotFound';
import {SignIn} from '../SignIn';
import { SignUp } from '../SingUp';
import { Navigator } from '../../Component/Nav/Navigator';
import { ShoppingCarContext, ShoppingCarProvider } from '../../Context';
import { CartAsideMenu } from '../../Component/CartAsideMenu';
import '../../App.css'


// Las opciones del Navbar en la izquierda

// Las opciones del Navbar en la izquierda


const localDataUser= localStorage.getItem('DATA_USER');
const parsedDataUser = JSON.parse(localDataUser)

const noDataLocal = parsedDataUser.length == 0 ? false : true
const hasAccout = !noDataLocal;




function AppRoutes() {

  const {signOut} = useContext(ShoppingCarContext)

  
const localSignOut = localStorage.getItem('sign-out');
const parsedSignOut = JSON.parse(localSignOut);
const isUserSignOut = signOut || parsedSignOut


  let routes = useRoutes([
    {path: '/', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/> : <Home/>},
    {path: '/all', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/>: <Home/>},
    {path: '/clothes', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/> : <Home/>},
    {path: '/electronics', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/> : <Home/>},
    {path: '/furnitures', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/>: <Home/>},
    {path: '/toys', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/> : <Home/>},
    {path: '/others', element: isUserSignOut || hasAccout ? <Navigate replace to={'/sign-in'}/> : <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/sing-in', element: <SignIn/>},
    {path: '/sing-up', element: <SignUp/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes
}
 



function App() {

  return (
    <ShoppingCarProvider>
      <BrowserRouter>
          <Navigator></Navigator>
          <CartAsideMenu/>
      <AppRoutes/>
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default App
