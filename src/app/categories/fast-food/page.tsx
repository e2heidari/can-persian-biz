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
          </RightMiddleBox>
        </RightBox>
      </ContentSection>
      <Footer />
    </CategoryPageContainer>
  );
};

export default Fastfood;

