import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
export default async function Home(){
  const { pageInfo, experiences, skills, projects, socials } = await getData();
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Header socials={socials}/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://i.ibb.co/4t9mYH4/Profile-Image-1.jpg'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export const getData = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  }
}
