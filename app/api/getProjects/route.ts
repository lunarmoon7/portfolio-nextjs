import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Project } from '../../../typings';

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;
type Data = {
  projects: Project[];
};
export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const projects: Project[] = await client.fetch(query);
  return NextResponse.json({ projects });
}
