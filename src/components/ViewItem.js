import React from 'react'
import { useLocation,Outlet } from 'react-router-dom';

export default function ViewItem() {
  const { state } = useLocation()
  const {items} = state

 

  return (
    <div>
      {items &&
        items.map((product) => (
        <div className="card" style={{width: "18rem"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} 
        src={require(`./images/${product.Name}.jpg`)} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{product.Name}</h5>
        <p className="card-text">{product.Price}</p>
        <p className="card-text">{`${product.Exists}`}</p>

  </div>
</div>



        ))
        }


     <Outlet/>
    </div>
  )
}
