import React from 'react'
import logo from "../assets/images/beekinLogo.png"
import {  useNavigate } from 'react-router-dom'
function Navbar() {
  const handleNavigate = useNavigate()

  const navOptions = [
    {
      name : "All Jobs",
      path : "/alljobs"
    },
    {
      name : "About us",
      path : "/about"
    },
    {
      name : "Apply by Categories",
      path : "/categories"
    }
  ]
  return (
    <div>
        <div className='w-10/12 flex flex-row justify-between mx-auto mt-10'>
          <img src={logo} alt='logo' className='h-8'/>
          <div className='flex flex-row gap-x-5 font-semibold text-xl text-slate-600 cursor-pointer'>
            {
              navOptions.map((currEle , index)=>{
                return(<p onClick={()=>handleNavigate(currEle.path)} key={index}>{currEle.name}</p>)
              })
            }
          </div>
        </div>
        <hr className='border-2 border-[#277FFE] mt-10 mb-5 w-10/12 mx-auto'></hr>
    </div>
  )
}

export default Navbar