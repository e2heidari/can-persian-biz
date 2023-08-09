import React from 'react';
import styled from 'styled-components';
import Category from './Category';

const CategoriesBoxContainer = styled.div`
background-color: white;
  height: 427px;
  padding: 50px 0;
`;

const TextTopBox = styled.div`
  height: 25px;
  margin: 10px 0 40px 0;
  font-size: 21px;
  display: flex;
  justify-content: center;
`;

const CategoriesContainer = styled.div`
  height: 232px;
  margin: 30px auto;
  padding: 0 12%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center; /* Center the boxes vertically */
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
      <CategoriesContainer>
        {categoriesData.map((data, index) => (
          <Category key={index} index={index} icon={data.icon} text={data.text} />
        ))}
      </CategoriesContainer>
    </CategoriesBoxContainer>
  );
};

export default CategoriesBox;
