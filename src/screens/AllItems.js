import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AllItems({items}) {
  const Navigate = useNavigate();

    
     return (
        <div>

        {items && 
          items.map((product) => (
            <div className="card" style={{width: "18rem"}}>
            <img style={{width:'100%', height: "30vh", objectFit:'contain'}}
             src={require(`../components/images/${product.Image === '' ? 'undefined' :  product.Image}.jpg`)}
              className="card-img-top" alt={"..."}/>
            <div className="card-body">
                <h5 className="card-title">{product.Name}</h5>
                <p className="card-text">Price: {product.Price} shekel</p>
                <p className="card-text">Exists: {`${product.Exists}`} </p>
            </div>

            

              <div className="container">
                <button onClick={() => Navigate(`/items/${product.id}`, {state : {product} })} className="btn btn-outline-secondary">
                View item
             </button>
             
              </div>  

        </div>
          ))
        } 
    </div>
    
      )
    }
