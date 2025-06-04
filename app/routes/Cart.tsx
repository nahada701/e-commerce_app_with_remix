  import React from 'react'
  import Header from '~/component/Header'
  import { useCart } from '~/context/CartContext'

  function Cart() {

    const{state,dispatch}=useCart()
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
    const products=state.items
    return (

      <div>
        <Header ></Header>


        {
  state.items.some(item => item?.quantity && item?.quantity  > 0)

          ?
          <div>
        <h1 className='my-2 text-4xl text-center '>Cart</h1>
        <div className="p-4 overflow-scroll">
    
      <table className="table-auto  w-full border-collapse border border-gray-300 shadow-md rounded-lg  " >
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className=" px-4 py-2 text-left">No</th>
            <th className=" px-4 py-2 text-left">Title</th>
            <th className=" px-4 py-2 text-left">Image</th>
            <th className=" px-4 py-2 text-left">Quantity</th>
            <th className=" px-4 py-2 text-left">Price</th>
            <th className=" px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            item.quantity !==0 &&
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className=" px-4 py-2">{i + 1}</td>
              <td className=" px-4 py-2">{item.title}</td>
              <td className=" px-4 py-2">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className=" px-4 py-2">
                {  state.items.find(pro=>pro.id==item.id && pro.quantity!==0) 
              &&  
              <div className='flex bg-indigo-300 rounded p-2 w-[100px]  '>
    <button className='w-[30px]' onClick={()=>handleDecrement(item.id)}>-</button>
    <input
    type="text"
    className="w-[30px] text-center text-indigo-400"
    value={state.items.find(pro => pro.id === item.id)?.quantity ?? 0}
    readOnly
  />
    <button className='w-[30px]' onClick={()=>handleIncrement(item.id)} >+</button>
              </div>
            
            }
        
                </td>
              <td className=" px-4 py-2">{item.price}</td>
              {
                item.quantity &&
              <td className=" px-4 py-2">₹{Math.floor(item.price * item?.quantity)}</td>
              }
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    
          </div>

  
    :
    <div className='flex items-center justify-center h-screen'>

      <p className='text-center text-indigo-400 text-4xl '>Cart is empty</p>
    </div>
        
      }

      </div>
  
    )
  }

  export default Cart
