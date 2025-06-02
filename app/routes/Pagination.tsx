import axios from "axios"

export const loader=async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    return {"products":response.data.products}
}
