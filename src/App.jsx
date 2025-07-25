import Header from './components/Header';
import HeroSec from './components/Hero';
import ForWhoandProducts from './components/ForWhoandProducts';
import Advantages from './components/Advantages';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

      <div className='m-0 p-0 box-border font-primary'>
        <div className='flex flex-col justify-between items-center gap-20'>

          <Header />

          <HeroSec />
          <ForWhoandProducts />
          <Advantages />
          <Testimonial />
          <Banner />
          
          <Footer />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App;