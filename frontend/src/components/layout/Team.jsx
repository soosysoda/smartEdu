import { FaArrowRight } from 'react-icons/fa'
import React from 'react'
import arintak from '../assets/arintak.jpg'
import aniruddha from '../assets/aniruddha.jpg'
import arkapravo from '../assets/arkapravo.jpg'
import { IoLogoLinkedin } from "react-icons/io5";


const Team = () => {
    return (
        <div id='team'>
            <h1 className='bg-gradient-to-r from-blue-800 text-transparent bg-clip-text text-center text-4xl font-bold to-green-600'>Meet our Team</h1>
            <br />
            <div className='flex flex-col lg:flex-row justify-center gap-4'>
                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <img src={aniruddha} alt="" className='w-32 h-32 object-cover rounded-full mx-auto' />
                    <h1 className='text-2xl font-bold text-center'>Aniruddha Hazra</h1>
                    <p className='text-center'>Team Leader of Team HackDebut</p>
                    <br />
                    <p>Hello, I'm Aniruddha Hazra, a first-year second-semester Computer Science and Engineering (CSE) student at Government College of Engineering and Textile Technology, Serampore, pursuing my B.Tech degree. As the team lead of team HackDebut, I leverage my passion for innovation to drive cutting-edge tech solutions. Skilled in Javascript and Java programming languages, I have expertise in various libraries and frameworks, including node.js, express, react, socketio, and threejs. Proficient in data structures such as Data frame and Series, I am excited to collaborate, learn, and contribute to innovative projects that push the boundaries of technology!</p>
                    <br />
                    <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'><IoLogoLinkedin />LinkedIn<FaArrowRight /></button>
                </div>
                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <img src={arintak} alt="" className='w-32 h-32 rounded-full mx-auto' />
                    <h1 className='text-2xl font-bold text-center'>Kaushiki Ray</h1>
                    <p className='text-center'>Team Member of Team HackDebut</p>
                    <br />
                    <p>Hi, this is Arkapravo Mukherjee, a first-year Computer Science and Engineering (CSE) student at Government College of Engineering and Textile Technology, Serampore, pursuing my B.Tech degree. As the ui/ux designer and frontend developer of team HackDebut, I leverage my passion for innovation to drive cutting-edge tech solutions. Skilled in Javascript and Java programming languages, I have expertise in various libraries and frameworks, including node.js, express, react, socketio, and threejs. Proficient in data structures such as Data frame and Series, I am excited to collaborate, learn, and contribute to innovative projects that push the boundaries of technology!</p>
                    <br />
                    <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'><IoLogoLinkedin />LinkedIn<FaArrowRight /></button>
                </div>
                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <img src={arkapravo} alt="" className='w-32 h-32 object-cover rounded-full mx-auto' />
                    <h1 className='text-2xl font-bold text-center'>Arkapravo Mukherjee</h1>
                    <p className='text-center'>Team Member of Team HackDebut</p>
                    <br />
                    <p>Hi, this is Arkapravo Mukherjee, a first-year Computer Science and Engineering (CSE) student at Government College of Engineering and Textile Technology, Serampore, pursuing my B.Tech degree. As the ui/ux designer and frontend developer of team HackDebut, I leverage my passion for innovation to drive cutting-edge tech solutions. Skilled in Javascript and Java programming languages, I have expertise in various libraries and frameworks, including node.js, express, react, socketio, and threejs. Proficient in data structures such as Data frame and Series, I am excited to collaborate, learn, and contribute to innovative projects that push the boundaries of technology!</p>
                    <br />
                    <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'><IoLogoLinkedin />LinkedIn<FaArrowRight /></button>
                </div>

                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <img src={arintak} alt="" className='w-32 h-32 rounded-full mx-auto' />
                    <h1 className='text-2xl font-bold text-center'>Arintak Das</h1>
                    <p className='text-center'>Team Member of Team HackDebut</p>
                    <br />
                    <p>Hello, I'm Arintak Das, a first-year second-semester Computer Science and Engineering (CSE) student at Government College of Engineering and Textile Technology, Serampore, pursuing my B.Tech degree. As a developer at team,HackDebut, I leverage my passion for innovation to drive cutting-edge tech solutions. Skilled in Python and C programming languages, I have expertise in various libraries and frameworks, including Pandas, Flask, OpenCV, NumPy, and OS. Proficient in data structures such as Data frame and Series, I am excited to collaborate, learn, and contribute to innovative projects that push the boundaries of technology!</p>
                    <br />
                    <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'><IoLogoLinkedin />LinkedIn<FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Team
