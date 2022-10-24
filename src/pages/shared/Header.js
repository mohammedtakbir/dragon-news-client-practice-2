import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-slate-300 mb-3'>
            <div className='container mx-auto flex justify-between items-center md:p-0 p-5'>
                <Link to='/'>
                    <p className='md:text-3xl text-2xl font-medium py-4'>Dragon News</p>
                </Link>
                <ul className='flex'>
                    <li className='ml-9 text-xl font-medium'>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li className='ml-9 text-xl font-medium'>
                        <NavLink to='/login'>LogIn</NavLink>
                    </li>
                    <li className='ml-9 text-xl font-medium'>
                        <NavLink to='signup'>SignUp</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;