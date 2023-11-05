import { Bio, Post } from '../typings';

export const fetchPost = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBio`, {
    next: { revalidate: 120 },
  });

  const data = await res.json();
  const bios: Bio[] = data.bios;

  return bios;
};
