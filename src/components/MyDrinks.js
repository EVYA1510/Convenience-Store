import React from 'react'
import { Link } from 'react-router-dom'


export default function Mydrinks({items}) {

  return (
    <div>

    <h1>my drinks</h1>

    {items && 
      items.map((drink) => (
        <div className="card" style={{width: "18rem"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={require(`./images/${drink.Name}.jpg`)} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{drink.Name}</h5>
            <p className="card-text">Price: {drink.Price} shekel</p>
            
             {/* View Item עבודה על כפתור  */}

            <button className='btn btn-info m-2'>
             <Link to='../ViewItem' className='nav-link'>View Item</Link>
            </button>

             {/* View Item עבודה על כפתור 

             <button className='btn btn-info m-2' onClick={console.log(drink)}>
             <Link to='../ViewItem' className='nav-link'>View Item</Link>
            </button> */}



        </div>
    </div>
      ))
    } 
</div>

  )
}


