import React from "react";
import styled from "styled-components";
import { FaRocket, FaFileInvoiceDollar, FaUsers, FaShieldAlt } from "react-icons/fa";

const WhyBest = () => {
  const points = [
    {
      icon: <FaRocket />,
      title: "Fast & Easy",
      desc: "Create professional invoices in seconds with a simple, user-friendly interface.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Customizable Invoices",
      desc: "Add your business details, and client information for a personalized touch.",
    },
    {
      icon: <FaUsers />,
      title: "Perfect for Freelancers & Businesses",
      desc: "Whether you’re a freelancer or a small business owner, manage your clients effortlessly.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Reliable",
      desc: "Your data stays secure with offline generation and download options.",
    },
  ];

  return (
    <Wrapper  id="about">
      <Content>
        <Title>Why Choose Our Invoice Generator?</Title>
        <Description>
          Discover the key reasons freelancers, startups, and businesses trust our tool.
        </Description>
        <Grid>
          {points.map((p, i) => (
            <Card key={i}>
              <IconWrapper>{p.icon}</IconWrapper>
              <CardTitle>{p.title}</CardTitle>
              <CardDesc>{p.desc}</CardDesc>
            </Card>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default WhyBest;

// ---------------- Styled Components ----------------
const Wrapper = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #0d1b2a 0%, #000 100%);
  color: white;
    @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d1d1;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
    @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

// const Card = styled.div`
//   background: #11224055;
//   border-radius: 15px;
//   padding: 2rem;
//   transition: transform 0.3s, box-shadow 0.3s;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 20px rgba(97, 218, 251, 0.7);
//   }
// `;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #61dafb;
  margin-bottom: 1rem;
    @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
`;

const Card = styled.div`
  background: #11224055;
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 280px; /* ensures equal height */
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.7);
  }
   @media (max-width: 768px) {
    min-height: 240px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 1.2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  color: #61dafb;
  min-height: 3.5rem; /* equal space for titles */
  display: flex;
  align-items: center;
  justify-content: center;
    @media (max-width: 768px) {
    font-size: 1.3rem;
    min-height: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    min-height: auto;
  }
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #d8e9f0;
  line-height: 1.6;
  min-height: 4.5rem; /* equal space for descriptions */
  display: flex;
  align-items: center;
  justify-content: center;
    @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
    min-height: 3.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    min-height: auto;
  }
`;

