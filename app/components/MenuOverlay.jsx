import React from 'react'
import NavLink from './NavLink'

export const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <ul className="flex flex-col py-4 items-center" onClick={() => console.log('Overlay clicked!')}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink 
            href={link.path} 
            title={link.title} 
            onClick={(e) => onLinkClick(e, index)}
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay;
