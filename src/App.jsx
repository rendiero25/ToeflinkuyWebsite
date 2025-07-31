import Header from './components/Header';
import HeroSec from './components/Hero';
import ForWhoandProducts from './components/ForWhoandProducts';
import Advantages from './components/Advantages';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import Footer from './components/Footer';
import SEOSchema from './components/SEOSchema';
// Lazy load performance components only in production
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load heavy components
const PerformanceComponents = lazy(() => 
  import('./components/PerformanceOptimization').then(module => ({
    default: () => {
      const { PreloadCriticalResources, PerformanceMonitor, ServiceWorkerSetup } = module;
      return (
        <>
          <PreloadCriticalResources />
          <PerformanceMonitor />
          <ServiceWorkerSetup />
        </>
      );
    }
  }))
);

const GoogleAnalytics = lazy(() => import('./utils/analytics'));

const App = () => {
  return (
    <BrowserRouter>
      <SEOSchema />
      
      {/* Load performance components only in production */}
      {import.meta.env.PROD && (
        <Suspense fallback={null}>
          <PerformanceComponents />
          <GoogleAnalytics />
        </Suspense>
      )}
      
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