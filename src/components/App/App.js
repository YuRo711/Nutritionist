import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';
import { features } from '../../utils/features';
import { blogs } from '../../utils/blogs';

function App() {
  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path='/' element={<Home features={features} blogs={blogs}/>}/>
      </Routes>
    </div>
  );
}

export default App;
