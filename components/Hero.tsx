'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ['즐기는 자가 일류다.'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='max-w-2xl mx-auto flex flex-col justify-center space-y-10 font-poppins'>
      <div className='text-center text-xl rounded-2xl bg-gray-100 p-5 shadow-inner font-mplus'>
        {text}
      </div>
      <div className='flex flex-col justify-between items-center space-y-5 md:flex-row'>
        <div className=''>
          <h1 className='text-3xl font-semibold'>{pageInfo.name}</h1>
          <h3 className='text-lg font-semibold'>{pageInfo.role}</h3>
        </div>
        <div className='rounded-full w-44 h-44 relative border-4 border-violet-300'>
          <Image
            src={urlForImage(pageInfo?.heroImage).url()}
            alt='Profile_Image'
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='text-3xl font-semibold'>
          <span className='underline decoration-violet-300'>Why Frontend?</span>
        </h1>
        <div>{pageInfo?.whyFrontEnd}</div>
      </div>
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='text-3xl font-semibold'>
          <span className='underline decoration-violet-300'>Interest in..</span>
        </h1>
        <div>{pageInfo?.interests}</div>
      </div>
      <div>
        <h1 className='text-3xl font-semibold mb-3'>
          <span className='underline decoration-violet-300'>Bio</span>
        </h1>
        <div>
          <ul className='list-inside'>
            {pageInfo?.bio?.map((bio, index) => (
              <li
                key={bio._id}
                className='space-x-3 text-left flex items-center text-xl'
              >
                <span className='font-bold'>{bio.year}</span>
                <span>{bio.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-semibold'>
          <span className='underline decoration-violet-300'>Contact</span>
        </h1>
      </div>
    </div>
  );
}
