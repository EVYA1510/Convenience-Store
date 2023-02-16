import React from 'react'

  export default function MySandwiches({items}) {
      //להוסיף את כל התמונות 



  return (
    <div>            
      <h1>my sandwiches</h1>
    {items && 
      items.map((sandwiche) => (
        <div className="card" style={{width: "18rem"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={require(`./images/${sandwiche.Name}.jpg`)} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{sandwiche.Name}</h5>
            <p className="card-text">Price: {sandwiche.Price} shekel</p>
            <a href="#" className="btn btn-primary">Buy now</a>
        </div>
    </div>
      ))
    } 
</div>

  )
}




