import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import {
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  //navigation back to the home page
  const handleLogoClick = () => {
    window.location.href = '/';
  };

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
          <div
            onClick={handleLogoClick}
            className='flex items-center  pl-14 relative -top-6 '
          >
            <h2 className='text-green-800 text-4xl  font-black pt-10 pl-3 cursor-pointer capitalize'>
              <FaLeaf className='relative top-2' />
              rashid{' '}
              <strong className='text-white text-4xl font-medium'>cafe</strong>
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
      </div>

      {/**contsct */}
      <div className='bg-gradient-to-r from-green-300 to-blue-200 h-[90vh] py-12'>
        <div className='bg-white border h-[70vh] w-[30%] py-5 m-auto rounded-lg relative -left-10'>
          {/**left */}
          <h2 className='text-center text-2xl font-black py-8 '>sign in</h2>
          <div className='flex flex-col gap-6 p-5'>
            <input
              type='text'
              placeholder='Enter Your name'
              className='h-11 px-3 hover:focus:outline-none border-2 border-slate-300 rounded-md'
            />
            <input
              type='password'
              placeholder='password...'
              className='h-11 px-3 hover:focus:outline-none border-2 border-slate-300 rounded-md'
            />
          </div>
          <button className='flex justify-center bg-green-700 text-white text-lg py-2 m-auto w-[90%] h-11 capitalize cursor-pointer rounded-md'>
            sign in
          </button>
          {/**another card */}
          <div>
            <h3 className='text-center text-base text-green-700 underline capitalize py-7'>
              forget password?
            </h3>
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

export default Contact;
