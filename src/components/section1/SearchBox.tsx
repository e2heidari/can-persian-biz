import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const SearchBoxContainer = styled.section`
  position: relative;
  height: 488.14px;
  background-image: url('${process.env.PUBLIC_URL}/section1background.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopBox = styled.div`
  font-size: 40.663px;
  font-weight: bold;
  text-align: center;
  color: black;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align "FIND THE" to the top of the container */
  align-items: center;
`;

const FindTheText = styled.div`
  font-size: 40.663px;
`;

const BestPersianText = styled.div`
  font-size: 72.534px;
  /* Add any additional styles for "BEST PERSIAN BUSINESSES" here */
`;

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <TopBox>
        <FindTheText>FIND THE</FindTheText>
        <BestPersianText>BEST PERSIAN BUSINESSES</BestPersianText>
      </TopBox>
      <SearchBar />
    </SearchBoxContainer>
  );
};

export default SearchBox;
