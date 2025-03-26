import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='mb-10'>
      <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text'>Our Services</h1>
      <br />
      <div className='flex flex-col lg:flex-row justify-center gap-4'>
        <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
          <h1 className='text-2xl font-bold'>Automatic Routine Evaluation</h1>
          <br />
          <p>Our automatic routine evaluation tool is designed to streamline the process of evaluating students' attendance and behavior. It analyzes the routine of each student based on predefined criteria and generates reports on their attendance and behavior. This tool is designed to help schools and institutions manage their attendance and behavior more efficiently and effectively.</p>
          <br />
          <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'>Explore<FaArrowRight /></button>
        </div>
        <div className='bg-gradient-to-tr from-green-600 to-blue-700 text-slate-50 p-4 rounded-2xl'>
          <h1 className='text-2xl font-bold'>Attendance Recording System</h1>
          <br />
          <p>Our state-of-the-art attendance recording system is designed to streamline the process of recording attendance for schools and institutions. It is designed to help schools and institutions manage their attendance and behavior more efficiently and effectively. It is designed to help schools and institutions manage their attendance and behavior more efficiently and effectively.</p>
          <br />
          <button className='border-2 px-3 py-2 rounded-lg flex items-center justify-between gap-3 hover:animate-pulse cursor-pointer'>Explore<FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Services
