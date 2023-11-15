import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const About = () => {
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
      {/**main about page-- */}
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
        {/** */}
        <div className='h-[90vh]  bg-[url(https://format.creatorcdn.com/810e1661-cb2a-4632-b346-a371ecb003db/0/0/0/0,421,1500,1000,1140,440/0-0-0/d56e6b98-d4d4-4658-9ea0-980bbc05391e/1/2/ramen-1.jpg?fjkss=exp=2014105191~hmac=d95d7572a4ef87d01d102b4c13c985a8a200b3f908829182b6daf3b96047e553)] bg-no-repeat bg-cover bg-center'>
          <h1 className='text-white text-center text-6xl font-black pt-32 capitalize'>
            discover restaurant,
          </h1>
          <h2 className='text-white text-center text-5xl font-extrabold pt-5 capitalize'>
            delicious food!
          </h2>
          <p className='text-white text-center text-lg pt-5'>
            discover a world of culinary bliss ad delicioz
          </p>
          <button className='flex justify-center m-auto mt-5 pt-1 bg-green-700 text-white text-center text-xl w-44 h-10  capitalize cursor-pointer'>
            discover menu
          </button>
        </div>
        {/**about us */}
        <div className='flex justify-between mt-20 p-8 h-[100vh] pt-28'>
          {/**left */}
          <div className='flex space-x-4 w-[50%]'>
            <div>
              <img
                src='https://i.pinimg.com/564x/fc/84/a3/fc84a352f17029ba5d9717b4e4321d02.jpg'
                alt=''
                className='w-72 h-80 object-cover rounded-lg'
              />
            </div>
            <div className='relative -top-12'>
              <img
                src='https://i.pinimg.com/564x/30/33/65/303365082f0e1a9c377050e73d9f245a.jpg'
                alt=''
                className='w-72 h-80 object-cover rounded-lg'
              />
            </div>
            <div>
              <img
                src='https://i.pinimg.com/564x/bf/35/66/bf3566cd10c73edcfb61e041dbb434a1.jpg'
                alt=''
                className='w-72 h-80 object-cover rounded-lg'
              />
            </div>
          </div>
          {/**right */}
          <div className=' w-[50%] ml-20'>
            <h4 className='text-base capitalize font-medium'>our story</h4>
            <h1 className='text-5xl font-black pt-3 capitalize'>
              good food, drinks company.
            </h1>
            <p className='text-base font-normal pt-8'>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable. <br /> content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters,
            </p>
            <div className='flex mt-5'>
              <button className='bg-green-600 w-56 h-10 text-white text-lg capitalize'>
                more about us
              </button>
              <FaArrowRight className='relative -left-9 top-3 text-white' />
            </div>
          </div>
        </div>
        {/**our company */}
        <div className=' h-[100vh]'>
          <h1 className='text-center text-3xl font-bold capitalize pt-7'>
            about us
          </h1>
          <div className='flex justify-center space-x-7 p-7 mt-14'>
            {/**our company */}
            <div className='shadow-md h-96 p-5 bg-slate-50 text-center'>
              <div className='flex justify-center pt-7'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMY2_afWeAIlat10TkdY1SugCLhpKdkeHjE6hFUKn8BliR4oi_KTapWICWaQiEbphWBc&usqp=CAU'
                  alt=''
                  className='w-16 rounded-full'
                />
              </div>
              <h2 className='text-lg font-medium pt-6 capitalize'>
                our company
              </h2>
              <p className='pt-4'>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            {/**our team */}
            <div className='shadow-md h-96 p-5 bg-slate-50 text-center'>
              <div className='flex justify-center pt-7'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9CPihERnNDYdsPMB5LzsZxVsp0qRbhwnpqoybkhbEI85uJ43gq0mSqSS7UZKKXijbM4&usqp=CAU'
                  alt=''
                  className='w-16 rounded-full'
                />
              </div>
              <h2 className='text-lg font-medium pt-6 capitalize'>
                meet our chef
              </h2>
              <p className='pt-4'>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            {/**testimonials*/}
            <div className='shadow-md h-96 p-5 bg-slate-50 text-center'>
              <div className='flex justify-center pt-7'>
                <img
                  src='https://img.freepik.com/premium-vector/food-smile-logo-icon-vector-template_10060-325.jpg'
                  alt=''
                  className='w-16 rounded-full'
                />
              </div>
              <h2 className='text-lg font-medium pt-6 capitalize'>
                testimonials
              </h2>
              <p className='pt-4'>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**one more */}
      <div className=' h-[140vh]'>
        {/**one more title */}
        <div className='py-14'>
          <h1 className='text-4xl text-center font-black'>
            At Venti we are building a Talent House!
          </h1>
          <p className='text-center py-6'>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout.
            <br /> The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters,
          </p>
        </div>
        {/**one more grid */}
        <div className='grid grid-cols-4 place-items-center gap-10 text-white p-14'>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://www.escoffier.edu/wp-content/uploads/2022/03/Smiling-male-chef-with-white-coat-and-hat-768.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3 className='text-xl text-white capitalize'>escoffer</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://hospitalityinsights.ehl.edu/hubfs/AdobeStock_127365449.jpeg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://yti.edu/sites/default/files/field/image/Common-Skills-Needed-to-be-a-Chef.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://assets.telegraphindia.com/telegraph/2023/Mar/1678005095_lead-pic-cooks-and-chefs-must-understand-the-importance-of-technique-in-the-creation-of-recipes.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://images.ctfassets.net/3s5io6mnxfqz/1rpUj0lbF4UraDAIt1eXjr/fbfa8beb2fde3a2686020165e983a7af/AdobeStock_357911175_2.jpeg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/chef-head-cook-salary.png?itok=2G0CZKXD)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://www.careerreadymonroe.org/wp-content/uploads/elementor/thumbs/chef-pffcoehd5gz3zzscyt5cq6fzxdleoz7otwd6hf4a9s.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://www.onlychefs.co.uk/blog/wp-content/uploads/2019/09/Private-versus-Personal-Chef.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://assets-global.website-files.com/6320cc378da6c5bfd305d33e/6331b6c558d4e51b0a831550_PersonalChef_Tyler_Bergquist_Avon_CO.webp)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://www.onlychefs.co.uk/blog/wp-content/uploads/2020/04/Personal-Chef.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://d1zzxdyvtq79bu.cloudfront.net/uploads/images/cache/big/77/93/77935.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
          </div>
          {/**cardone */}
          <div className='w-52 h-32 text-center text-2xl capitalize py-9 bg-[url(https://cdn.tatlerasia.com/tatlerasia/i/2022/02/24111047-best-hong-kong-private-chefs-at-home-dining-experiences_cover_1080x720.jpg)] bg-no-repeat bg-cover bg-center'>
            <h3>card one</h3>
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

export default About;
