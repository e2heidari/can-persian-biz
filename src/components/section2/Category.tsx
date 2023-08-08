import React from 'react';
import styled from 'styled-components';

const CategoryBox = styled.button`
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

const CategoryIcon = styled.img`
  width: 60px; /* Adjust the size of the icon as needed */
  height: 60px; /* Adjust the size of the icon as needed */
  border-radius: 50%;
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

interface CategoryProps {
  index: number;
  icon: string; // Icon file name
}

const Category: React.FC<CategoryProps> = ({ index, icon }) => {
  return (
    <CategoryBox>
      <CategoryIcon src= {`/${icon}`}  alt={`Icon ${index + 1}`} />
      <CategoryText>Category {index + 1}</CategoryText>
    </CategoryBox>
  );
};

export default Category;
