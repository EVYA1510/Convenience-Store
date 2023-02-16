import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  
  return (
    <div className='container'>
        <h1 className='text-center'>Welcome to the Convenience Store</h1>
        <img src={require('../components/images/store-4315394_960_720.jpg')} alt='books' width="600" height="250"></img>
  
        <button className='btn btn-info m-2'>
        <Link to='../Items' className='nav-link'>All products</Link>
        </button>


    </div>  
    
  )
}