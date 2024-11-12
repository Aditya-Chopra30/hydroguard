import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    

    return (
        <div className="navbar bg-amber-50 text-black p-4">
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={logo1} alt="Logo" className='h-8 mr-2' />
                    <p className='text-black font-semibold text-xl'>Hydroguard</p>
                </div>
                <div className='text-black hidden md:flex items-center space-x-4'>
                    <Link to='/' className={`nav-link ${menu === 'home' ? 'active' : ''}`} onClick={() => setMenu('home')}>Home</Link>
                    <Link to='/about' className={`nav-link ${menu === 'About' ? 'active' : ''}`} onClick={() => setMenu('About')}>About</Link>
                    <Link to='/contact' className={`nav-link ${menu === 'Contact' ? 'active' : ''}`} onClick={() => setMenu('Contact')}>Contact</Link>
                    <Link to='/Team' className={`nav-link ${menu === 'Team' ? 'active' : ''}`} onClick={() => setMenu('Team')}>Team</Link>
                </div>
                <div className='flex items-center'>
                    <Link to='/signup' className={`nav-link ${menu === 'Signup' ? 'active' : ''}`} onClick={() => setMenu('Signup')}><button className='mr-4'>SignUp</button></Link>
                    <Link to='/login' className={`nav-link ${menu === 'loginform' ? 'active' : ''}`} onClick={() => setMenu('loginform')}><button className='mr-4'>Login</button></Link>
                    
                </div>
            </div>
            <div className='md:hidden mt-4 flex justify-between items-center'>
            </div>
        </div>
    );
};

export default Navbar;
