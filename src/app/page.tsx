'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaSearch, FaComments, FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaCaretDown, FaTh } from 'react-icons/fa';

const Header = () => {
  if (typeof window === 'undefined') return null; // Ensure safe execution in SSR environments
  
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header id="main-header" className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Image src="/images/linkedin.png" alt="LinkedIn" width={40} height={40} />
        
        {/* Search Bar */}
        <div className="relative flex items-center border rounded-md px-2">
          <FaSearch className="absolute left-2 text-gray-500" />
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="pl-8 pr-2 py-1 border-none focus:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6">
          <li className="flex flex-col items-center cursor-pointer">
            <FaHome className="text-xl" />
            <span>Home</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FaUserFriends className="text-xl" />
            <span>My Network</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FaSuitcase className="text-xl" />
            <span>Jobs</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FaEnvelope className="text-xl" />
            <span>Messaging</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Image src="/images/picture.jpeg" alt="Profile" width={30} height={30} className="rounded-full" />
            <span>Me <FaCaretDown /></span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FaTh className="text-xl" />
            <span>Work <FaCaretDown /></span>
          </li>
          <li>
            <a href="#" className="text-blue-600 font-semibold">Try Premium Free for 1 Month</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
