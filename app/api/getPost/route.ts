import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import { Post } from '../../../typings';

const query = groq`
    *[_type == "post"] {
      ...,
      linkToPost[]->
    }
`;
type Data = {
  posts: Post[];
};
export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const posts: Post[] = await client.fetch(query);
  return NextResponse.json({ posts });
}
