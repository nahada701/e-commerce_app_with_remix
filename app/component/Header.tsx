import { Link , useLocation, useNavigate } from '@remix-run/react'
import React, {  lazy, Suspense, useEffect, useState } from 'react'
import ShoppingBag  from './Icons/ShoppingBag'
import { useCart } from '~/context/CartContext'
import CrossIcon from './Icons/CrossIcon'

function Header({  setSearchKey, currentPage }: any) {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const { state } = useCart()
    const location=useLocation()
    const insideCartPage=location.pathname==="/cart"
    const insideCategoryPage=location.pathname.includes("category")

    const [categories,setCategories]=useState([])

    useEffect(()=>{
        const storedCategories = JSON.parse(localStorage.getItem("categories") || "[]");
        setCategories(storedCategories)
   
        },[])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchKey(e.target.value)
        setSearch(e.target.value)
    }

    const clearSearch = () => {
        setSearchKey("")
        setSearch("")
    }
    useEffect(() => {
        setSearch("")
    }, [currentPage])

    const handleCategorySearch=(slug:string)=>{
        sessionStorage.setItem("selectedCategory",slug)
        navigate(`/category/${slug}`)
    }

    

    return (
        <div className='py-5 px-10 bg-primary_purple flex justify-between items-start    items-center'>
            <Link to={'/'} className='md:text-3xl sm:text-xl text-[14px]   text-white'>E comm </Link>
            {
                 !insideCartPage &&
                 <select className='rounded py-2 hidden sm:block text-gray-400 text-[14px]'  id="" onChange={(e)=>handleCategorySearch(e.target.value)}>
                    <option value=""   hidden >Select Categotry</option>
                 {
                     categories?.map((cate:{name:string,slug:string,url:string})=>(
                         <option key={cate.name} value={cate.slug}  >{cate.name}</option>
                     ))
                 }
          
             </select>
            }
         
            <div className=" gap-2 hidden sm:flex  ">
                {
                   ( !insideCartPage && !insideCategoryPage ) && 
                   <div className=' flex justify-between bg-white border rounded pr-3 items-center'>
                   <input value={search} type="text" className='py-2 outline-0 bg-none placeholder-xs rounded w-[100px] sm:w-[200px]' placeholder='Search product' onChange={(e) => handleSearch(e)} />
                   {
                       search &&
                       <button className=' rounded-full w-5 h-5 border border-secondary_purple text-secondary_purple ' onClick={() => clearSearch()}>
                           <Suspense fallback={<div>Loading Icon...</div>}>
                               <CrossIcon width='100%' height='100%' fill='text-secondary_purple'></CrossIcon>
                           </Suspense>
                       </button>
                   }

               </div>
                }
              

            </div>

            <div className='flex gap-4 items-center '>
                <button onClick={() => navigate('/cart')} className='flex  '><ShoppingBag width='18' height='18' fill='white' />
                    <span className='text-[10px] text-white rounded-full bg-dark_purple w-[15px] h-[15px]'>
                        {state?.items.length}
                    </span>

                </button>
              
            </div>


        </div>
    )
}

export default Header
