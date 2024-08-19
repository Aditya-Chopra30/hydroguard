import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../Assets/logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    

    return (
        <div className="navbar bg-black text-white p-4">
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={logo1} alt="Logo" className='h-8 mr-2' />
                    <p className='font-semibold text-xl'>Hydroguard</p>
                </div>
                <div className='hidden md:flex items-center space-x-4'>
                    <Link to='/' className={`nav-link ${menu === 'home' ? 'active' : ''}`} onClick={() => setMenu('home')}>Home</Link>
                    <Link to='/product' className={`nav-link ${menu === 'product' ? 'active' : ''}`} onClick={() => setMenu('product')}>About</Link>
                    <Link to='/category' className={`nav-link ${menu === 'category' ? 'active' : ''}`} onClick={() => setMenu('category')}>Team</Link>
                    <Link to='/blog' className={`nav-link ${menu === 'blog' ? 'active' : ''}`} onClick={() => setMenu('blog')}>Contact</Link>
                </div>
                <div className='flex items-center'>
                    <Link to='/login' className={`nav-link ${menu === 'loginform' ? 'active' : ''}`} onClick={() => setMenu('loginform')}><button className='mr-4'>Login</button></Link>
                    
                </div>
            </div>
            <div className='md:hidden mt-4 flex justify-between items-center'>
            </div>
        </div>
    );
};

export default Navbar;
