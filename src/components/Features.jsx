import React from "react";
import styled from "styled-components";
import { FaFileInvoice, FaCalculator, FaDownload } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaFileInvoice />,
      title: "Quick Invoice Creation",
      desc: "Generate professional invoices in seconds with client name, service, amount, and date.",
    },
    {
      icon: <FaCalculator />,
      title: "Auto Totals",
      desc: "Keep an eye on your earnings with automatic calculation of total invoice amounts.",
    },
    {
      icon: <FaDownload />,
      title: "Export to PDF",
      desc: "Download invoices as PDF and share them directly with clients for a polished, professional look.",
    },
  ];

  return (
    <Wrapper id="features">
      <Content>
        <Title>Core System Features</Title>
        <Description>
          Discover the tools that make our Invoice Generator simple yet powerful.
        </Description>
        <Timeline>
          {features.map((f, i) => (
            <Step key={i}>
              <Dot />
              <IconWrapper>{f.icon}</IconWrapper>
              <StepContent>
                <StepTitle>{f.title}</StepTitle>
                <StepDesc>{f.desc}</StepDesc>
              </StepContent>
            </Step>
          ))}
        </Timeline>
      </Content>
    </Wrapper>
  );
};

export default Features;
// ---------------- Styled Components ----------------
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top left, #0d1b2a, #000);
  padding: 5rem 2rem;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 950px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3.5rem;
  color: #d1d1d1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  border-left: 3px solid rgba(97, 218, 251, 0.3);

  @media (max-width: 768px) {
    border-left: none;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 3rem;
  transition: all 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 0;
  }
`;

const Dot = styled.div`
  /* position: absolute;
  left: -11px;
  top: 12px;
  width: 15px;
  height: 15px;
  background: #61dafb;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(97, 218, 251, 0.8);

  @media (max-width: 768px) {
    display: none;
  } */
`;

const IconWrapper = styled.div`
  background: #61dafb22;
  border: 2px solid #61dafb;
  border-radius: 50%;
  padding: 0.9rem;
  color: #61dafb;
  font-size: 1.6rem;
  margin-right: 1.5rem;
  box-shadow: 0 0 20px rgba(97, 218, 251, 0.7);
  transition: all 0.4s ease;

  ${Step}:hover & {
    transform: scale(1.2) rotate(10deg);
    background: #61dafb33;
    box-shadow: 0 0 30px rgba(97, 218, 251, 1);
  }

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
  }
`;

const StepContent = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  transition: background 0.3s ease, transform 0.3s ease;

  ${Step}:hover & {
    background: rgba(97, 218, 251, 0.08);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.2rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #61dafb;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const StepDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #d8e9f0;
  font-weight: 400;
  transition: color 0.3s;

  ${Step}:hover & {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
