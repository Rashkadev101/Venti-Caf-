import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Page = () => {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <Login />;
  }
  return (
    <>
      <div>
        {/**Header about page */}
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
            <Link
              to='/'
              className='text-white text-lg capitalize cursor-pointer'
            >
              home
            </Link>
            <Link
              to='/Shop'
              className='text-white text-lg capitalize cursor-pointer'
            >
              shop
            </Link>
            <Link
              to='/about'
              className='text-white text-lg capitalize cursor-pointer'
            >
              about
            </Link>
            <Link
              to='/blog'
              className='text-white text-lg capitalize cursor-pointer'
            >
              blog
            </Link>
            <Link
              to='/page'
              className='text-white text-lg capitalize cursor-pointer'
            >
              page
            </Link>
            <Link
              to='/contact'
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
        {/** */}
        <div className='h-[90vh]  bg-[url(https://img.freepik.com/premium-photo/beautiful-restaurant-food-black-background-generative-ai_74760-6672.jpg)] bg-no-repeat bg-cover bg-center'>
          <h1 className='text-white text-center text-6xl font-black pt-32 capitalize'>
            terms & conditions of use,
          </h1>
          <h2 className='text-white text-center text-3xl font-extrabold pt-5 capitalize'>
            Bring of had which their whose you're it own?
          </h2>
          <p className='text-white text-center text-lg pt-5'>
            discover a world of culinary bliss ad delicioz
          </p>
          <button className='flex justify-center m-auto mt-5 pt-1 bg-green-700 text-white text-center text-xl w-44 h-10  capitalize cursor-pointer'>
            discover menu
          </button>
        </div>
        {/**the menu */}
        <div className='flex pt-20 h-[90vh]'>
          {/**left */}
          <div className='w-[50%]  text-center pt-28'>
            <h3 className='text-2xl '>one million</h3>
            <h1 className='text-5xl font-bold capitalize pt-5'>our pages</h1>
            <p className='pt-8 p-12'>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here,
            </p>
            <Link className='text-lg text-green-600 capitalize underline cursor-pointer '>
              our page keys?
            </Link>
          </div>
          {/**right */}
          <div className='flex space-x-4 p-7 w-[50%]'>
            <img
              src='https://img.freepik.com/premium-photo/hamburger-with-meat-lettuce-cheese-tomato_546042-171.jpg'
              alt=''
              className='w-80 h-[70vh] rounded-lg'
            />
            <img
              src='https://itslivb.com/wp-content/uploads/2021/02/File_004-3-1440x2160.jpeg'
              alt=''
              className='w-80 h-[70vh] rounded-lg'
            />
          </div>
        </div>
        {/***our menu two */}
        <div className='flex items-center p-12'>
          {/**left */}
          <div className='flex  space-x-4 flex-wrap w-[50%] h-[70vh]'>
            <div className='pl-4'>
              <img
                src='https://demos.pixelgrade.com/rosa-lite/wp-content/uploads/sites/101/2014/05/menu-thumb-2-276x192.jpg'
                alt=''
                className='w-[100%] h-44 rounded-md'
              />
            </div>
            <div>
              <img
                src='https://demos.pixelgrade.com/rosa-lite/wp-content/uploads/sites/101/2014/05/menu-thumb-1-276x192.jpg'
                alt=''
                className='w-[100%] h-44 rounded-md'
              />
            </div>
            <div>
              <img
                src='https://demos.pixelgrade.com/rosa-lite/wp-content/uploads/sites/101/2014/05/menu-thumb-4-276x192.jpg'
                alt=''
                className='w-[100%] h-44 rounded-md'
              />
            </div>

            <div>
              <img
                src='https://demos.pixelgrade.com/rosa-lite/wp-content/uploads/sites/101/2014/05/menu-thumb-6-276x192.jpg'
                alt=''
                className='w-[100%] h-44 rounded-md'
              />
            </div>
          </div>
          {/**right */}
          <div className='w-[50%] text-center'>
            <h3 className='text-2xl '>discover</h3>
            <h1 className='text-5xl font-bold capitalize pt-5'>
              view the full menu!
            </h1>
            <p className='pt-8 p-12'>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here,
            </p>
            <Link className='text-lg text-green-600 capitalize underline cursor-pointer '>
              our page keys?
            </Link>
          </div>
        </div>
      </div>
      {/**footer */}
      <div>
        {/**part one */}
        <div className='flex justify-between p-10 bg-slate-700 h-96'>
          {/**left */}
          <div>
            <div className='flex items-center  pl-14 relative -top-6 '>
              <h1 className='text-green-800 text-8xl font-black '>v</h1>
              <h2 className='text-white text-3xl font-bold pt-10 pl-3'>
                venti{' '}
                <strong className='text-white text-4xl font-black'>cafe</strong>
              </h2>
            </div>
            <p className='pl-16 text-base text-slate-300 font-medium'>
              It is a long established fact that a reader
              <br />
              will be distracted by the readable content of a<br />
              page when looking at its layout
            </p>
            {/**social media */}
            <div className='flex space-x-6 ml-14 mt-14'>
              <FaFacebookF className='text-blue-500 text-2xl' />
              <FaInstagram className='text-pink-500 text-2xl' />
              <FaTiktok className='text-slate-300 text-2xl' />
              <FaTwitter className='text-blue-400 text-2xl' />
              <FaYoutube className='text-red-600 text-2xl' />
            </div>
          </div>

          {/**center */}
          <div>
            <h2 className='text-xl text-slate-300 font-bold capitalize pt-10'>
              available on
            </h2>
            <ul className='pt-5 text-slate-300'>
              <li className='text-lg'>Monday - Wednesday 10:00 AM - 7:00 PM</li>
              <li className='text-lg pt-2'>
                Thursday - Friday 10:00 AM - 11:00 PM
              </li>
              <li className='text-lg pt-2'>Saturday 12:00 PM - 6:00 PM</li>
              <li className='text-lg  pt-2'>Sunday Off</li>
            </ul>
          </div>
          {/**right */}
          <div className='mr-16'>
            <h2 className='text-xl text-slate-300 font-bold capitalize pt-10'>
              contact us
            </h2>
            <a className='text-slate-300 relative top-7'>Mirpur-12 Dhaka</a>
            <br />
            <a className='text-slate-300 relative top-8'>support@gmail.com</a>
            <br />
            <a className='text-slate-300 relative top-9'>+252-612-015-866</a>
          </div>
        </div>
        {/**copyright */}
        <div className='flex justify-between p-10 bg-slate-800 h-24'>
          {/**left */}
          <div className=' flex space-x-7 text-slate-400 text-sm capitalize'>
            <a>terms & conditions</a>
            <a>member terms</a>
            <a>privacy policy</a>
            <a>refund policy</a>
          </div>
          {/**right */}
          <div className='text-slate-400'>
            <a className='capitalize'>
              <strong>created by rashid othman</strong> || &copy;2023 venti cafe
              all right reserved.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
