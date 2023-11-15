import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Cards from '../Cards/Cards'
import "./Store.scss"
import Prod from "../../APIs/shoes.js"

const categories =  [...new Set(Prod.map((elem)=>{
  return elem.category;
})),"All",
];


const Store = () => {

  const [product, setproduct] = useState(Prod);
  const [filteredcategory, setfilteredcategory] = useState(categories);

  // console.log(product);

  const filterItem = (category) => {
    if(category==="All"){
      setproduct(Prod);
      return;
    }
    const updatedList = Prod.filter((elem)=>{
      return elem.category === category
    });
    setproduct(updatedList);
  };

  // const stock = Prod.map((elem) => {
  //   if(Prod.is_in_inventory===true){
  //     return "In-stock";
  //   }else{
  //     return "Out of stock";
  //   }
    
  // });
  // console.log(stock);

  return (
    <>
      <section className='parent_bg'>
          
        <Nav filterItem={filterItem} filteredcategory={filteredcategory} />
        <Cards product={product} />
      </section>

    </>
  )
}

export default Store
