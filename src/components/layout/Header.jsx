import React from "react";
import Logo from "../../assets/Logo.png";
import { BiLogIn } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#4B2E2B] text-amber-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={Logo}
              alt="cafeLogo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </Link>

          <Link to="/">
            <h1 className="font-bold text-3xl tracking-wide">Sips</h1>
          </Link>
        </div>

      
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-amber-300">About</Link></li>
          <li><Link to="/menu" className="hover:text-amber-300">Menu</Link></li>
          <li><Link to="/contact" className="hover:text-amber-300">Contact</Link></li>
        </ul>

        
        <div className="flex text-2xl gap-4">
          <Link to="/login"><BiLogIn className="hover:text-amber-300" /></Link>
          <Link to="/register"><BsPersonPlus className="hover:text-amber-300" /></Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;
