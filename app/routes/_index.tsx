import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "~/component/Header";
import ProductCard from "~/component/productcard";

export const meta: MetaFunction = () => [
  { title: "E commerce app" },
  { name: "description", content: "Welcome to my e commerce app" },
];

export const loader = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return { total: response.data.products.length ,products:response.data.products};
};


export default function Index() {


  const [searchTerm,setSearchTerm]=useState<string>("")
  console.log(searchTerm);
  
  const loaderData:any = useLoaderData();
  const [numOfProducts,setNumOfProducts]=useState(loaderData.total)

  
  const productPerPage = 8;
  const lastPage = Math.ceil(numOfProducts / productPerPage);

  const [currentPage, setCurrentpage] = useState(1);
  const [products,setProducts]=useState(loaderData.products)

console.log(products);

  
  const handlePageClick=(page:number)=>{
    setCurrentpage(page)
  }
  const handlePrevClick=()=>{
  setCurrentpage(prev=>prev-1)

  }

  const handleNextClick=()=>{
    setCurrentpage(prev=>prev+1)
  
    }

    useEffect(()=>{
      const fetchProducts=async()=>{
        if(searchTerm!==""){
          const res=await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
          console.log(res);
          
          setProducts(res.data.products)
          setNumOfProducts(res.data.products.length)
        }
        else{
          const res=await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
          
          setProducts(res.data.products)
          setNumOfProducts(res.data.products.length)
        }
        }
    
      fetchProducts()
    },[searchTerm])
  

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {
        numOfProducts>0 ?
        <div>
  <div className="flex my-10 gap-4 sm:flex-row justify-center items-center flex-wrap">
  {

      products.slice((currentPage-1)*productPerPage,currentPage*productPerPage).map(item=>
       <ProductCard item={item}></ProductCard>
      )
    }
      </div>

      <div className="flex gap-3 justify-center">
        <div className="flex flex-row gap-2 my-5">
          <button
            className={`border rounded w-[40px] h-[40px] text-white ${
              currentPage === 1 ? "bg-indigo-100" : "bg-indigo-300"
            }`}
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            «
          </button>

          {Array.from({ length: lastPage }).map((_, index) => (
            <button
              className={`border rounded w-[40px] h-[40px] ${
                currentPage === index + 1 ? "bg-indigo-400 text-white" : "border-indigo-300"
              }`}
              key={index}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`border rounded w-[40px] h-[40px] text-white ${
              currentPage === lastPage ? "bg-indigo-100" : "bg-indigo-300"
            }`}
            onClick={handleNextClick}
            disabled={currentPage === lastPage}
          >
            »
          </button>
        </div>
      </div>
        </div>
        :
        <div className="my-10 ">
          <p className="text-xl text-center text-red-500">No product found</p>
        </div>
      }
    
    </div>
  );
}
