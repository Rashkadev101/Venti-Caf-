import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Blog from './components/Blog';
import Page from './components/Page';
import Contact from './components/Contact';

export function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/page' element={<Page />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
