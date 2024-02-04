"use client";
import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled from 'styled-components';
import Image from 'next/image';
import Location from '../locations.json'
import GooglePlacesMap from '../../../components/GooglePlacesMap';

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
  position: relative;
`;


const RightBox = styled.div`
width: 40%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
backdrop-filter: blur(4px);
`;

const LeftBox = styled.div`
width: 80%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`;


const RightMiddleBox = styled.div`
  width: 70%;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

const TextBox = styled.h3`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  width: 70%;
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;


const Fastfood: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(""); // State to store the selected city

  // Event handler for when a city is selected
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Event handler for when the "Search" button is clicked
  const handleSearchClick = () => {
    
  };

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
        <GooglePlacesMap />
        </LeftBox>
        <RightBox>
        <RightMiddleBox>
            <TextBox>CHOOSE YOUR CITY</TextBox>
            <Dropdown onChange={handleCityChange}>
             <option value="">Select a city</option>
              {Location.map((city, index) => (
             <option key={index} value={city.name}> {/* Use city.name as the value */}
             {city.name}
             </option>
             ))}
            </Dropdown>
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
          </RightMiddleBox>
        </RightBox>
      </ContentSection>
      <Footer />
    </CategoryPageContainer>
  );
};

export default Fastfood;

