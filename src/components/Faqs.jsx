import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is this AI Image Generator?",
      a: "It’s a powerful tool that allows you to create stunning visuals instantly using advanced AI models. Simply enter your idea, and our system transforms it into art."
    },
    {
      q: "Do I need design skills?",
      a: "Not at all! Our AI takes care of the design. You only need to describe your idea in plain words, and the system generates high-quality visuals."
    },
    {
      q: "Can I upload my own prompts?",
      a: "Yes! You can upload prompts, adjust styles, and customize outputs for full creative control."
    },
    {
      q: "How fast are the results?",
      a: "You’ll see results in just a few seconds thanks to our optimized AI performance."
    },
    {
      q: "Is it free to use?",
      a: "We offer a free trial with limited generations. Premium plans unlock unlimited features and faster rendering."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <Content>
        <Title>❓ Frequently Asked Questions</Title>
        <Subtitle>
          Have questions? We’ve got answers. Explore the most common questions below.
        </Subtitle>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleFAQ(index)}>
                {faq.q}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              {openIndex === index && <Answer>{faq.a}</Answer>}
            </FAQItem>
          ))}
        </FAQList>
      </Content>
    </Wrapper>
  );
};

export default Faqs;

// ---------------- Styled Components ----------------

const Wrapper = styled.section`
  min-height: 100vh;
 background: radial-gradient(circle at top left, #0d1b2a, #000);
   display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  color: white;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #d1d1d1;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(97, 218, 251, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(97, 218, 251, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.4);
  }
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #61dafb;
`;

const Answer = styled.p`
  margin-top: 0.8rem;
  color: #d6d6d6;
  font-size: 1rem;
  line-height: 1.6;
`;

