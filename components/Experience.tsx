import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

function Experience({experiences}: Props) {
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
            className=' h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-white text-xl z-20 '>
                Experience
            </h3>
            <div className='w-screen flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar before:flex-1 after:flex-1'>
                {experiences?.map((experience => (
                    <ExperienceCard key={experience._id} experience={experience} />
                )))}
            </div>
        </motion.div>
    )
}

export default Experience;