import React, { useState } from 'react'
import logo from '../assets/A.svg'
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";



const Navbar = () => {
    const menuLinks = [
        {
            name: 'Home',
            link: '/'
        }, {
            name: 'Our Services',
            link: '/'
        }, {
            name: 'Technologies we use',
            link: '/'
        }, {
            name: 'Meet our team',
            link: '/'
        }, {
            name: 'Contact us',
            link: '/'
        }

    ]
    const [showMenu, setShowMenu] = useState(true);
    return (
        <nav className='container mx-auto bg-green-300 flex justify-between items-center p-2 shadow-md'>
            <div>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt='logo' className='h-10 w-10 lg:h-20 lg:w-20' />
                    <span className='text-blue-700 font-extrabold font-sans animate-bounce'>EduVerify</span>
                </Link>
            </div>
            <div className=' hidden lg:flex gap-4 text-blue-600'>
                <a href="#hero" className='hover:text-blue-700 hover:font-bold'>Home</a>
                <a href="#services" className='hover:text-blue-700 hover:font-bold'>Our Services</a>
                <a href="#tech" className='hover:text-blue-700 hover:font-bold'>Technologies we use</a>
                <a href="#team" className='hover:text-blue-700 hover:font-bold'>Meet our team</a>
                <a href="#contactus" className='hover:text-blue-700 hover:font-bold'>Contact us</a>
            </div>
            <div className='lg:hidden flex gap-4 text-4xl text-blue-700'>
                <MdMenu name={showMenu ? 'close' : 'menu'} onClick={() => setShowMenu(!showMenu)} />
                <button className='lg:hidden'><MdAccountCircle size={25} /></button>
            </div>
            <ul className={`lg:hidden md:flex md:items-center md:pb-0 absolute md:static bg-blue-400 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${showMenu ? 'top-30' : '-top-96'}`}>
                {
                    menuLinks.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 md:mr-0 mr-8 text-center rounded-3xl text-green-400 bg-blue-700 hover:bg-blue-800'>
                            <a href={link.link}>
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <button className='hidden lg:block bg-gradient-to-r from-blue-800 to-blue-400 text-slate-50 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500 hover:text-green-400'>Get Started</button>


        </nav>
    )
}

export default Navbar
