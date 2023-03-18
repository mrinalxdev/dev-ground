import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes'
import { useAuth } from '../../hooks/auth'
import Navbar from '../../components/Navbar/Navbar'

export default function Layout() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const {user, isLoading} = useAuth()

    
    useEffect(() => {
        if(pathname.startsWith('/protected') && !user ){
          navigate(LOGIN)
        }
    }, [pathname, user])
    
    if(isLoading) return "is Loading ..."

  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
