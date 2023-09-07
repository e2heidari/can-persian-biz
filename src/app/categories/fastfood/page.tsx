"use client";
import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled from 'styled-components';

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentSection = styled.section`
  background-image: url('/public-area-background.jpg'); // Replace with the actual image URL
  background-size: cover;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 140px); // Adjust to leave space for header and footer
`;

const LeftBox = styled.div`
  width: 60%;
  height: 90vh;
  background-color: rgba(255, 255, 255, 0.8); // Adjust the color as needed
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBox = styled.div`
  width: 40%;
  height: 90vh;
  background-color: rgba(255, 255, 255, 0.8); // Adjust the color as needed
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
      <Header />
      <ContentSection>
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
