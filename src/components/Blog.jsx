import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaList,
  FaPlus,
  FaShare,
  FaThList,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DetailsCardOne from '../pages/DetailsCardOne';
import DetailsCardTwo from '../pages/DetailsCardTwo';
import DetailsCardThree from '../pages/DetailsCardThree';
import DetailsCardFour from '../pages/DetailsCardFour';
import DetailsCardFive from '../pages/DetailsCardFive';
import DetailsCardSix from '../pages/DetailsCardSix';

const Blog = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDeatil, setShowDeatil] = useState(false);
  const [showdeatiltwo, setShowDeatilTwo] = useState(false);
  const [showdeatilthree, setShowDeatilThree] = useState(false);
  const [showdeatilfour, setShowDeatilFour] = useState(false);
  const [showdeatilfive, setShowDeatilFive] = useState(false);
  const [showdeatilsix, setShowDeatilSix] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <Login />;
  }
  //define show deatils
  const handleDeatilClick = () => {
    setShowDeatil(true);
  };
  if (showDeatil) {
    return <DetailsCardOne />;
  }
  const handleDeatilTwoClick = () => {
    setShowDeatilTwo(true);
  };

  if (showdeatiltwo) {
    return <DetailsCardTwo />;
  }
  const handleDeatilThreeClick = () => {
    setShowDeatilThree(true);
  };

  if (showdeatilthree) {
    return <DetailsCardThree />;
  }
  const handleDeatilFourClick = () => {
    setShowDeatilFour(true);
  };

  if (showdeatilfour) {
    return <DetailsCardFour />;
  }
  const handleDeatilFiveClick = () => {
    setShowDeatilFive(true);
  };

  if (showdeatilfive) {
    return <DetailsCardFive />;
  }
  const handleDeatilSixClick = () => {
    setShowDeatilSix(true);
  };

  if (showdeatilsix) {
    return <DetailsCardSix />;
  }
  return (
    <>
      <div>
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
        <div className='h-[85vh]  bg-[url(https://img.freepik.com/premium-photo/plate-food-with-black-background-that-says-smokey-it_111797-1764.jpg)] bg-no-repeat bg-cover bg-center'>
          <div className='text-center'>
            <h1 className='text-white text-center  text-6xl font-black pt-20 capitalize'>
              blog EAT LIKE A LOCAL
            </h1>
            <h2 className='text-white  text-5xl font-extrabold pt-5 capitalize'>
              to your table
            </h2>
            <p className='text-white  text-lg pt-5'>
              discover a world of culinary bliss ad delicioz
            </p>
            <button className='flex justify-center m-auto mt-7 pt-1 bg-green-700 text-white text-center text-xl w-44 h-10  capitalize cursor-pointer'>
              discover menu
            </button>
          </div>
        </div>

        {/**Shop by category */}
        <div className='flex bg-slate-50 h-[375vh]'>
          {/**left */}
          <div className='bg-white text-black w-[50%] p-10'>
            <h2 className='text-xl font-bold capitalize'>shop by category</h2>
            <div className='pt-5'>
              <div className='flex items-center justify-between'>
                <p className='text-lg capitalize'>drinks</p>
                <div>
                  <FaPlus className='text-sm text-slate-500' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-lg pt-2 capitalize'>appetizers</p>
                <div>
                  <FaPlus className='mt-2 text-sm text-slate-500' />
                </div>
              </div>

              <p className='text-lg pt-2 capitalize'>specials</p>
              {/**border style */}
              <div className='border-y mt-5'></div>
            </div>
            {/**filter by */}
            <div className='pt-5'>
              <h2 className='text-lg font-bold capitalize'>filter by</h2>
              <div className='pt-3'>
                <input
                  type='radio'
                  id='radio1'
                  name='radioGroup'
                  value='option1'
                />
                <label for='radio1' className='text-lg  pl-2 capitalize'>
                  appetizers(9)
                </label>
              </div>
              <div>
                <input
                  type='radio'
                  id='radio2'
                  name='radioGroup'
                  value='option2'
                  className='mt-4'
                />
                <label for='radio2' className='text-lg  pl-2  capitalize'>
                  specials(11)
                </label>
              </div>

              <div>
                <input
                  type='radio'
                  id='radio3'
                  name='radioGroup'
                  value='option3'
                  className='mt-4'
                />
                <label for='radio3' className='text-lg  pl-2 capitalize'>
                  drinks(17)
                </label>
              </div>
              {/**border style */}
              <div className='border-y mt-5'></div>
              {/**availability */}
              <div className='pt-5'>
                <h2 className='text-lg font-bold capitalize'>availability</h2>
                <div className='pt-4'>
                  <input
                    type='radio'
                    id='radio1'
                    name='radioGroup'
                    value='option1'
                  />
                  <label for='radio1' className='text-lg  pl-2 capitalize'>
                    available(13)
                  </label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='radio2'
                    name='radioGroup'
                    value='option2'
                    className='mt-3'
                  />
                  <label for='radio2' className='text-lg  pl-2 capitalize'>
                    in stock(34)
                  </label>
                </div>

                <div>
                  <input
                    type='radio'
                    id='radio3'
                    name='radioGroup'
                    value='option3'
                    className='mt-4'
                  />
                  <label for='radio3' className='text-lg  pl-2 capitalize'>
                    not availabilable(7)
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/**right */}
          <div>
            <h2 className='text-lg font-bold pl-28 pt-8 capitalize'>
              Lastest Blogs
            </h2>
            <div className='flex justify-between items-center'>
              {/**left */}
              <div className='flex ml-28 space-x-5'>
                <FaList />
                <FaThList />
              </div>
              {/**right input */}
              <div className='flex space-x-5 mr-[7rem]'>
                <p className='text-base font-medium capitalize'>sort by:</p>
                <select className='w-64 h-8 bg-slate-100 border-2 rounded capitalize'>
                  <option>best sellers</option>
                  <option>relevance</option>
                  <option>name, A to Z</option>
                  <option>name, Z to A</option>
                  <option>price, low to high</option>
                  <option>price, high to low</option>
                </select>
              </div>
            </div>
            {/**right List */}
            <div className='flex flex-wrap justify-center gap-8 mt-12'>
              {/**right card one */}
              <div className='bg-white w-96 h-[110vh] text-black'>
                <img
                  src='https://demo74leotheme.b-cdn.net/prestashop/leo_delicioz_demo/24-large_default/hummingbird-printed-t-shirt.jpg'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-6  pl-4 capitalize'>
                  spaghetti past
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-4 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
              {/**card two */}
              <div className='bg-white w-96 h-[110vh] text-black '>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAqti-5kMbUHiv29UV_T4JeST6yfJO8_a5nprPesYH9E-ROZaGzkUwlGR-_ctiw0vQzk&usqp=CAU'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-8 pl-4 capitalize'>
                  delicious food pizza
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilTwoClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-5 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
              {/**card three */}
              <div className='bg-white w-96 h-[110vh] text-black '>
                <img
                  src='https://www.mashed.com/img/gallery/the-real-difference-between-cheap-and-expensive-sushi/intro-1589133111.jpg'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-8 pl-4 capitalize'>
                  find out the value of sushi
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilThreeClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-5 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
              {/**card four */}
              <div className='bg-white w-96 h-[110vh] text-black '>
                <img
                  src='https://c4.wallpaperflare.com/wallpaper/771/93/160/food-burger-hd-wallpaper-preview.jpg'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-8 pl-4 capitalize'>
                  classic proportion burger
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilFourClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-5 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
              {/**card five */}
              <div className='bg-white w-96 h-[110vh] text-black '>
                <img
                  src='https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/priya-suresh15433852825bfe30c11655c.jpeg'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-8 pl-4 capitalize'>
                  malawah somali recipe
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilFiveClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-5 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
              {/**card six */}
              <div className='bg-white w-96 h-[110vh] text-black '>
                <img
                  src='https://img.freepik.com/premium-photo/plate-fried-chicken-with-fire-background_900101-32098.jpg'
                  alt=''
                  className='w-[100%] h-[50vh]'
                />
                {/**sub title */}
                <a className='capitalize relative top-4 left-3'>
                  posted by: <strong>news in: healthy food</strong>
                </a>
                <div className='flex items-center justify-center space-x-8 mt-8'>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaShare className='mr-2' />
                    share
                  </div>
                  <div className='flex items-center  bg-green-700 w-24  text-white capitalize'>
                    <FaFacebookF className='mr-1' />
                    facebook
                  </div>
                  <div className='flex items-center  bg-green-700 w-24 pl-3 text-white capitalize'>
                    <FaTwitter className='mr-2' />
                    twitter
                  </div>
                </div>
                <h2 className='text-xl font-semibold pt-8 pl-4 capitalize'>
                  a plate of fried chicken
                </h2>
                <p className='pt-4 pl-4'>
                  Why do we use it? It is a long established fact
                  <br />
                  that a reader will be distracted by the readable
                  <br />
                  content of a page when looking at its layout.
                </p>
                <p className='text-lg font-semibold pt-4 pl-4'>$12.99 USD</p>
                <button
                  onClick={handleDeatilSixClick}
                  className='border-lime-700 border-2 w-36 h-10 mt-4 ml-5 text-lg text-black capitalize cursor-pointer'
                >
                  shop now
                </button>
              </div>
            </div>
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

export default Blog;
