import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

const handleGenerate = async () => {
  if (!prompt.trim()) return;

  setLoading(true);
  setImage(null);

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (data?.imageUrl) {
      setImage(data.imageUrl);
    } else {
      console.error("Backend response:", data);
      alert("Failed to generate image. Check console.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Check console.");
  } finally {
    setLoading(false);
  }
};


  return (
    <Wrapper>
      <Content>
        <Title>AI Image Generator</Title>
        <Description>
          Imagine. Type. Create. <br />
          Let your words become art with the power of AI. <br />
          <strong>Turn your ideas into stunning images</strong> in seconds. <br />
          Simply describe your vision and watch AI bring it to life instantly. <br />
          Explore, create, and share your imagination effortlessly.
        </Description>

        <InputBox>
          <Input
            type="text"
            placeholder="Enter your imagination..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleGenerate}>Generate</Button>
        </InputBox>

        {loading && <LoadingText>Generating image...</LoadingText>}

        {image && (
          <Result>
            <GeneratedImage src={image} alt="Generated" />
            <Caption>🎨 Here’s what your imagination looks like!</Caption>
          </Result>
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;

// ---------------- Styled Components ----------------
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top left, #0d1b2a, #000);
  overflow: hidden;
  color: white;
  padding: 2rem;
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(20deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background: rgba(97, 143, 251, 0.2);
    border-radius: 50%;
    animation: ${float} 6s ease-in-out infinite;
  }

  &::before {
    top: 10%;
    left: 15%;
  }

  &::after {
    bottom: 10%;
    right: 20%;
    animation-delay: 3s;
  }
`;

const Content = styled.div`
  max-width: 700px;
  width: 100%;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #d1d1d1;
  line-height: 1.6;
`;

const InputBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 14px 16px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #61dafb, #21a1f1);
  font-weight: bold;
  transition: 0.3s;
  color: white;

  &:hover {
    background: linear-gradient(135deg, #21a1f1, #61dafb);
    transform: translateY(-2px) scale(1.05);
  }
`;

const Result = styled.div`
  margin-top: 2rem;
`;

const GeneratedImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
`;

const Caption = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #a9a9a9;
  font-style: italic;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  color: #61dafb;
  font-style: italic;
  margin-top: 1rem;
`;
