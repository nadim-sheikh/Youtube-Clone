import React from 'react';
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary,MdOutlineHistory} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

const LeftMenuBar = () => {
    return (
        <div className='bg-[#212121]'>
            {/* 1 */}
            <div className='mx-6 my-4'>
                <div className='flex items-center my-5'>
                    <AiFillHome className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
                <div className='flex items-center my-5'>
                    <AiFillFire className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Trends</p>
                </div>
                <div className='flex items-center my-5'>
                    <MdSubscriptions className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
            </div>
            <hr className='border-[#424242]' />
            {/* 2 */}
            <div className='mx-6 my-4'>
                <div className='flex items-center my-5'>
                    <MdVideoLibrary className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Library</p>
                </div>
                <div className='flex items-center my-5'>
                    <MdOutlineHistory className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>History</p>
                </div>
            </div>
            <hr className='border-[#424242]' />
            {/* 3 */}
            <div className='mx-6 my-4'>
                <div className='my-5'>
                    <p className='text-[#909090]'>Sign in to like videos, comment, and subscribe.</p>
                    <button className='flex justify-center items-center border border-gray-500 py-2 px-3'>
                <CgProfile className='text-sky-500 mr-2 text-xl'/>
                <p className='text-sky-500'>Sing in</p>
            </button>
                </div>
            </div>
            <hr className='border-[#424242]' />
            {/* 4 */}
            <div className='mx-6 my-4'>
                <div className='flex items-center my-5'>
                    <AiFillHome className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
                <div className='flex items-center my-5'>
                    <AiFillFire className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Trends</p>
                </div>
                <div className='flex items-center my-5'>
                    <MdSubscriptions className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
            </div>
            <hr className='border-[#424242]' />
            {/* 5 */}
            <div className='mx-6 my-4'>
                <div className='flex items-center my-5'>
                    <AiFillHome className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
                <div className='flex items-center my-5'>
                    <AiFillFire className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Trends</p>
                </div>
                <div className='flex items-center my-5'>
                    <MdSubscriptions className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
            </div>
            <hr className='border-[#424242]' />
            <div className='mx-6 my-4'>
                <div className='flex items-center my-5'>
                    <FiSettings className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Settings</p>
                </div>
                <div className='flex items-center my-5'>
                    <AiFillFire className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Trends</p>
                </div>
                <div className='flex items-center my-5'>
                    <MdSubscriptions className='text-[#909090] text-2xl mr-6' /><p className='text-[#909090] text-xl'>Home</p>
                </div>
            </div>
        </div>
    );
};

export default LeftMenuBar;