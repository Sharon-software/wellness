import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Book from './pages/Book';
import About from './pages/About';
import Corporate from './pages/Corporate';
import Government from './pages/Government';
import Schools from './pages/Schools';

function App() {
  return (
    <>
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/about' element={<About />} />
        <Route path='/corporate' element={<Corporate />}></Route>
        <Route path='/schools' element={<Schools />}></Route> 
        <Route path='/government' element={<Government />}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App
