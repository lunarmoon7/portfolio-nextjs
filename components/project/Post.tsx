import { urlForImage } from '@/sanity/lib/image';
import { Post, Image as sanityImg } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

const Post = ({ post }: { post: Post }) => {
  console.log(post);
  return (
    <div
      id='container'
      className='cursor-pointer hover:scale-105 transition-all duration-300 shadow-md rounded-xl w-full h-full'
    >
      {/* Velog Link */}
      <Link href={post.url}>
        <div className='border-2 rounded-xl'>
          <div className='relative w-full h-60'>
            <Image
              src={urlForImage(post.image).url()}
              alt='project_thumbnail'
              layout='fill'
              objectFit='cotain'
              className='rounded-xl'
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Post;
