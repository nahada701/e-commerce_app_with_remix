import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('~/component/Header'));
const Pagination = lazy(() => import('~/component/Pagination'));
const ProductCard = lazy(() => import('~/component/ProductCard'));

export const meta: MetaFunction = () => [
  { title: "E commerce app" },
  { name: "description", content: "Welcome to my e commerce app" },
];

export const loader = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=0");
  const categories=await axios.get('https://dummyjson.com/products/categories')
  return {productData:response.data.products,categories:categories.data}

};


export default function Index() {
  const [searchProducts, setSearchProducts] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const {productData,categories}: any = useLoaderData();
  console.log(categories)
  const productPerPage = 8;
  const [currentPage, setCurrentpage] = useState(1);
  const products = searchKey ? searchProducts : productData;

  const handlePageClick = (page: number) => {
    if(navigator.onLine){

      setCurrentpage(page)
    }
    else{
      alert("Check Your Internet Connection")
    }
  }
  useEffect(() => {
    if (searchKey?.trim() !== "") {
      const filtered = productData.filter((item: any) =>
        item.title.toLowerCase().includes(searchKey.toLowerCase())
      );
      setSearchProducts(filtered);
      setCurrentpage(1);

    } else {
      setSearchProducts([]);
    }
  }, [searchKey, productData]);


  // saving category inside local storage

  useEffect(()=>{
    if(categories && Array.isArray(categories)){
      localStorage.setItem("categories",JSON.stringify(categories))
    }
  },[categories])
  return (
    <div>
      <Header  currentPage={currentPage} searchKey={searchKey} setSearchKey={setSearchKey} />
      {
        products.length > 0 ?
          <div >
            <div className="min-h-screen">
              <div className="flex mt-10 mb-4 gap-4 sm:flex-row justify-center   flex-wrap">
                <Suspense fallback={<div>Loading searchProducts...</div>}>
                  {
                    products
                      .slice((currentPage - 1) * productPerPage, currentPage * productPerPage)
                      .map((item: any) =>
                        <ProductCard key={item.id} item={item} />
                      )
                  }
                </Suspense>

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
  );
}
