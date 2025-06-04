import { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData, useLocation } from '@remix-run/react'
import axios from 'axios'
import React, { useState } from 'react'
import Header from '~/component/Header'
import Pagination from '~/component/Pagination'
import ProductCard from '~/component/ProductCard'


export const loader=async({request,params}:LoaderFunctionArgs)=>{
  const slug=params.slug
  const response=await axios.get(`https://dummyjson.com/products/category/${slug}`)
  if(response.data.products.length==0){
    throw new Error("Category Not found")
  }
  else{

    return {data:response.data}
  }
}
function Categories() {
const loaderData:any=useLoaderData()
const location:any=useLocation()

const products=loaderData?.data?.products
const slug=location.pathname
console.log(slug)
console.log(products)
  const productPerPage = 8;
  const [currentPage, setCurrentpage] = useState(1);
  const handlePageClick = (page: number) => {
    if(navigator.onLine){

      setCurrentpage(page)
    }
    else{
      alert("Check Your Internet Connection")
    }
  }
  return (
    <div>
      <Header></Header>
          {
              products.length > 0 ?
                <div >
                  <div className="min-h-screen">
                    <div className="flex mt-10 mb-4 gap-4 sm:flex-row justify-center   flex-wrap">                     
                        {
                          products
                            .slice((currentPage - 1) * productPerPage, currentPage * productPerPage)
                            .map((item: any) =>
                              <ProductCard key={item.id} item={item} />
                            )
                        }
                    </div>
                  </div>
      
                  {/* pagination */}
                  <Pagination
                    limit={productPerPage}
                    offset={currentPage}
                    totalItems={products.length}
                    onPageChange={handlePageClick}
                    primaryColor="bg-indigo-400"
                    textColor="text-white"
                    totalToShow={5}
      
                  />
                </div>
                :
                <div className="my-10 ">
                  <p className="text-xl text-center text-red-500">No product found</p>
                </div>
            }
    </div>
  )
}

export default Categories
