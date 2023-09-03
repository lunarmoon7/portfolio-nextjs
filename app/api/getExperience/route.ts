import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Experience } from '../../../typings';

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;
type Data = {
    experiences: Experience[];
};
export async function GET(
  req: NextRequest,
  res: NextResponse<Data>
) {
  const experiences: Experience[] = await client.fetch(query);
  return NextResponse.json({ experiences });
}
