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
        className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <motion.h3 
            initial={{
                opacity: 0,
                y: -50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{once: true}}
        className='absolute top-16 uppercase tracking-[20px] text-white text-xs md:text-base xl:text-xl z-10'>
            About
        </motion.h3>
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
            className='relative -mb-20 md:mb-0 flex-shrink-0 w-28 aspect-square rounded-full object-cover md:rounded-lg md:w-52 lg:w-[400px] xl:h-auto xl:aspect-auto lg:aspect-auto md:aspect-auto'
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
            className='relative space-y-10 px-0 md:px-10'>
            <h4 className='text-lg md:text-2xl lg:text-4xl font-semibold'>A Little {" "}
            <span className='text-purple-500 animate-pulse'>Background</span> Information.</h4>
            <p className='text-sm md:text-base lg:text-xl'>{pageInfo?.backgroundInformation}</p>
            <p className='font-semibold'>Favorite Pieces of Tech: {" "} <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse text-sm md:text-base lg:text-xl'>HTML, CSS, JavaScript, Swift and Python</span></p>
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