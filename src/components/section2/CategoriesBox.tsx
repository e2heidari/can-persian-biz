import React from 'react';
import styled from 'styled-components';
import Category from './Category';

const CategoriesBoxContainer = styled.div`
  height: 427px;
  padding: 50px 0;
`;

const TextTopBox = styled.div`
  height: 25px;
  margin: 10px 0 40px 0;
  font-size: 21px;
  display: flex;
  justify-content: center
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
  // Replace 'icon1.png', 'icon2.png', ..., 'icon15.png' with the actual file names
  'icon1.png', 'icon2.png', 'icon3.png', 'icon4.png', 'icon5.png',
  'icon6.png', 'icon7.png', 'icon8.png', 'icon9.png', 'icon10.png',
  'icon11.png', 'icon12.png', 'icon13.png', 'icon14.png', 'icon15.png',
];

const CategoriesBox: React.FC = () => {
  return (
    <CategoriesBoxContainer>
      <TextTopBox>Categories</TextTopBox>
      <CategoriesContainer>
        {categoriesData.map((icon, index) => (
          <Category key={index} index={index} icon={icon} />
        ))}
      </CategoriesContainer>
    </CategoriesBoxContainer>
  );
};

export default CategoriesBox;
