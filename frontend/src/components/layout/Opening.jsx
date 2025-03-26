import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/hero.mp4'

const Opening = () => {
    return (
        <div className='lg:relative mb-10' id='hero'>
            <video autoPlay loop muted onBlur={70} className='w-full object-cover hidden lg:block'>
                <source src={video} type="video/mp4" />
            </video>
            <div className='lg:absolute inset-0 tracking-tighter lg:bg-black lg:opacity-80 mx-auto max-w-7xl lg:pt-40'>
                <h1 className='text-4xl font-bold text-center mt-20 lg:text-white'>Advanced Routine Automation System and Attendance Tool for<p><span className='bg-gradient-to-r from-green-600 to-blue-700 text-transparent bg-clip-text'> Modern-day Education</span></p></h1>
                <br />
                <p className='text-center lg:mx-40 max-w-4xl lg:text-white'>Streamline your workflow with our innovative solution! Our automatic routine evaluation tool and state-of-the-art attendance recording system are designed to boost efficiency and ensure seamless management for schools and institutions.
                </p>
                {/* buttons */}
                <div className='flex justify-center gap-4 mt-10'>
                    <a href='#services'>
                        <button className='bg-blue-700 p-3 rounded-4xl text-slate-50 border-2 border-green-400 hover:bg-blue-800 hover:border-green-500 hover:text-green-300 cursor-pointer'>See our Services</button>
                    </a>
                    <a href='#team'>
                    <button className='rounded-4xl p-3 lg:text-white lg:hover:bg-slate-950 hover:bg-slate-200 cursor-pointer'>Meet Developers</button>
                    </a>
                        

                </div>
            </div>
        </div>
    )
}

export default Opening
