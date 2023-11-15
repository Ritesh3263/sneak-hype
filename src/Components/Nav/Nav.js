import React from 'react'
import "./Nav.scss"
import Prod from '../../APIs/shoes'

const Nav = ({filterItem, filteredcategory}) => {

  return (
    <>
      <div className='text-center py-10 '>
        <div className="inline-flex rounded-lg mb-resp nav-shadow bg-white content-v-auto" role="group">
          
          {
            filteredcategory.map((elem)=>{
              return(
                <>
                <button 
                onClick={()=>filterItem(elem)} 
                type="button" key={elem} className="px-6 py-3 text-lg font-medium hover:font-semibold text-primary hover:bg-gray-100 border-b-4 border-transparent hover:border-primary">
                  {elem}
                </button>
                <span className='divider'></span></>
              )
            })
          }
          
          
          
        </div>
      </div>
    </>
  )
}

export default Nav
