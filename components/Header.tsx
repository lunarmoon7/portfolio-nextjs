'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaVimeo } from '@react-icons/all-files/fa/FaVimeo';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import DropDownMenu from './UI/Menu';

type Props = {
  socials: Social[];
};

export default function Header({}) {
  const pathName = usePathname();
  return (
    <header className='container max-w-3xl flex p-5 mb-10 items-center justify-between mx-auto xl:items-center backdrop-blur-md z-50'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row justify-center items-center z-99'
      >
        <div className='flex justify-center items-center text-xl'>
          <Link
            href='/'
            className={cn('mr-2 md:mr-5 text-2xl md:text-4xl font-poppins')}
          >
            Zentechie
          </Link>
          <div className={cn('space-x-5 text-sm md:text-xl hidden md:block')}>
            <Link
              href='/'
              className={cn(
                'hover:text-violet-400 transition-all ease-in-out duration-200',
                pathName === '/' ? 'text-violet-400' : ''
              )}
            >
              About
            </Link>
            <Link
              href='/project'
              className={cn(
                'hover:text-violet-400 transition-all ease-in-out duration-200',
                pathName === '/project' ? 'text-violet-400' : ''
              )}
            >
              Project
            </Link>
            <Link
              href='/work'
              className={cn(
                'hover:text-violet-400 transition-all ease-in-out duration-200',
                pathName === '/work' ? 'text-violet-400' : ''
              )}
            >
              Work
            </Link>
            <Link
              href='/skill'
              className={cn(
                'hover:text-violet-400 transition-all ease-in-out duration-200',
                pathName === '/skill' ? 'text-violet-400' : ''
              )}
            >
              Skill
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex justify-center items-center text-gray-300 cursor-pointer'
      >
        {/* Social Icons */}
        <div className='flex justify-center items-center space-x-5'>
          <div className='flex justify-center items-center  border-r-2 pr-5 border-gray-300'>
            <Link
              href='https://velog.io/@49crehbgr'
              className='p-3 rounded-lg hover:bg-[#60c69c] transition-all ease-in-out duration-200'
            >
              <FaVimeo className='text-3xl' color='white' />
            </Link>
            <Link
              href='https://github.com/lunarmoon7'
              className='p-3 rounded-lg hover:bg-black transition-all ease-in-out duration-200'
            >
              <FaGithub className='text-3xl' color='white' />
            </Link>
          </div>
          <div>
            <FiSun className='text-3xl' color='orange' />
          </div>
          <DropDownMenu />
        </div>
      </motion.div>
    </header>
  );
}
