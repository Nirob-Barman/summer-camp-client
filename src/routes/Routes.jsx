import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../layouts/pages/Home/Home/Home'
import Login from '../layouts/pages/Home/Login/Login'
import SignUp from '../layouts/pages/SignUp/SignUp'
import Dashboard from '../layouts/DashBoard/DashBoard'
import MyCart from '../layouts/DashBoard/MyCart'
import AllUser from '../layouts/DashBoard/AllUser'
import InstructorsPage from '../layouts/pages/InstructorsPage/InstructorsPage'
import ClassesPage from '../layouts/pages/ClassesPage/ClassesPage'
import Class from '../layouts/pages/ClassesPage/Class'
import PrivateRoute from './PrivateRoute'
import ErrorPage from '../layouts/pages/ErrorPage/ErrorPage'
import About from '../layouts/pages/About/About'
import AdminDashboard from '../layouts/DashBoard/AdminDashboard'
import InstructorDashboard from '../layouts/DashBoard/InstructorDashboard'
import UserDashboard from '../layouts/DashBoard/UserDashboard'
import ManageUsers from '../layouts/DashBoard/AdminPanel/ManageUsers'
import AddClasses from '../layouts/DashBoard/InstructorPanel/AddClasses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'instructors',
        element: <InstructorsPage />
      },
      {
        path: 'classes',
        element: <ClassesPage />
      },
      {
        path: 'class',
        element: <PrivateRoute><Class /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: '/about',
        element: <About />
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
      },
      {
        path: 'adminhome',
        element: <AdminDashboard />
      },
      {
        path: '/dashboard/manageusers',
        element: <ManageUsers />
      },
      {
        path: 'instructorhome',
        element: <InstructorDashboard />
      },
      {
        path: '/dashboard/addclasses',
        element: <AddClasses />
      },
      {
        path: 'userhome',
        element: <UserDashboard />
      }
    ]
  }
])
