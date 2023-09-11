"use client";
import React from 'react';
import Header from '../../../components/Header';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const MiddleBox = styled.div`
  width: 70%; /* 70% of the RightBox's width */
  height: 140px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

const TextBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px; /* Add margin to create space between the input and dropdown */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  width: 70%; /* Make the button 70% wide */
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const fastfood: React.FC = () => {
  return (
    <CategoryPageContainer>
      <Header />
      <ContentSection>
        <BackgroundImage
          src="/fastfoodbackground.jpg"
          alt="fastfood Background"
          layout="fill"
        />
        <LeftBox>
          <h1>Welcome to our fast food page!</h1>
          <p>Explore our delicious menu items.</p>
        </LeftBox>
        <RightBox>
          <MiddleBox>
            <TextBox type="text" placeholder="Enter text..." />
            <Dropdown>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Dropdown>
          </MiddleBox>
          <SearchButton>Search</SearchButton>
        </RightBox>
      </ContentSection>
      <Footer />
    </CategoryPageContainer>
  );
};

export default fastfood;
