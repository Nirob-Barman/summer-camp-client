import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../layouts/pages/Home/Home/Home'
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
import UserDashboard from '../layouts/DashBoard/UserDashboard'
import ManageUsers from '../layouts/DashBoard/AdminPanel/ManageUsers'
import AddClasses from '../layouts/DashBoard/InstructorPanel/AddClasses'
import ManageClasses from '../layouts/DashBoard/AdminPanel/ManageClasses'
import Dash from '../layouts/DashBoard/Dash'
import SelectedClasses from '../layouts/DashBoard/StudentPanenl/SelectedClasses'
import EnrolledClasses from '../layouts/DashBoard/StudentPanenl/EnrolledClasses'
import MyClasses from '../layouts/DashBoard/InstructorPanel/MyClasses'
import InstructorDashboard from '../layouts/DashBoard/InstructorPanel/InstructorDashboard'
import StudentDashboard from '../layouts/DashBoard/StudentPanenl/StudentDashboard'
import AdminDashboard from '../layouts/DashBoard/AdminPanel/AdminDashboard'
import Login from '../layouts/pages/Login/Login'
import PaymentPage from '../layouts/DashBoard/StudentPanenl/Payment/PaymentPage'

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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'dash',
        element: <PrivateRoute><Dash /></PrivateRoute>
      },
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
        path: '/dashboard/manageclasses',
        element: <ManageClasses />
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
        path: '/dashboard/myclasses',
        element: <MyClasses />
      },
      {
        path: 'userhome',
        element: <StudentDashboard />
      },
      {
        path: '/dashboard/classes',
        element: <SelectedClasses />
      },
      {
        path: '/dashboard/enrolled',
        element: <EnrolledClasses />
      },
      {
        path: '/dashboard/payment',
        element: <PaymentPage />
      }
    ]
  }
])
