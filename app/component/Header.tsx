import { Link , useLocation, useNavigate } from '@remix-run/react'
import React, {  lazy, Suspense, useEffect, useState } from 'react'
const ShoppingBag = lazy(() => import('./Icons/ShoppingBag'))
const CrossIcon = lazy(() => import('./Icons/CrossIcon'))
import { useCart } from '~/context/CartContext'

function Header({  setSearchKey, currentPage }: any) {

    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const { state } = useCart()
    const location=useLocation()
    const insideCartPage=location.pathname==="/cart"
    const insideCategoryPage=location.pathname.includes("category")
    console.log(insideCategoryPage)

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
        navigate(`/category/${slug}`)
    }

    return (
        <div className='py-5 px-10 bg-indigo-300 flex justify-between items-start    items-center'>
            <Link to={'/'} className='md:text-3xl sm:text-xl text-[14px]   text-white'>E comm App</Link>
            {
                 !insideCartPage &&
                 <select className='rounded py-2'  id="" onChange={(e)=>handleCategorySearch(e.target.value)}>
                    <option value="" disabled hidden >Select Categotry</option>
                 {
                     categories?.map((cate:{name:string,slug:string,url:string})=>(
                         <option value={cate.slug}  >{cate.name}</option>
                     ))
                 }
          
             </select>
            }
         
            <div className=" gap-2 hidden sm:flex  ">
                {
                   ( !insideCartPage && !insideCategoryPage ) && 
                   <div className=' flex justify-between bg-white border rounded pr-3 items-center'>
                   <input value={search} type="text" className='outline-0 bg-none placeholder-xs rounded w-[100px] sm:w-[200px]' placeholder='Search product' onChange={(e) => handleSearch(e)} />
                   {
                       search &&
                       <button className=' rounded-full w-5 h-5 border border-indigo-400 text-indigo-400 ' onClick={() => clearSearch()}>
                           <Suspense fallback={<div>Loading Icon...</div>}>
                               <CrossIcon width='100%' height='100%' fill='text-indigo-400'></CrossIcon>
                           </Suspense>
                       </button>
                   }

               </div>
                }
              

            </div>

            <div className='flex gap-4 items-center '>
                <button onClick={() => navigate('/cart')} className='flex  '><ShoppingBag width='18' height='18' fill='white' />
                    <span className='text-[10px] text-white rounded-full bg-indigo-400 w-[15px] h-[15px]'>
                        {state?.items.length}
                    </span>

                </button>
                <Link className='text-white sm:text-[14px] text-[12px]' to="logout">Logout</Link>
            </div>


        </div>
    )
}

export default Header
