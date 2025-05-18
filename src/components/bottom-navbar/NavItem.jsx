import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ icon: Icon, label, to, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center py-2 px-6 w-full transition-colors duration-200 ${
          isActive ? 'text-red-600' : 'text-gray-500'
        } hover:text-black`
      }
      onClick={onClick}
    >
      <div className="mb-1">{Icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  );
}
