import React, { useState } from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { FaForward, FaPlus, FaTimes } from 'react-icons/fa';

const DetailsCardOne = () => {
  const [showForm, setShowForm] = useState(false);
  const [showcard, setShowCard] = useState(true);

  //handle Back Home
  const handleBack = () => {
    window.location.href = '/';
  };

  const handleLoginClick = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <Login />;
  }

  const handleClose = () => {
    // Set the showCard state to false to hide the card
    setShowCard(false);
  };

  return (
    <>
      {/**header */}
      <div className='flex justify-between items-center bg-slate-900 pt-5 '>
        {/**left */}

        <div className='flex items-center  pl-14 relative -top-6 '>
          <h1 className='text-green-800 text-8xl font-black '>v</h1>
          <h2 className='text-white text-3xl font-bold pt-10 pl-3'>
            venti{' '}
            <strong className='text-white text-4xl font-black'>cafe</strong>
          </h2>
        </div>
        {/**center */}
        <nav className='flex items-center space-x-7'>
          <Link to='/' className='text-white text-lg capitalize cursor-pointer'>
            home
          </Link>
          <Link
            to='./Shop'
            className='text-white text-lg capitalize cursor-pointer'
          >
            shop
          </Link>
          <Link
            to='./about'
            className='text-white text-lg capitalize cursor-pointer'
          >
            about
          </Link>
          <Link
            to='./blog'
            className='text-white text-lg capitalize cursor-pointer'
          >
            blog
          </Link>
          <Link
            to='./page'
            className='text-white text-lg capitalize cursor-pointer'
          >
            page
          </Link>
          <Link
            to='./contact'
            className='text-white text-lg capitalize cursor-pointer'
          >
            contact
          </Link>
        </nav>
        {/**right */}
        <div className='flex space-x-4 pr-14'>
          <button
            onClick={handleLoginClick}
            className='bg-green-800 w-28 h-10 text-slate-100 text-lg capitalize'
          >
            log in
          </button>

          <button className='bg-slate-50 w-44 h-10 text-lg capitalize'>
            get started
          </button>
        </div>
      </div>
      {/**main */}
      <div className=' bg-slate-800 text-white w-[80%] h-[80vh] m-auto mt-16'>
        {/**close icon */}
        <div onClick={handleBack} className='float-right'>
          <FaTimes className='mx-8 my-6 text-xl cursor-pointer hover:text-red-600' />
        </div>
        {/**card description */}
        <div className='flex space-x-12 p-5'>
          {/**left */}
          <div className='flex space-x-8'>
            <img
              src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
              alt='card one'
              className='w-96 object-cover rounded-md'
            />
            <div className='flex flex-col gap-7 py-16'>
              <img
                src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
                alt=''
                className='w-[13vh] opacity-60'
              />
              <img
                src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
                alt=''
                className='w-[13vh] opacity-60'
              />
              <img
                src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
                alt=''
                className='w-[13vh] opacity-60'
              />
              <img
                src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
                alt=''
                className='w-[13vh] opacity-60'
              />
            </div>
          </div>

          {/**right */}
          <div className='ml--14'>
            <h2 className='text-2xl font-extrabold capitalize'>
            Malawah Somali Recipe
            </h2>
            <p className='pt-6'>
              Where can I get some? There are many variations of passages <br />{' '}
              of Lorem Ipsum available, but the majority have suffered
              alteration
            </p>
            {/**price & quantity */}
            <div className='pt-6'>
              <p className='text-lg '>
                {' '}
                <strike className='text-slate-500 mr-8'>$12.99 USD</strike>{' '}
                $8.99 USD
              </p>
            </div>
            <div className='pt-6'>
              <p className='capitalize'>quantity</p>
              <input
                type='number'
                placeholder='1'
                className='w-32 h-10 text-slate-600 text-lg text-center font-semibold  mt-2'
              />
            </div>
            <div className='mt-20'>
              <button className='bg-green-700 w-64 h-10 text-lg capitalize cursor-pointer'>
                add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCardOne;
