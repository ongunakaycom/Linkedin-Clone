"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch, FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaCaretDown, FaTh, FaBars } from "react-icons/fa";
import './header.css'; // Importing the header styles

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  if (!isClient) return null; // Avoid rendering on the server to prevent mismatch

  return (
    <header className="bg-[#283c4a] p-3 d-flex justify-content-between align-items-center mx-auto w-100" style={{ fontFamily: "'Source Sans Pro', sans-serif", fontSize: "13px" }}>
      <div className="d-flex align-items-center gap-3">
        {/* Logo */}
        <div style={{ width: "40px", height: "40px", position: "relative" }}>
          <Image src="/linkedin.png" alt="LinkedIn" layout="fill" objectFit="contain" />
        </div>

        {/* Search Bar */}
        <div className="input-group">
          <span className="input-group-text bg-light">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="d-lg-none btn btn-link"
        onClick={() => setIsMenuOpen(prevState => !prevState)}
      >
        <FaBars size={24} className="text-white" />
      </button>

      {/* Navigation */}
      <nav className={`d-flex flex-column flex-lg-row align-items-center gap-4 ${isMenuOpen ? "d-block" : "d-none"} d-lg-flex`}>
        <ul className="nav">
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaHome className="fs-5" />
              <div>Home</div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaUserFriends className="fs-5" />
              <div>My Network</div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaSuitcase className="fs-5" />
              <div>Jobs</div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaEnvelope className="fs-5" />
              <div>Messaging</div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaBell className="fs-5" />
              <div>Notifications</div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <Image src="/picture.jpeg" alt="Profile" width={30} height={30} className="rounded-circle" />
              <div>Me <FaCaretDown /></div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="nav-link text-white">
              <FaTh className="fs-5" />
              <div>Work <FaCaretDown /></div>
            </a>
          </li>
          <li className="nav-item text-center mx-2">
            <a href="#" className="text-primary fw-bold">Try Premium Free for 1 Month</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
