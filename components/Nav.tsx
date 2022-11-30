import React from 'react'
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, HeartIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type Props = {}

export default function Nav({}: Props) {
  return (
    <motion.nav className='nav'
        initial = {{
            opacity: 0,
            y: 100,
        }}
        transition = {{
            duration: 1,
        }}
        whileInView = {{
            opacity: 1,
            y: 0,
        }}
        viewport = {{once: true}}>
        <a className='nav-icon' href="#hero"><HomeIcon className='icon'/></a>
        <a className='nav-icon' href="#about"><UserIcon className='icon'/></a>
        <a className='nav-icon' href="#experience"><WrenchScrewdriverIcon className='icon'/></a>
        <a className='nav-icon' href="#projects"><HeartIcon className='icon'/></a>
        <a className='nav-icon' href="#contact"><ChatBubbleBottomCenterIcon className='icon'/></a>
    </motion.nav>
  )
}