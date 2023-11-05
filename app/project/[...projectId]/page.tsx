import {
  TechStackBadge,
  DurationBadge,
  VisibilityBadge,
  ProgressBadge,
} from '@/components/UI/Badge';
import Post from '@/components/project/Post';
import { urlForImage } from '@/sanity/lib/image';
import { Project } from '@/typings';
import { fetchProjectItem } from '@/utils/fetchProjectItem';
import Image from 'next/image';
import Link from 'next/link';

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const { project } = await getData(params.projectId);
  return (
    <div>
      <section id='project' className='container px-4 mx-auto'>
        <div className='max-w-2xl mx-auto flex flex-col justify-center space-y-10 divide-y-2'>
          <div>
            <h1 className='text-5xl font-bold'>{project.title}</h1>
          </div>
          <div className='flex flex-col space-y-10 pt-5'>
            <div className='relative w-full h-80 rounded-xl'>
              <Image
                src={urlForImage(project?.image).url()}
                alt='project_thumbnail'
                layout='fill'
                objectFit='cotain'
                className='rounded-xl'
              />
            </div>
            {/* Project Info */}
            <div className='flex flex-col w-full justify-center space-y-5'>
              {/* Name and Duration */}
              <div id='project-name_badge' className='flex space-x-3 items-end'>
                <h1 className='text-3xl font-bold'>{project.title}</h1>
                <DurationBadge duration={project.publishedAt} />
                <VisibilityBadge visibility={project.visibility} />
                <ProgressBadge isWorkingNow={project.workingNow} />
              </div>
              {/* Tech Stack Badge */}
              <div className='flex items-center flex-wrap'>
                {project.technologies.map((tech) => (
                  <TechStackBadge name={tech.title} key={tech._id} />
                ))}
              </div>
              {/* Description */}
              <div className='flex flex-col space-y-3 justify-center'>
                <h3 className='text-2xl font-bold'>Description</h3>
                <div>{project.summary}</div>
              </div>
              {/* Velog Posts */}
              <div className='flex flex-col w-full justify-center space-y-3 '>
                <h3 className='text-2xl font-bold'>Related Posts</h3>
                <div className='grid grid-cols-1 w-full justify-items-center md:grid-cols-2 gap-5'>
                  {project.linkToPost.map((post) => (
                    <Post key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </div>
            {/* See on other sites */}
            <div id='reference' className='text-center space-x-5'>
              <Link
                href={project.linkToSource}
                className='w-48 border-2 rounded-full py-3 px-5'
              >
                See on Github
              </Link>
              <Link
                href={
                  typeof project.linkToBuild !== 'undefined'
                    ? project.linkToBuild
                    : '#'
                }
                className='w-48 border-2 rounded-full py-3 px-5'
              >
                See on Web
              </Link>
              {/* {project.features.map((feature) => (
                <div key={1} className='text-black'>{feature.title}</div>
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

async function getData(projectId: string) {
  const project: Project = await fetchProjectItem(projectId);

  return {
    project,
  };
}

export default ProjectPage;
