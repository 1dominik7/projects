import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Navbar from './pages/Navbar/Navbar';
import './App.scss'


const Layout = (theme) => {

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]
    }

])


function App() {
  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
