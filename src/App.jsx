import Header from './components/Header';
import HeroSec from './components/Hero';
import ForWho from './components/ForWho';

const App = () => {
  return (
    <div className='m-0 p-0 box-border font-primary'>
      <div className='flex flex-col justify-between items-center gap-20'>
        <Header />

        <HeroSec />
        <ForWho />

        
      </div>
      
    </div>
  )
}

export default App;