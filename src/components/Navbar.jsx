import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <Nav>
      <Logo>
        Gen<span>Invoice</span>
      </Logo>

      {/* Desktop Menu */}
      <Menu>
                <MenuItem onClick={() => handleScroll("about")}>About</MenuItem>
        <MenuItem onClick={() => handleScroll("features")}>Features</MenuItem>
        <MenuItem onClick={() => handleScroll("faqs")}>FAQs</MenuItem>
        <Button onClick={() => handleScroll("/")}>Try Now</Button>
      </Menu>

      {/* Mobile Icon */}
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </MobileIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
                <MenuItem onClick={() => handleScroll("about")}>About</MenuItem>
        <MenuItem onClick={() => handleScroll("features")}>Features</MenuItem>
        <MenuItem onClick={() => handleScroll("faqs")}>FAQs</MenuItem>
        <Button onClick={() => handleScroll("/")}>Try Now</Button>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;


// ---------------- Styled Components ----------------

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #0a0f1c, #0a0f1cdd);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  z-index: 1000;
  box-sizing: border-box;
    @media (max-width: 768px) {
    padding: 1rem 1.5rem; /* reduce side padding on mobile */
  }
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;

  span {
    background: linear-gradient(45deg, #61dafb, #007bff);
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  color: white;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  transition: 0.3s;

  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: #61dafb;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    color: #61dafb;
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(90deg, #61dafb, #007bff);
  color: white;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.4);
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  right: ${({ isOpen }) => (isOpen ? "20px" : "-100%")};
  width: 200px;
  background: rgba(10, 10, 25, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: right 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;
