import { Route, Routes } from 'react-router';
import Header from '../Header/Header';
import './App.scss';
import Home from '../Home/Home';

function App() {
  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
