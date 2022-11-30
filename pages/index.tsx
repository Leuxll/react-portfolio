import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import About from '../components/About'
import Experiences from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = { 
  pageInfo: PageInfo,
  skills: Skill[],
  experiences: Experience[],
  projects: Project[],
  socials: Social[]
}



export default function Home({ pageInfo, skills, experiences, projects, socials }: Props) {
  return (
    <div className="bg-primary text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* Nav */}
      <Nav />

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience */}
      <section id='experience' className=' snap-center'>
        <Experiences experiences = {experiences}/>
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects projects = {projects}/>
      </section>
      {/* Contact */}
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}
