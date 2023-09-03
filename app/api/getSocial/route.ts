import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Social } from '../../../typings';

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';


const query = groq`
  *[_type == "social"]
`;
type Data = {
  socials: Social[];
};
export async function GET(
  req: NextRequest,
  res: NextResponse<Data>
) {
  const socials: Social[] = await client.fetch(query);
  return NextResponse.json({ socials });
}
