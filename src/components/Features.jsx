import React from "react";
import styled from "styled-components";
import { FaMagic, FaImages, FaCloudUploadAlt, FaBolt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaMagic />,
      title: "AI Magic",
      desc: "Generate stunning visuals instantly with advanced AI models. Explore limitless creativity without any design skills required.",
    },
    {
      icon: <FaImages />,
      title: "Image Gallery",
      desc: "Browse through a curated gallery of unique AI-generated art. Get inspired and remix ideas directly into your own creations.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Upload & Customize",
      desc: "Upload your own prompts, adjust styles, and customize outputs in seconds. Your imagination, your rules.",
    },
    {
      icon: <FaBolt />,
      title: "Lightning Fast",
      desc: "Experience results in just seconds, powered by optimized AI performance. No waiting, just instant creativity.",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Title>Core System Features</Title>
        <Description>
          Discover the powerful tools that make our AI Image Generator stand out.
        </Description>
        <Timeline>
          {features.map((f, i) => (
            <Step key={i}>
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
  padding: 4rem 2rem;
  color: white;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #d1d1d1;
`;

const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  border-left: 3px solid rgba(97, 218, 251, 0.5);

  @media (max-width: 768px) {
    border-left: none;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  position: relative;
  padding-left: 2rem;

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

const IconWrapper = styled.div`
  background: #61dafb22;
  border: 2px solid #61dafb;
  border-radius: 50%;
  padding: 0.8rem;
  color: #61dafb;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  box-shadow: 0 0 15px rgba(97, 218, 251, 0.7);
  transition: all 0.3s ease;

  ${Step}:hover & {
    transform: scale(1.2);
    background: #61dafb33;
  }

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  font-weight: 700;
  letter-spacing: 1px;
    color: #61dafb;

`;

const StepDesc = styled.p`
  font-size: 1.3rem;
  line-height: 1.9;
  max-width: 750px;
  margin: 0 auto 3rem auto;
  color: #d8e9f0;
  /* background: linear-gradient(90deg, #61dafb, #61dafb); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(97, 218, 251, 0.5); */
  letter-spacing: 0.5px;
  font-weight: 500;


  ${Step}:hover & {
    color: #ffffff;
  }
`;
