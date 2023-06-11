import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../layouts/pages/Home/Home/Home'
import Login from '../layouts/pages/Home/Login/Login'
import SignUp from '../layouts/pages/SignUp/SignUp'
import Dashboard from '../layouts/DashBoard/DashBoard'
import MyCart from '../layouts/DashBoard/MyCart'
import AllUser from '../layouts/DashBoard/AllUser'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'mycart',
        element: <MyCart />
      },
      {
        path: 'allusers',
        element: <AllUser />

      }
    ]
  }
])
