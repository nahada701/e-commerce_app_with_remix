import { Link, useFetcher } from '@remix-run/react'
import React, { useState } from 'react'

function Header({searchTerm,setSearchTerm}:any) {


  return (
    <div className='py-5 px-10 bg-indigo-300 flex justify-between items-center'>
        <h1 className='text-3xl text-white'>E comm App</h1>
        <div className="flex gap-2">
        <input value={searchTerm} type="text" className='rounded' onChange={(e)=>setSearchTerm(e.target.value)} />
        <button className='p-2 border rounded text-white ' >Search</button>
        </div>
        <Link className='text-white' to="logout">Logout</Link>
       
    </div>
  )
}

export default Header
