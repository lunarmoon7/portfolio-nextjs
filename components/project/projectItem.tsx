import { urlForImage } from '@/sanity/lib/image';
import { Project } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({
  projectId,
  project,
}: {
  projectId: string;
  project: Project;
}) => {
  return (
    <div
      id='container'
      className='cursor-pointer hover:scale-105 transition-all duration-300 w-full'
    >
      <Link href={`/project/${projectId}`}>
        <div className='flex flex-col justify-start items-center border-2 rounded-xl shadow-md'>
          <div className='relative w-full h-80 rounded-xl'>
            <Image
              src={urlForImage(project?.image).url()}
              alt='project_thumbnail'
              layout='fill'
              objectFit='cotain'
              className='rounded-t-xl'
            />
          </div>
          <div className='pt-3 text-xl font-bold'>{project?.title}</div>
          <div className='p-5 flex'>{project?.summary}d</div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
