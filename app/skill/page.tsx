import Tech from '@/components/skill/Tech';
import { Skill, Skill as SkillType } from '@/typings';
import { fetchSkills } from '@/utils/fetchSkills';

type Props = {
  skills: SkillType[];
  directionLeft?: boolean;
};

export default async function Skill() {
  const { skills } = await getData();
  return (
    <div>
      <section id='project' className='container px-4 mx-auto'>
        <div className='max-w-2xl mx-auto flex flex-col justify-center space-y-10 divide-y-2'>
          <div>
            <h1 className='text-5xl font-bold'>Tech Stack</h1>
          </div>
          <div className='pt-5'>
            <div className='grid grid-cols-1 w-full justify-items-center md:grid-cols-2 gap-5'>
              {skills?.map((skill) => (
                <Tech key={skill._id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
async function getData() {
  const skills: Skill[] = await fetchSkills();

  return {
    skills,
  };
}
