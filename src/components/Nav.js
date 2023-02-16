import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        <nav className="navbar bg-primary" data-bs-theme="dark">
                <Link to='/' className="nav-link">HOME</Link>
                <Link to='/items' className="nav-link">ITEMS</Link>
               <Link to='/AddProdudct' className="nav-link">Add Produdct</Link>
               
        </nav>
        <Outlet/>
    </>
  )
}