import Hero from '@/components/Hero';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';

type Props = {
  pageInfo: PageInfo;
};

export default async function Home() {
  const { pageInfo } = await getData();
  return (
    <div>
      {/* Hero */}
      <section id='hero' className='container px-10 h-full mx-auto'>
        <Hero pageInfo={pageInfo} />
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
