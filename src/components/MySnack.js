import React from 'react'

export default function Mysnack({items}) {
  console.log(items)
  //להוסיף את כל התמונות 


  return (
    <div>
      <h1>my snacks</h1>
    {items && 
      items.map((snack) => (
        <div className="card" style={{width: "18rem"}}>
        <img style={{width:'100%', height: "30vh", objectFit:'contain'}} src={require(`./images/${snack.Name}.jpg`)} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{snack.Name}</h5>
            <p className="card-text">Price: {snack.Price} shekel</p>
            <p className="card-text">Exists: {`${snack.Exists}`} </p>
        

        </div>
    </div>
      ))
    } 
</div>

  )
}
