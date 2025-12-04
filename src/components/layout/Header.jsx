import React from 'react'
import { BiLogIn, BiSearchAlt } from 'react-icons/bi'
import { BsEyeglasses, BsPersonPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='bg-[#4B2E2B] text-amber-50'>
        <nav className='md:grid grid-cols-4 '>
         <Link to={'/'}> <h1 className='font-sans text-2xl col-span-1 text-center hover:font-bold cursor-pointer flex items-center justify-center'>Brew & Leaf</h1> </Link>
          <div className='col-span-2 flex items-center px-5 py-2'>
            <input type="search" className='bg-[#6F5855] border-0 outline-0 px-6 h-full w-full rounded-l-md'/>
            <button className='bg-[#876E6B] h-full px-2 py-1 rounded-r-md hover:bg-[#301D1B] active:bg-amber-950'>
              <BiSearchAlt/>
            </button>
          </div>
          <div className='col-span-1 flex justify-evenly items-center'>
            <Link to={'/login'}>
            <BiLogIn />
            </Link>
            <Link to={'/register'}>
              <BsPersonPlus />
            </Link>
          </div>
        </nav>
        <menu className='flex justify-evenly py-2 '>
          <Link to={'/'}><li className='hover:bg-amber-900 cursor-pointer rounded-lg hover:border-amber-900 hover:border-2 hover:cursor-pointer'>HOME</li></Link>

         <Link to={'/about'}><li className='hover:bg-amber-900 cursor-pointer rounded-lg hover:border-amber-900 hover:border-2 hover:cursor-pointer'>ABOUT</li></Link>
          
          <Link to={'/menu'}><li className='hover:bg-amber-900 cursor-pointer rounded-lg hover:border-amber-900 hover:border-2 hover:cursor-pointer'>MENU</li></Link>

           <Link to={'/contact'}><li className='hover:bg-amber-900 cursor-pointer rounded-lg hover:border-amber-900 hover:border-2 hover:cursor-pointer'>CONTACT</li></Link>
        </menu>
      </header>
    </>
  )
}

export default Header
