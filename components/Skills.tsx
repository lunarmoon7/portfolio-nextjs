'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current profieciency
      </h3>

      <div className='w-fit grid grid-cols-4 gap-3'>
        <Skill
          directionLeft={true}
          imgSrc={'https://i.ibb.co/hmVGGzT/html-5-5968267.png'}
          progress={'90%'}
        />
        <Skill
          directionLeft={true}
          imgSrc={'https://i.ibb.co/XFYJbmJ/css-3-5968242.png'}
          progress={'70%'}
        />
        <Skill
          directionLeft={true}
          imgSrc={'https://i.ibb.co/jkVhNDL/js-5968292.png'}
          progress={'60%'}
        />
        <Skill
          directionLeft={true}
          imgSrc={'https://i.ibb.co/tsBBPkg/chakra-ui.jpg'}
          progress={'70%'}
        />
        <Skill
          directionLeft={false}
          imgSrc={'https://i.ibb.co/0YcG9dP/tailwind-css-icon.png'}
          progress={'20%'}
        />
        <Skill
          directionLeft={false}
          imgSrc={'https://i.ibb.co/bPqJkyR/react.png'}
          progress={'80%'}
        />
        <Skill
          directionLeft={false}
          imgSrc={'https://i.ibb.co/Zd3HBFZ/nextjs.png'}
          progress={'30%'}
        />
      </div>
    </motion.div>
  );
}
