import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import { features } from '../../utils/features';
import { blogs } from '../../utils/blogs';
import { plans } from '../../utils/plans';
import Footer from '../Footer/Footer';
import { reviews } from '../../utils/reviews';
import About from '../About/About';
import { useEffect, useState } from 'react';
import { story } from '../../utils/story';
import { achievements } from '../../utils/achievements';

function App() {
  const [isMobile, setIsMobile] = useState(window.screen.width < 600);
  const [isLaptop, setIsLaptop] = useState(window.screen.width <= 1600 && window.screen.width >= 600);
  useEffect(() => {
    setIsLaptop(window.screen.width <= 1600 && window.screen.width >= 600);
    setIsMobile(window.screen.width < 600)
  }, [window.screen.width]);
  const [isMenuOpen, setMenuOpen] = useState(false);


  return (
    <div className="page">
      <Header isMobile={isMobile}/>
      <Routes>
        <Route path='/about' element={<About story={story} achievements={achievements}/>}/>
        <Route path='/' element={<Home features={features} blogs={blogs} plans={plans} reviews={reviews}
          isLaptop={isLaptop} isMobile={isMobile}/>}/>
      </Routes>
      <Footer isMobile={isMobile}/>
    </div>
  );
}

export default App;
