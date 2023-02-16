import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home';
import Items from './screens/Items';
import Nav from './components/Nav';
import Mysnack from './components/MySnack';
import MySandwiches from './components/MySandwiches';
import MyDrikns from './components/MyDrinks';
import AllItems from './screens/AllItems';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import ViewItem from './components/ViewItem';
import AddProdudct from './screens/AddProduct';


export default function App() {
  
  const [products, setProducts] = useState([])

  const productsCollectionRef = collection(db , 'products');

  useEffect(()=>{

    const getproducts = async () => {
      
        const data = await getDocs(productsCollectionRef);

        setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getproducts()
   } ,[]);

   const snacks = products.filter(
    (product) => product.Category === 'snacks'
   );

   const sandwiches = products.filter(
    (product) => product.Category === 'sandwiches'
   );

   const drinks = products.filter(
    (product) => product.Category === 'drinks'
   );
   
    console.log(products)
  return (
    <div>
    <Nav/>


    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/AddProdudct' element={<AddProdudct/>}></Route>

            <Route path='/items' element={<Items/>}>

              <Route index element={<AllItems items={products && products} />}/>
               <Route path='Snacks' element={<Mysnack items={snacks}/>}/>

               <Route path='Sandwiches' element={<MySandwiches items={sandwiches}/>}/>

               <Route path='Drinks' element={<MyDrikns items={drinks}/>}/>

               <Route path=":id"  element={<ViewItem/>}/>
               
          </Route>

</Routes>



    </div>
  )
}

