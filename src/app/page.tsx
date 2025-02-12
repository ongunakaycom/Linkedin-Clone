"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch, FaHome, FaUserFriends, FaSuitcase, FaEnvelope, FaBell, FaCaretDown, FaTh, FaBars } from "react-icons/fa";
import { Container, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap"; // Import Bootstrap components
import './header.css';
import Content from './content'; // Import Content component
import Footer from './footer'; // Import Footer component

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Header */}
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
            <Nav className="align-items-center gap-1">
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaHome className="fs-5" />
                  <div className="nav-item-text">Home</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaUserFriends className="fs-5" />
                  <div className="nav-item-text">My Network</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaSuitcase className="fs-5" />
                  <div className="nav-item-text">Jobs</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaEnvelope className="fs-5" />
                  <div className="nav-item-text">Messaging</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaBell className="fs-5" />
                  <div className="nav-item-text">Notifications</div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <Image src="/picture.jpeg" alt="Profile" width={30} height={30} className="rounded-circle" />
                  <div className="nav-item-text">Me <FaCaretDown /></div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white text-center">
                  <FaTh className="fs-5" />
                  <div className="nav-item-text">Work <FaCaretDown /></div>
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

      {/* Render Content and Footer */}
      <Content />
      <Footer />
    </>
  );
};

export default Header;