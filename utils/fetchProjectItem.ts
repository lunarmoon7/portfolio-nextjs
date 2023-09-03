import { Project } from '../typings';

export const fetchProjectItem = async (projectId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjectItem?projectId=${projectId}`,
    { next: { revalidate: 120 }});

    const data = await res.json();
    const project: Project = data.project;

    return project;
}