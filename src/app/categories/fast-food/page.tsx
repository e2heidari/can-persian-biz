"use client";
import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Location from '../locations.json';
import GooglePlacesMap from '../../../components/GooglePlacesMap';
import '../../../style/fonts.css';

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction:column;
  min-height: 100vh;
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1180px) {
    flex-direction: column-reverse;
  }
`;

const RightBox = styled.div`
  width: 40%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  @media (max-width: 1180px) {
    background-color: #007bff;
    width: 100%;
    height: auto;
  }
`;

const LeftBox = styled.div`
  width: 60%; /* Adjust the width as needed */
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  @media (max-width: 1180px) {
    width: 100%;
    height: auto;
  }
`;

const RightMiddleBox = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  @media (max-width: 1180px) {
    background-color: gray;
    flex-direction: row;
    width: 100%;
  }
`;

const TextBox = styled.h3`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'Alcubierre', sans-serif;
  @media (max-width: 1180px) {
    display: none;
  }
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  @media (max-width: 1180px) {
  margin-top: 15px;
  }
`;

const NearMeButton = styled.button`
  font-family: 'Alcubierre', sans-serif;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: 1180px) {
  margin-bottom: 10px;
  }
`;

const BackgroundImage = styled(Image)<{ mobileHide?: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${(props) =>
    props.mobileHide &&
    css`
      @media (max-width: 1180px) {
        display: none;
      }
    `}
`;

const Fastfood: React.FC = () => {
  const [selectedCityCoords, setSelectedCityCoords] = useState({ lat: 49.2827, lng: -123.1207 }); // Default to Vancouver coordinates

  // Event handler for when a city is selected
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    // Find the selected city's coordinates from the Location JSON
    const city = Location.find((city) => city.name === cityName);
    if (city) {
      setSelectedCityCoords({ lat: city.lat, lng: city.lng });
    } else {
      setSelectedCityCoords({ lat: 49.2827, lng: -123.1207 }); // Default to Vancouver coordinates if city not found
    }
  };

  const handleNearMeClick = () => {
    // Handle Near Me button click event
  };

  return (
    <CategoryPageContainer>
      <Header />
      <ContentSection>
        <BackgroundImage
          src="/fastfoodbackground.jpg"
          alt="fastfood Background"
          layout="fill"
          mobileHide // Add this prop to hide background on mobile
        />
        <LeftBox>
          <GooglePlacesMap lat={selectedCityCoords.lat} lng={selectedCityCoords.lng} />
        </LeftBox>
        <RightBox>
          <RightMiddleBox>
            <TextBox>CHOOSE YOUR CITY</TextBox>
            <Dropdown onChange={handleCityChange}>
              <option value="">Vancouver</option>
              {Location.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Dropdown>
            <NearMeButton onClick={handleNearMeClick}>Near Me</NearMeButton>
          </RightMiddleBox>
        </RightBox>
      </ContentSection>
      <Footer />
    </CategoryPageContainer>
  );
};

export default Fastfood;
