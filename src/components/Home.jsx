import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

import {
  FaBars,
  FaLeaf,
  FaLocationArrow,
  FaShoppingBag,
  FaStar,
  FaStarHalf,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import DetailsCardOne from '../pages/DetailsCardOne';
import DetailsCardTwo from '../pages/DetailsCardTwo';
import DetailsCardThree from '../pages/DetailsCardThree';
import DetailsCardFour from '../pages/DetailsCardFour';
import DetailsCardFive from '../pages/DetailsCardFive';
import DetailsCardSix from '../pages/DetailsCardSix';

('../index.css');

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showdeatil, setShowDeatil] = useState(false);
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

  if (showdeatil) {
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
        <header>
          <div className=' flex justify-between items-center py-4'>
            {/**left */}

            <div className='flex items-center  pl-14 relative -top-6 '>
              <h2 className='text-green-800 text-4xl  font-black pt-10 pl-3 cursor-pointer capitalize'>
                <FaLeaf className='relative top-2' />
                rashid{' '}
                <strong className='text-white text-4xl font-medium'>
                  cafe
                </strong>
              </h2>
            </div>
            {/**center */}
            <div className='hidden md:hidden sm:hidden lg:flex '>
              <nav className=' flex items-center space-x-7  '>
                <Link
                  to='/'
                  className='text-white text-lg capitalize cursor-pointer'
                >
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
            </div>
            {/**right */}
            <div className='hidden  sm:hidden md:hidden lg:flex'>
              <div className='flex space-x-4 pr-14 '>
                <div className='bg-slate-600 w-10 h-10 py-3 text-white px-3 rounded-full cursor-pointer'>
                  <FaShoppingBag />
                </div>
                <button
                  onClick={handleLoginClick}
                  className='bg-green-800 w-28 h-10 text-slate-100 text-lg capitalize round'
                >
                  log in
                </button>
              </div>
            </div>
            {/**menu icon */}
            <div className='hidden sm:block md:block lg:hidden'>
              <button className='text-white px-14'>
                <FaBars />
              </button>
            </div>
          </div>
          <div className=' pl-14 pt-28 '>
            {/**header title */}
            <h2 className='text-5xl text-white font-bold capitalize'>
              order delivery near you
            </h2>
            <h3 className='text-white text-2xl px-3 py-4 capitalize'>
              enjoy healty life our happy customer
            </h3>
            <div className='flex flex-wrap items-center space-x-6'>
              <div className='flex my-8'>
                <div className='bg-green-700 w-12 px-3 py-3 text-white text-lg rounded-l-md'>
                  <FaLocationArrow />
                </div>
                <input
                  type='text'
                  placeholder='what`s your address?'
                  className='w-[80vh] h-11 px-12 hover:focus:outline-none rounded-r-md'
                />
                <button
                  onClick={handleDeatilClick}
                  className='bg-green-700 relative  -left-28 top-1 h-9 w-24 text-white text-sm font-semibold cursor-pointer capitalize rounded'
                >
                  find food
                </button>
              </div>

              <div></div>
            </div>
            <h4 className='text-white capitalize'>
              not yet menber?
              <Link to='./contact' className='text-green-700 cursor-pointer'>
                {' '}
                sign up
              </Link>{' '}
              now
            </h4>
          </div>
        </header>
        {/**image animations */}
        <div className='imageAnimations'>
          <div className='photoOne'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZupfx5ikzsw2EtJdF4MCt7trIxBHEJ8ZJg&usqp=CAU'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.eatingwell.com/thmb/Tlv07okDUzPb5Jy2is0Tl82Jjf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-caesar-960-1bf8b1bb58364f31965b1c3368dae7e3.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Roast-Chicken-Wide-FS-and-Foodporn-8.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://wembleypark.com/media/images/Wagamama_in_London_Designer_Outle.2e16d0ba.fill-1200x630.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://img.freepik.com/premium-photo/variety-sweets-pastry-traditional-eastern-dessert-eastern-sweets-wide-range-generative-ai_874904-9044.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.themediterraneandish.com/wp-content/uploads/2021/05/citrus-salmon-recipe-10.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://wecountcarbs.com/wp-content/uploads/2021/07/Grilled-whole-fish.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqdEwbtqevgdCg4XsKyPemq9OomQMNQGLeQkzkDMCntAJavOtAZx9HKQdZq5-bHVDRmA&usqp=CAU'
              alt=''
              className='photoItem'
            />
            <img
              src='https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.easypeasyfoodie.com/wp-content/uploads/2023/08/Homemade-Nando_s-Boneless-Chicken-Thighs-Hero-1.jpg'
              alt=''
              className='photoItem'
            />
          </div>
          {/**photo two */}
          <div className='photoTwo'>
            <img
              src='https://hyperli.com/cdn/shop/products/chicken-chips-1_d7xw.webp?v=1682334966'
              alt=''
              className='photoItem'
            />
            <img
              src='https://us.123rf.com/450wm/millania/millania2308/millania230800134/210621176-pizza-with-meat-and-cheese-on-wooden-table-closeup-view.jpg?ver=6'
              alt=''
              className='photoItem'
            />
            <img
              src='https://assets.unileversolutions.com/recipes-v2/218987.png'
              alt=''
              className='photoItem'
            />
            <img
              src='https://imageio.forbes.com/specials-images/imageserve/5f6c061ca71799093f55fd02/Aromatic-herbal-tea-/0x0.jpg?format=jpg&crop=5029,3354,x0,y0,safe&width=960'
              alt=''
              className='photoItem'
            />
            <img
              src='https://b3067249.smushcdn.com/3067249/wp-content/uploads/2022/07/Shawarma-848x477.jpg?lossy=0&strip=1&webp=1'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.tastingtable.com/img/gallery/is-an-americano-with-milk-the-same-thing-as-a-latte/l-intro-1670524321.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://www.dualit.com/cdn/shop/files/Espresso-Coffee-Machine-1.jpg?v=1685973710&width=480'
              alt=''
              className='photoItem'
            />
            <img
              src='https://img.kidspot.com.au/bvTRedBv/w643-h428-cfill-q90/kk/2017/04/4713-501113-1.jpg'
              alt=''
              className='photoItem'
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMD0dvhCqaMU_uFmBjowHx8uRJfBYrOt3GBicxX0iWJU4s7ENWX7kFkuOOrz9Q3dBOuQ&usqp=CAU'
              alt=''
              className='photoItem'
            />
            <img
              src='https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_08/story_55314/assets/2.jpeg?time=1691768874&size=*:900'
              alt=''
              className='photoItem'
            />
          </div>
        </div>
        <h1 className='text-5xl text-center font-black  capitalize sm:p-6'>
          Up to 35% off - Meal Deals
        </h1>
        <p className='text-center text-xl font-medium pt-5 p-5 '>
          Need a midweek pick-me-up, a break from cooking for the family or just{' '}
          <br />
          fancy your favourite restaurant?
        </p>
        {/**sub Hero */}
        <div className='h-[155vh]'>
          {/**Grid cards start here.. */}
          <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-16'>
            {/**card one */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://www.howtocook.recipes/wp-content/uploads/2020/09/pancake-recipe-500x375.jpg'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                pancake recipe
              </h2>
              <p className='font-semibold'>$11.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilFourClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card two */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://www.thespruceeats.com/thmb/K7WkHCGkgnIBE8ZhS4tX15dljoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/malawah-somali-sweet-pancake-39501-step-06-3ce8f6de48fd406aa71160e109fb0a0c.jpg'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                malawah somali recipe
              </h2>
              <p className='font-semibold'>$9.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card three */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://www.thecookierookie.com/wp-content/uploads/2021/07/featured-crispy-chicken-sandwich-recipe.jpg'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                Chicken sandwich recipe
              </h2>
              <p className='font-semibold'>$12.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilTwoClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card four */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://www.gastrosenses.com/wp-content/uploads/2018/05/Grilled-Chicken-Shawarma-Pita-Pockets.jpg'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                drilled Chicken Shawarma
              </h2>
              <p className='font-semibold'>$8.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilThreeClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card five */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_HtA_EUqBWX1K3DrCP9pHIwUwEAZW4YF7A&usqp=CAU'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                oodkac, canjeelo, timir
              </h2>
              <p className='font-semibold'>$11.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilFiveClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card six */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://i.ytimg.com/vi/bKE-fAA8QhE/maxresdefault.jpg'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                bariis iyo hilib
              </h2>
              <p className='font-semibold'>$14.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button
                onClick={handleDeatilSixClick}
                className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'
              >
                buy now
              </button>
            </div>
            {/**card one */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://lovefoodnourish.com/wp-content/uploads/2018/02/Fish-Salad-Mediterranean'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                med/greek salad
              </h2>
              <p className='font-semibold'>$12.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'>
                buy now
              </button>
            </div>
            {/**card one */}
            <div className='shadow-md w-72 h-[70vh] py-5 text-center'>
              <img
                src='https://5.imimg.com/data5/XA/VG/GLADMIN-69655639/garlic-lemon-chicken-pizza-500x500.png'
                alt=''
                className='w-64 h-44 object-cover m-auto rounded-md'
              />
              <h2 className='py-6 text-xl font-bold capitalize'>
                small lemon chicken pizza
              </h2>
              <p className='font-semibold'>$14.99 USD</p>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <button className='bg-green-700 text-white text-lg rounded-md capitalize cursor-pointer  my-6 w-44 h-11'>
                buy now
              </button>
            </div>
          </div>
        </div>

        {/**districts */}
        <div className='w-full h-[100vh] max-sm:h-[140vh]'>
          <h2 className='text-center text-4xl font-black capitalize pt-28'>
            Districtes where we deliver 🔥
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-9 mt-24'>
            {/**districts items */}
            {/**item 1 */}
            <div className='bg-slate-300 w-32 h-10 text-xl text-center  font-bold pt-1 rounded-md capitalize'>
              waaberi
            </div>
            <div className='bg-slate-400 w-32 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              hodan
            </div>
            <div className='bg-slate-500 w-32 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              wadajir
            </div>
            <div className='bg-slate-600 w-32 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              kaaraan
            </div>
            <div className='bg-slate-700 w-32 h-10 text-xl text-center text-slate-100 font-bold pt-1 rounded-md capitalize'>
              shipis
            </div>
            <div className='bg-slate-800 w-32 h-10 text-xl text-center text-slate-200 font-bold pt-1 rounded-md capitalize'>
              helwaa
            </div>
            <div className='bg-slate-900 w-32 h-10 text-xl text-center text-white font-bold pt-1 rounded-md capitalize'>
              shingaani
            </div>
            <div className='bg-green-100 w-32 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              kaxda
            </div>
            <div className='bg-green-200 w-32 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              dayniile
            </div>
            <div className='bg-green-300 w-36 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              boondheere
            </div>
            <div className='bg-green-400 w-36 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              yaaqshid
            </div>
            <div className='bg-green-500 w-36 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              holwadaag
            </div>
            <div className='bg-green-600 w-44 h-10 text-xl text-center font-bold pt-1 rounded-md capitalize'>
              wartanabadda
            </div>
            <div className='bg-green-700 w-36 h-10 text-xl text-center text-slate-100 font-bold pt-1 rounded-md capitalize'>
              xamar jajab
            </div>
            <div className='bg-green-800 w-40 h-10 text-xl text-center text-slate-200 font-bold pt-1 rounded-md capitalize'>
              xamar weyne
            </div>
            <div className='bg-green-900  w-36 h-10 text-xl text-center text-slate-300 font-bold pt-1 rounded-md capitalize'>
              cabdicasiis
            </div>
            <div className='bg-green-950  w-36 h-10 text-xl text-center text-white font-bold pt-1 rounded-md capitalize'>
              dharkeenleey
            </div>
          </div>
        </div>
        {/**Sub card */}
        <h1 className='text-center text-5xl font-black capitalize'>
          the best experience
        </h1>
        <p className='text-center text-base font-medium py-8'>
          Where can I get some? There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration
          <br /> in some form, by injected humour, or randomised words which
          don't look even slightly believable.
        </p>
        <div className='flex py-12 justify-center bg-slate-200 h-[130vh]'>
          {/**left */}
          <div className='flex flex-wrap space-x-5 '>
            {/**card01 */}
            <div className='flex space-x-5 px-5'>
              <img
                src='https://imageio.forbes.com/specials-images/imageserve/5f6c061ca71799093f55fd02/Aromatic-herbal-tea-/0x0.jpg?format=jpg&crop=5029,3354,x0,y0,safe&width=960'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>
                  aromatic herbal tea
                </h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-3'>$4.99 USD</p>
              </div>
            </div>
            {/**card02 */}
            <div className='flex space-x-5'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMD0dvhCqaMU_uFmBjowHx8uRJfBYrOt3GBicxX0iWJU4s7ENWX7kFkuOOrz9Q3dBOuQ&usqp=CAU'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>
                  cake strawberry
                </h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-4'>$12.99 USD</p>
              </div>
            </div>
            {/**card03 */}
            <div className='flex space-x-5'>
              <img
                src='https://img.freepik.com/premium-photo/variety-sweets-pastry-traditional-eastern-dessert-eastern-sweets-wide-range-generative-ai_874904-9044.jpg'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>
                  variety of sweets
                </h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-4'>$14.99 USD</p>
              </div>
            </div>
            {/**card04 */}
            <div className='flex space-x-5 px-6'>
              <img
                src='https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_08/story_55314/assets/2.jpeg?time=1691768874&size=*:900'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>green tea</h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-4'>$3.99 USD</p>
              </div>
            </div>
            {/**card05 */}
            <div className='flex space-x-5'>
              <img
                src='https://b3067249.smushcdn.com/3067249/wp-content/uploads/2022/07/Shawarma-848x477.jpg?lossy=0&strip=1&webp=1'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>
                  Shawarma somali
                </h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-4'>$11.99 USD</p>
              </div>
            </div>
            {/**card06 */}
            <div className='flex space-x-5 px-5'>
              <img
                src='https://wecountcarbs.com/wp-content/uploads/2021/07/Grilled-whole-fish.jpg'
                alt=''
                className='w-40 h-32 object-cover rounded-md'
              />
              {/**title */}
              <div>
                <h3 className='text-xl font-bold capitalize'>
                  fish salad lemon
                </h3>
                <p className='py-2'>
                  Where can I get some? There are
                  <br /> many Lorem Ipsum.
                </p>
                <p className='font-extrabold py-4'>$9.99 USD</p>
              </div>
            </div>
          </div>
          {/**right */}
          <div className='w-[80%] px-8'>
            <img
              src='https://cdn.shopify.com/s/files/1/0577/9675/5633/files/leo_delicioz_h2_menu_img3.jpg?v=1659665078'
              alt=''
              className=' h-[95vh]'
            />
          </div>
        </div>

        {/**serveces */}
        <div className=' bg-slate-50 h-[110vh] max-sm:h-[250vh]'>
          <p className='text-center text-lg font-medium pt-10 capitalize'>
            what we do
          </p>
          <h2 className='text-center text-3xl font-black pt-5 capitalize'>
            Our Services is reday! 🔥
          </h2>
          <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-16'>
            <div className='bg-slate-100 text-slate-700 w-96 h-96 pt-20'>
              <h3 className='text-xl text-center font-black capitalize'>
                FAST DELIVERY
              </h3>
              <p className='text-lg text-center pt-9 p-3'>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters,
              </p>
            </div>
            <div className='bg-purple-800 text-slate-300 w-96 h-96 pt-20'>
              <h3 className='text-xl text-center font-black capitalize'>
                QUALITY FOODS
              </h3>
              <p className='text-lg text-center pt-9 p-3'>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters,
              </p>
            </div>
            <div className='bg-green-700 w-96 h-96 pt-20 text-slate-300'>
              <h3 className='text-xl text-center font-black capitalize'>
                ORIGINAL RECIPES
              </h3>
              <p className='text-lg text-center pt-9 p-3'>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters,
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
