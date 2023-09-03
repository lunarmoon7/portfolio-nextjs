import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Project } from '../../../typings';

type Data = {
  project: Project;
};
export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const url = new URL(req.url);
  const projectId = url.searchParams.get('projectId');
  const query = groq`
    *[_type == "project" && _id == "${projectId}"] {
        ...,
        linkToPost[]->,
        technologies[]->
    }[0]
`;
  const project: Project = await client.fetch(query);
  return NextResponse.json({ project });
}
