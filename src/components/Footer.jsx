import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>© {new Date().getFullYear()} Invoice Generator. All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;

// ---------------- Styled Components ----------------
const Wrapper = styled.footer`
  background: #0d1b2a;
  color: #fff;
  text-align: center;
  padding: 1.5rem 1rem;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
