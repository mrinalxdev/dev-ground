import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from '../components/dashboard/Dashboard'
import Layout from '../components/layout/index'
import PublicRoute from '../components/dashboard/PublicRoute'

export const ROOT = '/' 
export const LOGIN = '/login'
export const REGISTER = '/register'

export const PROTECTED = '/protected'
export const DASHBOARD = '/protected/dashboard'
export const HOMEPAGE = '/protected/homepage'

export const router = createBrowserRouter([

        {path:ROOT, element:<PublicRoute />},
        {path:LOGIN, element:<Login />},
        {path:REGISTER, element: <Register />},
        {path:PROTECTED, element: <Layout />, children: [
                {path: DASHBOARD, element: <Dashboard />},
                {path: HOMEPAGE, element:"This is HomePage"}
        ]},

])