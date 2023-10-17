import React from 'react';

const NavLink = ({ href, title, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick} 
      className="block py-1 pl-2 pr-3 text-white hover:text-gray-400 sm:text-base rounded md:p-0 transition-all duration-300 ease-in-out cursor-pointer">
      {title}
    </a>
  );
};



export default NavLink;