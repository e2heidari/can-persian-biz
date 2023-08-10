import React from 'react';
import styled from 'styled-components';
import Category from './Category';

const CategoriesBoxContainer = styled.div`
  background-color: white;
  height: 427px;
  padding: 50px 0;

  @media (max-width: 768px) {
    /* Mobile size styles */
    height: 410px;
    padding: 5% 0;
  }
`;

const TextTopBox = styled.div`
  height: 25px;
  margin: 10px 0 40px 0;
  font-size: 21px;
  display: flex;
  justify-content: center;
  color: #747474;
  font-weight: 300;

  @media (max-width: 768px) {
    /* Mobile size styles */
    font-size: 18px;
    margin: 10px 0px 20px 0px;
  }
`;

const CategoriesContainer = styled.div`
  height: 282px;
  margin: 30px auto;
  padding: 0 12%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const CategoriesContainerMobile = styled.div`
display: none;

  @media (max-width: 768px) {
    /* Mobile size styles */
  height: 290px;
  margin: 30px auto;  
    padding: 0 5%;
    display: flex;
    flex-direction:column ;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center;
  }
`;
const CategoriesIcons = styled.div`
display: none;

  @media (max-width: 768px) {
    /* Mobile size styles */
  height: 232px;
  margin: 30px auto;  
    padding: 0 5%;
    display: flex;
    flex-wrap: wrap;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center;
  }
`;

const MoreButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    /* Mobile size styles */
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1677ff;
    color: white;
    border: none;
    cursor: pointer;
    margin: 10px 0px;
  }
`;


const categoriesData = [
  { icon: 'icon1.png', text: 'Fast Food' },
  { icon: 'icon2.png', text: 'Restaurant' },
  { icon: 'icon3.png', text: 'Real Estate' },
  { icon: 'icon4.png', text: 'Sim Card & Mobile' },
  { icon: 'icon5.png', text: 'Market' },
  { icon: 'icon6.png', text: 'Beauty Salon' },
  { icon: 'icon7.png', text: 'Hookah Lounge' },
  { icon: 'icon8.png', text: 'Dentist' },
  { icon: 'icon9.png', text: 'Pharmacy' },
  { icon: 'icon10.png', text: 'Bakery' },
  { icon: 'icon11.png', text: 'Daycare' },
  { icon: 'icon12.png', text: 'Lowyer' },
  { icon: 'icon13.png', text: 'Electrician' },
  { icon: 'icon14.png', text: 'Plumber' },
  { icon: 'icon15.png', text: 'Cleaning' },
  { icon: 'icon16.png', text: 'Painting' },
  { icon: 'icon17.png', text: 'Trainer' },
];

const CategoriesBox: React.FC = () => {
  return (
    <CategoriesBoxContainer>
      <TextTopBox>Categories</TextTopBox>
      <CategoriesContainerMobile>
        <CategoriesIcons>
        {categoriesData.slice(0, 6).map((data, index) => (
          <Category key={index} index={index} icon={data.icon} text={data.text} />
        ))}
          </CategoriesIcons>
        <MoreButton>More</MoreButton>
      </CategoriesContainerMobile>
      <CategoriesContainer>
        {categoriesData.map((data, index) => (
          <Category key={index} index={index} icon={data.icon} text={data.text} />
        ))}
      </CategoriesContainer>
    </CategoriesBoxContainer>
  );
};

export default CategoriesBox;