import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

type Props = {
    experience: Experience
}

export default function ExperienceCard( {experience}: Props) {
  return (
    <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 z-0"></div>
        <div className="relative bg-primary rounded-lg">
            <article className='relative flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] xl:w-[500px] aspect-[1/1.6] snap-center bg-primary p-10 hover:opacity-100 opacity-20 cursor-pointer transition-opacity duration-200 overflow-hidden z-20'>
            <motion.img 
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{once: true}}
                className='w-32 xl:w-[200px] aspect-square object-center rounded-lg object-contain'
                src={urlFor(experience?.companyImage).url()} />
            <div className='px-10 md:px-10'>
                <h4 className=' text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className='w-8 aspect-square object-contain rounded-md'
                            src={urlFor(technology?.image).url()}
                            alt={technology?.title}
                        />
                    ))}
                </div>
                <p className=' uppercase py-5 text-white'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className='list-item space-y-4 ml-5 text-lg h-80 overflow-y-scroll scrollbar'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
            </article>
        </div>
    </div>
  )
}