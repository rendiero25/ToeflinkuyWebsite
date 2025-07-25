import Header from './components/Header';
import HeroSec from './components/Hero';
import ForWhoandProducts from './components/ForWhoandProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

      <div className='m-0 p-0 box-border font-primary'>
        <div className='flex flex-col justify-between items-center gap-20'>

          <Header />

          <HeroSec />
          <ForWhoandProducts />

        </div>
      </div>

    </BrowserRouter>
  )
}

export default App;