import React from 'react';

const NavLinks = [
    {
        id: 1,
        name: 'Dashboard',
        link: '/#',
    },
    {
        id: 2,
        name: 'History',
        link: '/#',
    },
    {
        id: 3,
        name: 'Support',
        link: '/#',
    },
];

const Navbar = () => {
  return (
    <>
      <div className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
        <div className='container flex justify-between py-4 sm:py-3 px-6'>
          {/* Logo */}
          <div className='font-bold text-blue-600 text-2xl'>
            <a href="/#">Infinity Recs</a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center">
            <ul className="flex items-center gap-10">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className="hover:text-blue-500">{name}</a>
                </li>
              ))}
            </ul>
            
            {/* Login Button */}
            <div className='ml-6 border-2 border-black px-3 py-1 rounded-md'>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* To prevent content from being hidden behind the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
