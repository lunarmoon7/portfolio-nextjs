import Image from 'next/image';
import { Skill } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Tech = ({ skill }: Props) => {
  return (
    <div className='flex items-center rounded-xl w-full bg-gray-200 p-5 space-x-5 md:flex-col md:justify-center md:items-center md:space-x-0 md:space-y-10 shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-300'>
      {/* Tech Image */}
      <div className='w-24 h-20 relative md:w-28 md:h-28'>
        <Image
          src={urlForImage(skill.image).url()}
          alt='tech'
          layout='fill'
          objectFit='contain'
          className='rounded-xl'
        />
      </div>
      {/* Tech name */}
      <div className='w-full text-gray-400'>
        <span>{skill.title}</span>
      </div>
    </div>
  );
};

export default Tech;
