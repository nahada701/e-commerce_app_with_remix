
import React from 'react'
type iconProps={
    width:string
    height:string
    fill:string
}
const ShoppingBag=React.memo(
  function ShoppingBag({width,height,fill}:iconProps) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} className="bi bi-bag" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>
    )
  }
)


export default ShoppingBag
