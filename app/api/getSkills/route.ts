import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Skill } from '../../../typings';

const query = groq`
    *[_type == "skill"]
`;
type Data = {
    skills: Skill[];
};
export async function GET(
  req: NextRequest,
  res: NextResponse<Data>
) {
  const skills: Skill[] = await client.fetch(query);
  return NextResponse.json({ skills });
}