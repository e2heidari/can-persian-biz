"use client";
import React from 'react';
import Header from '../../../components/Header'; // Assuming Header has its own styles
import Footer from '../../../components/Footer';
import styled from 'styled-components';
import Image from 'next/image';

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BackgroundImage = styled(Image)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentSection = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Add this style to make it a reference point for the header */
`;

const LeftBox = styled.div`
  width: 60%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBox = styled.div`
  width: 40%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fastfood: React.FC = () => {
  // Placeholder content for the left and right boxes
  const leftBoxContent = <p>Content for the left box</p>;
  const rightBoxContent = <p>Content for the right box</p>;

  return (
    <CategoryPageContainer>
      <Header /> {/* Render the Header component as it is */}
      <ContentSection>
        <BackgroundImage
          src="/fastfoodbackground.jpg"
          alt="fastfood Background"
          layout="fill"
        />
        <LeftBox>
          {leftBoxContent}
        </LeftBox>
        <RightBox>
          {rightBoxContent}
        </RightBox>
      </ContentSection>
      <Footer />
    </CategoryPageContainer>
  );
};

export default fastfood;
