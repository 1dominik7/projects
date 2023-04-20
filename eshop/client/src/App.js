import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import './app.scss'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Logout from './components/Logout/Logout';
import MyAccount from './pages/MyAccount/MyAccount';
import Orders from './pages/Orders/Orders';
import ReturnItem from './pages/ReturnItem/ReturnItem';
import HelpFAQ from './pages/Help&FAQ/Help&FAQ';
import Favorite from './pages/Favorite/Favorite';

const Layout = () => {

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/login',
        element: <>{localStorage.getItem('user') ? <Navigate to="/" /> : <Login />}</>
      },
        {
          path: '/register',
          element: <Register/>
      },
      {
        path: '/logout',
        element: <Logout/>
      },
      {
        path: '/myaccount',
        element: <>{localStorage.getItem('user') ? <MyAccount/> : <Navigate to="/" />}</>
      },
      {
        path: '/orders',
        element: <>{localStorage.getItem('user') ?  <Orders/> : <Login />}</>
      },
      {
        path: '/returnItems',
        element: <ReturnItem/>
      },
      {
        path: '/help&faq',
        element: <HelpFAQ/>
      },
      {
        path: '/favorite',
        element: <>{localStorage.getItem('user') ? <Favorite/> : <Login />}</>
    },

      ]
    },
  ])


function App() {
  return (
    <div> 
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
