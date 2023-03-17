import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routes'

export default function Layout() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(pathname.startsWith('/protected')){
            console.log("Route is Protected")
        }else {
            navigate(LOGIN)
        }
    }, [pathname])

  return (
    <>
    This is the child:<Outlet />
    </>
  )
}
