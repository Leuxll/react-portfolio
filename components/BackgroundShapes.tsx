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
        <div className='p-1.5 absolute h-[550px] w-[550px] md:h-[500px] md:w-[500px] sm:w-[400px] sm:h-[400px] animate-pulse mt-52 rotate-45 bg-gradient-to-r from-pink-500 to-purple-500 z-2'>
          <div className='h-full w-full bg-primary rotate-90 z-0'/>
        </div>
        <div className='absolute border-dotted border-4  rounded-full h-[650px] w-[650px] md:h-[600px] md:w-[600px] sm:h-[500px] sm:w-[500px] animate-pulse mt-52'></div>
    </motion.div>
  )
}