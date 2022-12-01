import React from 'react';
import { IoMdMenu,IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='custom-nav-bar mx-6 my-4 flex items-center justify-between'>
            {/* Logo and Menu Bar */}
            <Link className='flex items-center justify-center'>
            <IoMdMenu className='text-[#909090] text-2xl mr-6'/>
            <img className='w-10' src="https://i.postimg.cc/hGDm3pLj/youtube-logo-png-46031.png" alt="" /><h1 className='inline text-white font-bold text-2xl'>WatchTube</h1>
            </Link>
            {/* Search Bar */}
            <div className='flex items-center justify-center'>
                <input type="text" placeholder='Search' className='bg-[#181818] text-white rounded-tl rounded-bl w-[575px] border-0 py-[6px] px-[10px] focus:outline-1' name="search" id="" />
                <button className='bg-[#424242] py-2 px-4 rounded-tr rounded-br'><IoMdSearch className='text-xl text-white'/></button>
            </div>
            {/* Login / Sign Up and Profile Bar*/}
            <button className='flex justify-center items-center border border-gray-500 py-2 px-3'>
                <CgProfile className='text-sky-500 mr-2 text-xl'/>
                <p className='text-sky-500'>Sing in</p>
            </button>
        </nav>
    );
};

export default NavBar;