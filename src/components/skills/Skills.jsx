import React from 'react';
import javascript from '../../assets/skills-icons/javascript.png';
import html from '../../assets/skills-icons/html.png';
import css from '../../assets/skills-icons/css.png';
import tailwind from '../../assets/skills-icons/tailwind.png';
import typescript from '../../assets/skills-icons/typescript.png';
import react from '../../assets/skills-icons/react.png';

import mysql from '../../assets/skills-icons/mysql.png';
import mongodb from '../../assets/skills-icons/mongodb.png';
import python from '../../assets/skills-icons/python.png';

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
      <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
          <h1
            data-aos='fade-right'
            data-aos-delay='500'
            className='sm:text-4xl text-2xl font-extrabold title-font mb-2 text-white'>
            Skills
          </h1>
          <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base mb-4 text-gray-300'>
            Here are some of my skills that I have developed over the past year.
          </p>
          <h5
            data-aos='fade-right'
            data-aos-delay='500'
            className='sm:text-lg text-1xl font-normal title-font text-orange-400'>
            Front-End Technologies
          </h5>
          <div data-aos='fade-right'data-aos-delay='500'  className='flex flex-wrap mb-4 text-gray-300'>
            <p>HTML | CSS | Tailwind CSS | JavaScript | React | TypeScript | Chakra UI | Next.js | Redux</p>
          </div>
          <h5
            data-aos='fade-right'
            data-aos-delay='500'
            className='sm:text-lg text-1xl font-normal title-font  text-orange-400'>
            Back-End Technologies
          </h5>
          <div data-aos='fade-right'data-aos-delay='500' className='flex flex-wrap mb-8 text-gray-300'>
            <p>MySQL | MongoDB | Python</p>
          </div>
          <h5
            data-aos='fade-right'
            data-aos-delay='500'
            className='sm:text-lg text-1xl font-normal title-font text-orange-400'>
            Other Technologies
          </h5>
          <div data-aos='fade-right'data-aos-delay='500' className='flex flex-wrap mb-8 text-gray-300'>
            <p>VS Code | Netlify | Github</p>
          </div>
        </div>

        <div className='flex flex-col md:w-1/2 md:pl-12'>
          <nav className='flex flex-wrap list-none -mb-1'>
            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={javascript} alt='JavaScript' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={html} alt='HTML' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={css} alt='CSS' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={tailwind} alt='Tailwind CSS' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={typescript} alt='TypeScript' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={react} alt='React' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={mysql} alt='MySQL' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={mongodb} alt='MongoDB' className='w-20 h-20 object-cover' />
            </li>

            <li data-aos='fade-left' data-aos-delay='500' className='lg:w-1/3 mb-8 w-1/2'>
              <img src={python} alt='Python' className='w-20 h-20 object-cover' />
            </li>

          </nav>
        </div>
      </div>
    </section>
  );
}
