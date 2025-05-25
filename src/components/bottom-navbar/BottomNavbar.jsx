import React from 'react';
import NavItem from './NavItem';
import { Heart, Home, Search, User } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: Home, key: 'home', to: '/' },
  { label: 'Search', icon: Search, key: 'search', to: '/search' },
  { label: 'Wishlist', icon: Heart, key: 'wishlist', to: '/wishlist' },  
  { label: 'Profile', icon: User, key: 'profile' , to: '/profile' },
];

export default function BottomNavbar() {
  return (
    <div className="w-full  sm:hidden h-16 mt-5 bg-white border-t fixed bottom-0 left-0 z-50 flex items-center justify-around text-white">
      {navItems.map((item) => (
        <NavItem
          key={item.key}
          icon={<item.icon size={24} />}
          label={item.label}
          to={item.to}
          // Uncomment and provide logic if needed
          // isActive={activeTab === item.key}
          // onClick={() => handleTabClick(item.key)}
        />
      ))}
    </div>
  );
}
