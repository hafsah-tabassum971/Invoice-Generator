import React from "react";
import styled from "styled-components";

const Gallery = () => {
  const imagesRow1 = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
  ];

  const imagesRow2 = [
    "https://picsum.photos/600/400?random=6",
    "https://picsum.photos/600/400?random=7",
    "https://picsum.photos/600/400?random=8",
    "https://picsum.photos/600/400?random=9",
    "https://picsum.photos/600/400?random=10",
  ];

  return (
    <Wrapper>
      <Content>
        <Title>AI Generated Images</Title>
        <Description>
          Scroll through stunning AI artworks in our gallery.
        </Description>

        {/* First Slider */}
        <Slider>
          {imagesRow1.map((src, index) => (
            <Slide key={index}>
              <Image src={src} alt={`Artwork ${index + 1}`} />
            </Slide>
          ))}
        </Slider>

        {/* Second Slider */}
        <Slider>
          {imagesRow2.map((src, index) => (
            <Slide key={index}>
              <Image src={src} alt={`Artwork ${index + 6}`} />
            </Slide>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default Gallery;

// ---------------- Styled Components ----------------
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 background: radial-gradient(circle at top left, #0d1b2a, #000);
   padding: 3rem 2rem;
  color: white;
`;

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #d1d1d1;
`;

const Slider = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
`;
