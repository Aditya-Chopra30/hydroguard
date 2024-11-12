import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Team from './Component/Team/Team';
import Signup from './Component/Signup/Signup';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
