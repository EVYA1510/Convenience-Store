import React from 'react'
import { Link, Outlet} from 'react-router-dom'

export default function Items() {



  return (
    <div className='container'>
      <h1 className='text-center'>All products</h1>
      <nav className="navbar bg-primary" data-bs-theme="dark">
                <Link to='/items/Snacks' className="nav-link">Snacks</Link>
                <Link to='/items/Drinks' className="nav-link">Drinks</Link>
               <Link to='/items/Sandwiches' className="nav-link">Sandwiches</Link>
        </nav>

      <Outlet/>
    </div>
  )
}