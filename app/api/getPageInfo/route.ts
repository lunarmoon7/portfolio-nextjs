import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { PageInfo } from '../../../typings';

const query = groq`
    *[_type == "pageInfo"][0]
`;
type Data = {
    pageInfo: PageInfo;
};
export async function GET(
  req: NextRequest,
  res: NextResponse<Data>
) {
  const pageInfo: PageInfo = await client.fetch(query);
  return NextResponse.json({ pageInfo });
}
