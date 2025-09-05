import React from "react";
import styled from "styled-components";
import { FaRocket, FaBrain, FaPalette, FaShieldAlt } from "react-icons/fa";

const WhyBest = () => {
  const points = [
    {
      icon: <FaRocket />,
      title: "Ultra-Fast Generation",
      desc: "Our AI produces high-quality images in seconds, so you never have to wait to bring your ideas to life.",
    },
    {
      icon: <FaBrain />,
      title: "Smart & Adaptive",
      desc: "Powered by advanced AI models that understand your prompts and generate visuals tailored to your imagination.",
    },
    {
      icon: <FaPalette />,
      title: "Creative Freedom",
      desc: "Customize styles, colors, and themes effortlessly. Every image is unique and can be adjusted to your vision.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe & Reliable",
      desc: "Safe for all users with optimized performance and secure processing of your data and uploads.",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Title>What Makes Us The Best AI Image Generator?</Title>
        <Description>
          Explore why creators love our AI-powered platform for generating stunning visuals.
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
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d1d1;
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

const Card = styled.div`
  background: #11224055;
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.7);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #61dafb;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
    color: #61dafb;

  
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #d8e9f0;
  line-height: 1.6;
`;
