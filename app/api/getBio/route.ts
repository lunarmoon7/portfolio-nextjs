import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Bio, Post } from '../../../typings';

const query = groq`
    *[_type == "bio"]
`;
type Data = {
  bios: Bio[];
};
export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const bios: Bio[] = await client.fetch(query);
  return NextResponse.json({ bios });
}
