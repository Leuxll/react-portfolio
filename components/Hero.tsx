import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShapes from './BackgroundShapes';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hello, I'm ${pageInfo?.name}.`, `I'm a ${pageInfo?.role.toLowerCase()}.`],
        loop: true,
        delaySpeed: 2000,
    });
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
            className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative'>
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
                className=' absolute top-16 uppercase tracking-[20px] text-white text-xl z-50'>
            Home
            </motion.h3>
            <BackgroundShapes />
            <img 
                src={urlFor(pageInfo?.profilePic).url() || ''}
                alt="Picture of Author"
                className="rounded-full relative h-32 w-32 object-cover mx-auto"/>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-transparent pb-2 tracking-[15px] bg-gradient-to-r bg-clip-text from-pink-500 to-purple-500 font-semibold animate-pulse'>{pageInfo?.role}</h2>
                <h1 className=' text-5xl lg:text-6xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='ffffff'/>
                </h1>
            </div> 
        </motion.div>
    )
}