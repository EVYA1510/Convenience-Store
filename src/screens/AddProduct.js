import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase-config';

export default function AddProdudct  () {

const productCollactionRef = collection(db, 'products');

  const [newItem, setNewItem] = useState({
    Name : '',
    Price : 0,
    Category : '',
    Exists: false,
    Image: ''
  });

  const onChangeHandle = (e) => {

    console.log(e.target.value)
    console.log(e.target.id)


    setNewItem({
    ...newItem,
      [e.target.name] : e.target.value
    })
  }
  

  const createProduct = async (e) => {
    e.preventDefault();

    await addDoc( productCollactionRef, newItem)
    .then(res => {
      console.log('succefully added')})
    .catch(err => {
      alert('problem adding new product')})
    e.target.reset();
  };

  return (
<div>
<form onSubmit={createProduct}>
   <div className="form-group row">
     <label className="col-sm-2 col-form-label">What's the name?</label>
     <div className="col-sm-10">
     <input type="text" name='Name' className="form-control" onChange={onChangeHandle} placeholder="Name"/>
     </div>
   </div>



   <hr/>
   <div className="form-group row">
     <label className="col-sm-2 col-form-label">What is the price?</label>
     <div className="col-sm-10">
       <input type="number" name='Price' className="form-control" onChange={onChangeHandle} placeholder="Price"/>
     </div>
   </div>
   <hr/>
   <fieldset className="form-group">
     <div className="row">
       <legend className="col-form-label col-sm-2 pt-0">What is the category?</legend>
       <div className="col-sm-10">
         <div className="form-check">
           <input  className="form-check-input" onChange={onChangeHandle}
            type="radio" name='Category'  value="Snacks" />
           <label className="form-check-label">
           Snacks
           </label>
         </div>
         <div className="form-check">
           <input className="form-check-input" onChange={onChangeHandle}
           type="radio" name='Category'  value="Sandwiches"/>
           <label className="form-check-label" >
           Sandwiches
           </label>
         </div>
         <div className="form-check">
           <input className="form-check-input" onChange={onChangeHandle}
            type="radio" name='Category'  value="Drinks"/>
           <label className="form-check-label" >
           Drinks
           </label>
         </div>
       </div>
     </div>
   </fieldset>
   <hr/>
   <div className="form-group row">
     <div className="col-sm-2">Is it in stock?</div>
     <div className="col-sm-10">
       <div className="form-check">
       <input className="form-check-input" onChange={onChangeHandle} name='Exists' type="checkbox" value='true'/>
         <label className="form-check-label" > Exists
         </label>
       </div>
     </div>
   </div>
   <hr/>
   <div className="form-group row">
     <div className="col-sm-10">
       <button type="submit" className="btn btn-primary">submit</button>
     </div>
   </div>
 </form>
 </div>


  )
}
