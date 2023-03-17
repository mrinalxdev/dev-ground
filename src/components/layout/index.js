import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes'

export default function Layout() {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const {user, isLoading} = useAuth()

    
    useEffect(() => {
        if(pathname.startsWith('/protected') && !user ){
            console.log("Route is Protected")
        }else {
            navigate(LOGIN)
        }
    }, [pathname])
    
    if(isLoading) return "is Loading ..."
    
  return (
    <>
    This is the child:<Outlet />
    </>
  )
}
