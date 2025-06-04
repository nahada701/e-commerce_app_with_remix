    import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";
    import axios from "axios";
    import { useEffect, useState } from "react";
    import { lazy, Suspense } from 'react';
    const ProductCard = lazy(() => import("~/component/ProductCard"));
const Pagination =lazy (()=> import ('~/component/Pagination'))
    import Header from "~/component/Header";
import { getFromIndexedDB, saveToIndexedDB } from "~/utils/indexedDb";
    export const meta: MetaFunction = () => [
      { title: "E commerce app" },
      { name: "description", content: "Welcome to my e commerce app" },
    ];

    export default function Index() {
      const [loaderData,setLoaderData]=useState({productData:{},categories:{}})
      const [products, setProducts] = useState<any[]>([]);
      const [searchProducts, setSearchProducts] = useState<any[]>([]);
      const [searchKey, setSearchKey] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const productPerPage = 8;
      
      // loader data from another file 
      useEffect(() => {
        const fetchProducts = async () => {
          const res = await axios.get("/fetchdata"); 
          setLoaderData(res.data) 
        };
        fetchProducts();
      }, []);
    
      // Load data from IndexedDB (or use loader fallback)
      useEffect(() => {
        const loadProducts = async () => {
          const dbData = await getFromIndexedDB();
          if (dbData && Array.isArray(dbData) && dbData.length>0) {
            setProducts(dbData);
          } else {
            setProducts(loaderData?.productData);
            await saveToIndexedDB(loaderData?.productData); // Save for later
          }
        };
        loadProducts();
      }, [loaderData?.productData]);
    
      // Filter products by search key
      useEffect(() => {
        if (searchKey.trim() !== "") {
          const filtered = products.filter((item) =>
            item.title.toLowerCase().includes(searchKey.toLowerCase())
          );
          setSearchProducts(filtered);
          setCurrentPage(1);
        } else {
          setSearchProducts([]);
        }
      }, [searchKey, products]);
    
      // Save categories to local storage
      useEffect(() => {
        if (loaderData?.categories && Array.isArray(loaderData?.categories)) {
          localStorage.setItem("categories", JSON.stringify(loaderData?.categories));
        }
      }, [loaderData?.categories]);
    
      const finalProducts = searchKey ? searchProducts : products;
    
      // Page change
      const handlePageClick = (page: number) => {
        if (navigator.onLine) {
          setCurrentPage(page);
        } else {
          alert("Check Your Internet Connection");
        }
      };
    
      return (
        <div>
          <Header
            currentPage={currentPage}
            searchKey={searchKey}
            setSearchKey={setSearchKey}
          />
          {finalProducts.length > 0 ? (
            <div>
              <div className="min-h-screen">
                <div className="flex mt-10 mb-4 gap-4 sm:flex-row justify-center flex-wrap">
                  <Suspense fallback={<div>Loading products...</div>}>
                    {finalProducts
                      .slice((currentPage - 1) * productPerPage, currentPage * productPerPage)
                      .map((item: any) => (
                        <ProductCard key={item.id} item={item} />
                      ))}
                  </Suspense>
                </div>
              </div>
              <Pagination
                limit={productPerPage}
                offset={currentPage}
                totalItems={finalProducts.length}
                onPageChange={handlePageClick}
                primaryColor="bg-primary_purple"
                textColor="text-white"
                totalToShow={5}
              />
            </div>
          ) : (
            <div className="my-10">
              <p className="text-xl text-center text-red-500">No product found</p>
            </div>
          )}
        </div>
      );
    }
    
