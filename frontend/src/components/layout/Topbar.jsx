import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Topbar = () => {
    return (
        <div className='bg-blue-700 text-slate-50 flex justify-between items-center p-2'>
            <div className='lg:flex gap-4 hidden'>
                <FaInstagram className='hover:text-green-300 hover:-translate-y-1 duration-300' />
                <FaFacebook className='hover:text-green-300 hover:-translate-y-1 duration-300' />
                <FaLinkedin className='hover:text-green-300 hover:-translate-y-1 duration-300' />
            </div>
            <span className='text-center'>Get Automatic Report evaluated and multi-face attendace system now at your fingertips</span>
            <p className='hidden lg:block'>Developed by Team debutCoders</p>
        </div>
    )
}

export default Topbar
