import { Post } from '../typings';

export const fetchPost = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPost`, {
    next: { revalidate: 120 },
  });

  const data = await res.json();
  const posts: Post[] = data.posts;

  return posts;
};
