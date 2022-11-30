import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundShapes({}: Props) {
  return (
    <motion.div 
        initial={{ 
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2.5, 2, 1],
            opacity: [0.1, 0.4, 0.8, 1.2, 1.6, 2],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
            duration: 2.5,
        }}
        className='relative flex justify-center items-center'>
        <div className='p-1.5 absolute aspect-square w-[300px] md:w-[500px] lg:w-[550px] animate-pulse mt-52 rotate-45 bg-gradient-to-r from-pink-500 to-purple-500 z-2'>
          <div className='h-full w-full bg-primary rotate-90 z-0'/>
        </div>
        <div className='absolute border-dotted border-4 rounded-full h-[350px] w-[350px] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px] animate-pulse mt-52'></div>
    </motion.div>
  )
}