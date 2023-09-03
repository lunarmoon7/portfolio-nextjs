import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default async function Home() {
  const { pageInfo } = await getData();
  return (
    <div>
      {/* Hero */}
      <section id='hero' className='container px-10 h-full mx-auto'>
        <Hero pageInfo={pageInfo}/>
      </section>
    </div>
  );
}

async function getData() {
  const pageInfo: PageInfo = await fetchPageInfo();
  return {
    pageInfo,
  };
}
