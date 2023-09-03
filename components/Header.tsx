'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaVimeo } from '@react-icons/all-files/fa/FaVimeo';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { Acme, Amatic_SC } from 'next/font/google';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

type Props = {
  socials: Social[];
};
const acme = Acme({
  weight: ['400'],
  subsets: ['latin'],
});
const AmaticSC = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Header({}) {
  const pathName = usePathname();
  return (
    <header className='sticky top-0 p-5 mb-10 flex items-center justify-between max-w-3xl mx-auto xl:items-center bg-white/20 backdrop-blur-md z-50'>
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
        <div className='flex space-x-5 justify-center items-center text-xl'>
          <Link
            href='/'
            className={cn('mr-2 md:mr-5 text-2xl md:text-5xl', acme.className)}
          >
            Zentechie
          </Link>
          <div
            className={cn('space-x-5 text-xl md:text-3xl', AmaticSC.className)}
          >
            <Link
              href='/'
              className={cn('hover:text-orange-400 transition-all ease-in-out duration-200', pathName === '/' ? 'text-orange-400' : '')}
            >
              About
            </Link>
            <Link
              href='/project'
              className={cn('hover:text-orange-400 transition-all ease-in-out duration-200', pathName === '/project' ? 'text-orange-400' : '')}
            >
              Project
            </Link>
            <Link
              href='/work'
              className={cn('hover:text-orange-400 transition-all ease-in-out duration-200', pathName === '/work' ? 'text-orange-400' : '')}
            >
              Work
            </Link>
            <Link
              href='/skill'
              className={cn('hover:text-orange-400 transition-all ease-in-out duration-200', pathName === '/skill' ? 'text-orange-400' : '')}
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
          <div className='flex justify-center items-center space-x-5 border-r-2 pr-5 border-gray-300'>
            <Link href='#'>
              <FaVimeo className='text-3xl' color='gray' />
            </Link>
            <Link href='#'>
              <FaGithub className='text-3xl' color='gray' />
            </Link>
          </div>
          <FiSun className='text-3xl' color='gray' />
        </div>
      </motion.div>
    </header>
  );
}
