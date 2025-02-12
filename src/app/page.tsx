"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBars, FaSearch, FaComments, FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaCaretDown, FaTh } from 'react-icons/fa';

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  if (!isClient) return null; // Avoid rendering on the server to prevent mismatch

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} priority />
        
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
            <Image src="/picture.jpeg" alt="Profile" width={30} height={30} className="rounded-full" />
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
