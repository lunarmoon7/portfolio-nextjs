'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:zentechie7@gmail.com?subject${formData.subject}&body=${formData.message}`;
  }

  return (
    <div className='max-w-375px h-screen relative flex flex-col text-cetner sm:text-left sm:flex-row sm:max-w-7xl md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 w-full items-center'>
        <h4 className='text-2xl sm:text-4xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='block sm:inline decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-5 flex flex-col items-start justify-center'>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-lg sm:text-2xl'>zentechie7@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='w-full px-3 md:px-0 flex flex-col space-y-2 sm:w-fit justify-center'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput w-full' type='text' />
            <input {...register('email')} placeholder='Email' className='contactInput w-full' type='email' />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#f7ab0a] py-3 px-10 rounded-md text-black font-bold text-lg hover:scale-110 hover:bg-[#ffcd61] transition-all ease-in-out duration-300 active:bg-[#ffcd61]'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
