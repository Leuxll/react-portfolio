import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'

type Props = {}

// This is the type of the data that will be submitted, similar to a struct or a datamodel
type Inputs = {
    name: String;
    email: String;
    subject: String;
    message: String;
}

export default function Contact({}: Props) {
    // This is going to be the function that will help us setup our form and also handle the submission of the form.
    const { 
        register, 
        handleSubmit } = useForm<Inputs>();

    // Basically this is what we are going to do with the form data once it is submitted.
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:yeufungalt@gmail?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };


  return (
    <div className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
            Contact
        </motion.h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Contact. {" "}
                <span className=' bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text animate-pulse'>Me.</span>
            </h4>
            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='h-7 w-7 text-pink-500 animate-pulse'/>
                    <p className='text-white text-2xl font-semibold'>+1 (437) 993-3058</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='h-7 w-7 text-pink-500 animate-pulse'/>
                    <p className='text-white text-2xl font-semibold'>yuefungalt@gmail.com</p>
                </div>
            </div>
            
            {/* Connected the above submit handlers with the form itself*/}
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className=' flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    {/* ... means spread */}
                    <input {...register('name')} className="contactInput" type="text" placeholder='Name'/>
                    <input {...register('email')} className="contactInput" type="email" placeholder='Email'/>
                </div>
                    <input {...register('subject')} className="contactInput" type="text" placeholder='Subject'/>
                    <textarea {...register('message')} className='contactInput'placeholder='Message'/>
                <button type='submit' className='bg-gradient-to-r py-5 px-10 rounded-md text-white font-bold text-lg from-pink-500 to-purple-500 animate-pulse'>Submit</button>
            </form>

        </div>
    </div>
  )
}