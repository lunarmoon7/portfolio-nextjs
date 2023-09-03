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
    words: [
      `프론트엔드 개발자 문휘식입니다.`,
      'Frontend Developer Moon Hwisik',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='max-w-2xl mx-auto flex flex-col justify-center space-y-10'>
      <div className='text-center text-xl font-bold rounded-lg bg-gray-300 p-5'>
        {text}
      </div>
      <div className='flex flex-col justify-between items-center space-y-5 md:flex-row'>
        <div className=''>
          <h1 className='text-4xl font-bold'>{pageInfo.name}</h1>
          <h3 className='text-lg font-semibold'>{pageInfo.role}</h3>
        </div>
        <div className='rounded-full w-32 h-32 relative border-2 border-[#f79756]'>
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
        <h1 className='text-3xl font-bold'>Why Frontend?</h1>
        <div>{pageInfo?.whyFrontEnd}</div>
      </div>
      <div className='flex flex-col justify-center space-y-5'>
        <h1 className='text-3xl font-bold'>Interest in..</h1>
        <div>{pageInfo?.interests}</div>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>Bio</h1>
        <div>
          <ul className='list-inside'>
            {pageInfo?.bio?.map((bio, index) => (
              <li key={bio._id} className='space-x-3 text-left flex items-center text-xl'>
                <span className='font-bold'>{bio.year}</span>
                <span>{bio.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h1 className='text-3xl font-bold'>Contact</h1>
      </div>
    </div>
  );
}
