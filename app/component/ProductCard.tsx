import React from 'react'

function ProductCard({item}:any) {
  return (
    <div>
       <div className="border rounded  ">
          <img src={item.thumbnail} alt="" />
          <p>{item.title}</p>
        </div>
    </div>
  )
}

export default ProductCard
