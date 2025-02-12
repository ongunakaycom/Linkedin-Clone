"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch, FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaCaretDown, FaTh, FaBars } from "react-icons/fa";
import { Container, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap"; // Import Bootstrap components
import './header.css';

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Navbar id="main-header" bg="dark" variant="dark" fixed="top" expand="lg" className="p-3">
      <Container className="header-container">
        {/* Logo and Search Bar */}
        <div className="d-flex align-items-center gap-3">
          {/* Logo */}
          <div style={{ width: "40px", height: "40px", position: "relative" }}>
            <Image src="/linkedin.png" alt="LinkedIn" layout="fill" objectFit="contain" />
          </div>

          {/* Search Bar */}
          <InputGroup className="search-bar">
            <InputGroup.Text className="bg-light">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </InputGroup>
        </div>

        {/* Mobile Menu Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="d-lg-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={24} className="text-white" />
        </Navbar.Toggle>

        {/* Navigation Menu */}
        <Navbar.Collapse id="navbar-nav" className={`justify-content-end ${isMenuOpen ? "show" : ""}`}>
          <Nav className="align-items-center gap-4">
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaHome className="fs-5" />
                <div>Home</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaUserFriends className="fs-5" />
                <div>My Network</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaSuitcase className="fs-5" />
                <div>Jobs</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaEnvelope className="fs-5" />
                <div>Messaging</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaBell className="fs-5" />
                <div>Notifications</div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <Image src="/picture.jpeg" alt="Profile" width={30} height={30} className="rounded-circle" />
                <div>Me <FaCaretDown /></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white text-center">
                <FaTh className="fs-5" />
                <div>Work <FaCaretDown /></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="premium-button">
              Try Premium Free for 1 Month
            </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;