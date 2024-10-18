import React from 'react'
import { FaFile } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='w-52 h-64  px-2 bg-zinc-900 rounded-3xl relative overflow-hidden'>
            <h1 className='text-white pt-10 '> <FaFile /></h1>
            <p className='text-white mt-2  leading-5 tracking-tight'>{data.desc}</p>
            <div className='w-full h-12 absolute bottom-4 left-0 '>
                <div className='flex justify-between px-4 items-center pb-2'>
                    <h1 className='text-white'>{data.filesize}</h1>
                    <span className='bg-zinc-800 px-1 py-1 rounded-full text-white cursor-pointer'>
                        {data.close ? <IoClose /> : <FiDownload />}
                        
                    </span>
                </div>
                {data.tag.isopen && (
                     <div className={`${data.tag.tagcolor == "blue" ? "bg-blue-600" : "bg-green-500"} pb-2 py-1 flex items-center justify-center`}>
                     <h1 className='text-white font-bold '>{data.tag.tagtitle}</h1>
                 </div>
                )}
               
            </div>              
        </motion.div>
    )
}

export default Card