import ProjectItem from '@/components/project/projectItem';
import { Project } from '@/typings';
import { fetchProjects } from '@/utils/fetchProjects';

export default async function Project() {
  const { projects } = await getData();
  return (
    <div>
      <section id='project' className='container px-4 mx-auto'>
        <div className='max-w-2xl mx-auto flex flex-col justify-center space-y-10 divide-y-2'>
          <div>
            <h1 className='text-5xl font-bold'>Projects</h1>
          </div>
          <div className='pt-5 grid grid-cols-1 w-full justify-items-center md:grid-cols-2 gap-5'>
            {projects.map((project) => (
              <ProjectItem projectId={project._id} key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

async function getData() {
  const projects: Project[] = await fetchProjects();

  return {
    projects,
  };
}
