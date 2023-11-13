import React from 'react';
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  //Top Arrow
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className='max-sm:text-center'>
        {/**part one */}
        <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-16 bg-slate-700 max-sm:h-[170vh] h-96 '>
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
            <h2 className='text-xl text-slate-300 font-bold capitalize '>
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
          <div className='mr-16 relative -top-10'>
            <h2 className='text-xl text-slate-300 font-bold capitalize '>
              contact us
            </h2>
            <a className='text-slate-300 relative top-7 capitalize'>
              boondheere,mogadishu, banadir, somalia
            </a>
            <br />
            <a className='text-slate-300 relative top-8'>support@gmail.com</a>
            <br />
            <a className='text-slate-300 relative top-9'>+252-612-015-866</a>
          </div>
        </div>

        {/**copyright */}
        <div className='flex flex-wrap justify-between p-10 bg-slate-800 h-24 max-sm:h-44'>
          {/**left */}
          <div className=' flex flex-wrap space-x-7 text-slate-400 text-sm capitalize'>
            <a>terms & conditions</a>
            <a>member terms</a>
            <a>privacy policy</a>
            <a>refund policy</a>
          </div>
          {/**right */}
          <div className='text-slate-400 max-sm:py-4'>
            <a className='capitalize'>
              <strong>created by rashid othman</strong> || &copy;2023 venti cafe
              all right reserved.
            </a>
          </div>
          {/**top arrow */}
          <div>
            <button onClick={handleScrollUp}>
              
              <FaArrowUp className='bg-green-700 w-7 h-7 p-1 text-white cursor-pointer rounded-sm' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
