import React from 'react';
import styled from 'styled-components';

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
  padding: 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center; /* Center the boxes vertically */
`;

const CategoryBox = styled.div`
  text-align: center;
  vertical-align: top;
  display: inline-block;
  height: 106px;
  width: 62px;
  font-weight: 300;
  color: #fff;
  margin: 0 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryIcon = styled.div`
font-size: 20px;
width: 100%;
line-height: 60px;
`;

const CategoryText = styled.div`
  width: 160%;
  height: 2.2em;
  line-height: 1.2em;
  line-height: 1.2em;
  text-overflow: ellipsis;
  text-align: center;
  right: 0;
  font-size: 13px;
  margin: 0.5em 0 0;
`;

const CategoriesBox: React.FC = () => {
  return (
    <CategoriesBoxContainer>
      <TextTopBox>Categories</TextTopBox>
      <CategoriesContainer>
        {Array.from({ length: 15 }).map((_, index) => (
          <CategoryBox key={index}>
            <CategoryIcon>icon</CategoryIcon>
            <CategoryText>Category {index + 1}</CategoryText>
          </CategoryBox>
        ))}
      </CategoriesContainer>
    </CategoriesBoxContainer>
  );
};

export default CategoriesBox;
