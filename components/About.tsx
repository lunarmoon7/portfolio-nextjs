'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-left md:text-left md:flex-row items-center justify-evenly max-w-7xl px-10 mx-auto md:space-x-10'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src='https://i.ibb.co/4t9mYH4/Profile-Image-1.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-25 h-25 rounded-full object-cover md:rounded-lg md:w-30 md:h-35 xl:w-[300px] xl:h-[300px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <div>
          <h4 className='text-4xl font-semibold'>
            <span className='underline decoration-[#f7ab0a]/50'>
              Moon Hwisik
            </span>
          </h4>
        </div>
        <div>
          <div id='why' className='text-base'>
            <h6 className='text-2xl font-semibold mb-5'>
              <span className='underline decoration-[#f7ab0a]/50'>
                Why I do code?
              </span>
            </h6>
            <p className='tracking-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              animi dignissimos voluptates possimus. Voluptas labore dolor
              quaerat aperiam iusto. Sed impedit at quasi saepe reprehenderit
              fuga voluptas commodi sint placeat.
            </p>
          </div>
        </div>

        <div>
          <div id='bio' className='text-base'>
            <h6 className='text-2xl font-semibold mb-5'>
              <span className='underline decoration-[#f7ab0a]/50'>Bio</span>
            </h6>

            <ul className='tracking-normal'>
              <li>
                <span className='font-semibold mr-3'>1998</span> 서울 출생
              </li>
              <li>
                <span className='font-semibold mr-3'>2017</span> 서울
                구암고등학교 졸업
              </li>
              <li>
                <span className='font-semibold mr-3'>2024</span> 서울 건국대학교
                컴퓨터공학부 학사{' '}
                <span className='underline decoration-[#f7ab0a]/50'>
                  2월 졸업 예정
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
