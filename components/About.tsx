import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-16 uppercase tracking-[20px] text-white text-xl z-10'>
            About
        </h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{once: true}}
            src={urlFor(pageInfo?.heroImage).url() || ''}
            className=' -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-72 md:h-auto xl:w-[400px] xl:h-auto xl:rounded-lg'
        />
        <motion.div
            initial={{
                x: 200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            viewport={{once: true}}
            className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>A Little {" "}
            <span className='text-purple-500 animate-pulse'>Background</span> Information.</h4>
            <p className='text-base'>{pageInfo?.backgroundInformation}</p>
            <p className='font-semibold'>Favorite Pieces of Tech: {" "} <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse'>HTML, CSS, JavaScript, Swift and Python</span></p>
        </motion.div>
        <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className='w-screen absolute top-[10%] bg-gradient-to-r from-pink-600 to-purple-600 h-[5px] skew-y-6 animate-pulse'> 
        </motion.div>
        <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className='w-screen absolute bottom-[10%] bg-gradient-to-r from-pink-600 to-purple-600 h-[5px] skew-y-6 animate-pulse'> 
        </motion.div>
    </motion.div>
  )
}