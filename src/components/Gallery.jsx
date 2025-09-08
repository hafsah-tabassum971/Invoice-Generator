import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Gallery = () => {
  const [invoices, setInvoices] = useState([]);

  // Function to fetch invoices from localStorage
  const fetchInvoices = () => {
    const saved = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(saved);
  };

  // Load invoices initially
  useEffect(() => {
    fetchInvoices();

    // Listen for changes to localStorage (when new invoice is added/deleted)
    const handleStorageChange = () => {
      fetchInvoices();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Wrapper>
      <Content>
        <Title>Invoice Gallery</Title>
        <Description>
          Scroll through all the invoices you’ve generated.
        </Description>

        {invoices.length > 0 ? (
          <Slider>
            {invoices.map((inv, index) => (
              <Slide key={inv.id || index}>
                <Card>
                  <h3>{inv.client}</h3>
                  <p>
                    <strong>Service:</strong> {inv.service}
                  </p>
                  <p>
                    <strong>Amount:</strong> ${inv.amount}
                  </p>
                  <p>
                    <strong>Date:</strong> {inv.date}
                  </p>
                </Card>
              </Slide>
            ))}
          </Slider>
        ) : (
          <EmptyText>No invoices yet. Create one on the Home page!</EmptyText>
        )}
      </Content>
    </Wrapper>
  );
};

export default Gallery;

// ---------------- Styled Components ----------------
// ---------------- Styled Components ----------------
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: radial-gradient(circle at top left, #0d1b2a, #000);
  padding: 3rem 2rem;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #61dafb, #21a1f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #d1d1d1;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(97, 218, 251, 0.6);
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    flex: 0 0 250px;
  }

  @media (max-width: 480px) {
    flex: 0 0 200px;
  }
`;

const Card = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 8px 20px rgba(97, 218, 251, 0.5);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    color: #61dafb;
  }

  p {
    font-size: 1rem;
    color: #d1d1d1;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    width: 250px;
    padding: 1.3rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 1rem;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const EmptyText = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
