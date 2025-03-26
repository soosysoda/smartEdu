import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiOpencv } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

const Techstack = () => {
    return (
        <div className='mb-10' id='tech'>
            <h1 className='text-center text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text'>Technologies We Use</h1>
            <br />
            <div className='flex flex-col lg:grid lg:grid-flow-row grid-cols-3 justify-center gap-4'>
                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>React<FaReact size={40} /></h1>
                    <br />
                    <p>React is a JavaScript library for building user interfaces. It is designed to help developers create fast and interactive user interfaces for web applications. It is designed to help developers create fast and interactive user interfaces for web applications.</p>
                </div>
                <div className='bg-gradient-to-tr from-green-600 to-blue-700 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>Tailwind CSS<RiTailwindCssFill size={40} /></h1>
                    <br />
                    <p>Tailwind CSS is a utility-first CSS framework for building fast and responsive user interfaces. It is designed to help developers create fast and responsive user interfaces for web applications. It is designed to help developers create fast and responsive user interfaces for web applications.</p>
                </div>
                <div className='bg-gradient-to-br from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>Python OpenCV<SiOpencv size={40} /></h1>
                    <br />
                    <p>Python OpenCV is a powerful library for computer vision and image processing tasks. It offers tools to work with images and videos, such as object detection, facial recognition, feature extraction, and more.</p>
                </div>
                <div className='bg-gradient-to-tr from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>NodeJS<FaNodeJs size={40}/></h1>
                    <br />
                    <p>Node.js is a runtime environment that allows you to run JavaScript outside the browser. It's widely used for building scalable network applications due to its non-blocking, event-driven architecture. Whether you're creating web apps, APIs, or real-time applications, Node.js is a powerful tool.</p>
                </div>
                <div className='bg-gradient-to-tl from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>Python Flask<SiFlask size={40}/></h1>
                    <br />
                    <p>Python Flask is a lightweight and flexible web framework, perfect for building web applications and APIs. Known for its simplicity, Flask provides the essential tools you need to create robust and scalable applications without unnecessary complexity. It also supports extensions for features like database integration, authentication, and more.</p>
                </div>
                <div className='bg-gradient-to-tr from-blue-700 to-green-600 text-slate-50 p-4 rounded-2xl'>
                    <h1 className='text-2xl font-bold flex gap-4 items-center justify-between'>SocketIO<TbBrandSocketIo size={40}/></h1>
                    <br />
                    <p>Socket.IO is a powerful library for real-time, bidirectional communication between web clients and servers. It's built on Node.js and allows you to implement features like live chat, notifications, and collaborative tools with ease. It uses WebSockets as its core technology and falls back on other protocols when WebSockets aren't supported.</p>
                </div>
            </div>
        </div>
    )
}

export default Techstack
