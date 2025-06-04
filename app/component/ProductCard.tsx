import React, { useState } from 'react'
import ShoppingBag from './Icons/ShoppingBag'
import { Product, useCart } from '~/context/CartContext'

function ProductCard({item}:any) {
    const [isLoading,setIsLoading]=useState(true)

    const {dispatch,state}=useCart()



const handleAddToCart=(item:Product)=>{
  dispatch({type:"ADD_TO_CART",product:item})
}


const handleDecrement=(id:number)=>{
  const product=(state.items.find(item=>item.id==id))
  if(product?.quantity==1){
    dispatch({type:"REMOVE_FROM_CART",id:id}) 
  }
  else{
    dispatch({type:"DECREMENT",id:id}) 
  }
}
const handleIncrement=(id:number)=>{
  dispatch({type:"INCREMENT",id:id}) 
}

  return (

    
    
       <div key={item.id}  className="border rounded w-[200px]  sm:w-[300px] flex flex-col justify-between " >
       { isLoading && 
       <div className='relative w-full h-[300px]  flex items-center justify-center bg-indigo-100'>
           <div className='absolute animate-spin w-10  h-10  border-4 border-indigo-400 border-t-transparent rounded-full'> </div>
       </div>
       }
          <img className='w-full' src={item.thumbnail} alt="" onLoad={()=>setIsLoading(false)} />
         <div className='flex justify-between   h-[100px] items-center px-4 bg-indigo-200 py-4 text-white'>
         <p className=''>{item.title}</p>
       
          {
            state.items.find(pro=>pro.id==item.id && pro.quantity!==0) 
            ?
            <div className='flex bg-indigo-300 rounded p-2  '>
  <button className='w-[30px]' onClick={()=>handleDecrement(item.id)}>-</button>
  <input
  type="text"
  className="w-[30px] text-center text-indigo-400"
  value={state.items.find(pro => pro.id === item.id)?.quantity ?? 0}
  readOnly
/>
  <button className='w-[30px]' onClick={()=>handleIncrement(item.id)} >+</button>
            </div>
            :
              <button className='bg-indigo-300 rounded p-2' onClick={()=>handleAddToCart(item)}>
         <ShoppingBag width='16' height='16' fill='white'></ShoppingBag>
         
         </button>
          }

    
         </div>
      
        </div>

  )
}

export default ProductCard
