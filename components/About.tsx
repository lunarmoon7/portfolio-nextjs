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
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
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
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          maiores eveniet dolores sapiente repellendus nisi eligendi voluptates
          vero similique, incidunt optio voluptas neque! Harum ea aliquam rem ut
          dolor voluptatum iure porro fugiat asperiores officiis modi unde,
          necessitatibus nobis quos quia neque repellat aspernatur, animi qui.
          Aspernatur dolorem sit in qui illo. Impedit eum vel enim modi magni
          accusantium. A ad possimus inventore aspernatur alias illum aperiam?
          Sit cum voluptatem quaerat, eaque fuga at incidunt sint alias
          dignissimos exercitationem in harum reprehenderit officia quo vel
          asperiores, quas totam vero quis vitae deleniti voluptatum dolor! Amet
          quibusdam aliquam ea a cupiditate ad sed ipsa laboriosam, rerum ipsum
          explicabo ipsam facere dolor porro debitis, possimus illo minus enim
          libero sit voluptas hic. Velit molestiae veniam, sit repellat
          temporibus sed. Tempore perspiciatis ratione ipsum. Molestias corporis
          excepturi accusamus ullam maxime modi eligendi vitae. 
        </p>
      </div>
    </motion.div>
  );
}
