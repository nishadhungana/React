import React from 'react'
import Logo from '../../assets/Logo.png'
import { BiLogIn, BiLogOut, BiSearchAlt } from 'react-icons/bi'
import { BsEyeglasses, BsPersonPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
      <header className='bg-[#4B2E2B] text-amber-50'>
        <nav className='md:grid grid-cols-4 '>
          <div className='col-span-2 flex gap-5 items-center'>
          <Link to={'/'}><img src={Logo} alt="cafeLogo" className='w-13 h-auto rounded-full px-2 py-2' /></Link>
            <Link to={'/'}> <h1 className='font-bold text-2xl col-span-1 text-center hover:cursor-pointer flex items-center justify-center'>Sips</h1> </Link>
         </div>
          <div className='col-span-2 flex justify-evenly items-center'>
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
