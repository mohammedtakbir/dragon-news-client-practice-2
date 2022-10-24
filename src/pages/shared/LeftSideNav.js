import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5001/news-categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='font-semibold text-2xl'>News Categories</h2>
            <div className='mt-5'>
                {
                    categories.map(category => <NavLink 
                    key={category.id}
                    to={`/categories/${category.id}`}
                    /* style={(isActive) => {
                        return isActive ? {fontWeight: 'bold'} : undefined
                    }} */
                    >
                    <p className='mt-3 hover:font-semibold'>{category.name}</p>
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;