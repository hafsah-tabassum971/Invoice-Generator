import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is this Invoice Generator?",
      a: "It’s a simple tool that helps freelancers, small businesses, and startups create professional invoices in minutes without needing Excel or Word."
    },
    {
      q: "Do I need accounting knowledge?",
      a: "Not at all! Just enter your client details, items, and prices — the system calculates totals, taxes, and generates the invoice for you."
    },
    {
      q: "Can I download my invoices?",
      a: "Yes! You can easily download invoices as PDF files to share with your clients or keep for your records."
    },
    {
      q: "Is it customizable?",
      a: "Absolutely. You can add your business information, change client information, and edit invoice fields as needed."
    },
    {
      q: "Do I need to create an account?",
      a: "No account is required. You can generate invoices instantly. However, future updates may include an account option for saving past invoices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper id="faqs">
      <Content >
        <Title>❓ Frequently Asked Questions</Title>
        <Subtitle>
          Got questions about our Invoice Generator? Here are the answers.
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
  padding: 5rem 0rem;
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 0rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0rem;
  }
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background-color: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #d1d1d1;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(97, 218, 251, 0.3);
  border-radius: 15px;
  padding: 1.2rem 1.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(97, 218, 251, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(97, 218, 251, 0.4);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
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
  transition: color 0.3s;

  &:hover {
    color: #21a1f1;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Answer = styled.p`
  margin-top: 0.8rem;
  color: #d6d6d6;
  font-size: 1rem;
  line-height: 1.6;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
