import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <div className='project-card'>
            <div className='card-content'>
                <motion.h3 
                    initial={{
                        opacity: 0,
                        y: -20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{once : true}}
                    className='text-4xl font-semibold'>
                    {project?.title}
                </motion.h3>
            <p className='text-white text-center md:text-left '>
            {project.summary}
            </p>
            <div className='flex space-x-2 my-2'>
            {project.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className='w-8 aspect-square object-contain rounded-md'
                            src={urlFor(technology?.image).url()}
                            alt={technology?.title}
                        />
                    ))}
            </div>
            </div>
        </div>
    )
}