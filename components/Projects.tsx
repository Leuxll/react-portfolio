import React, { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '../typings'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
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
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <motion.h3 
      className='absolute top-16 uppercase tracking-[20px] text-white text-xs md:text-base xl:text-xl'
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
      viewport={{once: true}}>
        Projects
      </motion.h3>
      <div className='w-screen flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar'>
            {projects?.map((project => (
              <ProjectCard key={project._id} project={project} />
            )))}
        </div>
      <div className='w-full absolute top-[25%] bg-gradient-to-r from-purple-500 to-pink-500 -skew-y-12 h-[100px] -z-10'/>
      <div className='w-full absolute bottom-[25%] bg-gradient-to-r from-purple-500 to-pink-500 skew-y-12 h-[100px] -z-10'/>
    </motion.div>
  )
}