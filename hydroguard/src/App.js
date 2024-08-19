import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;