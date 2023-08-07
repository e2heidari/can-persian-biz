import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const SearchBoxContainer = styled.section`
  position: relative;
  background-image: url('${process.env.PUBLIC_URL}/section1background.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 65vh;

  @media (max-width: 768px) {
    /* Mobile size styles */
    height: 239px;
    padding: 0px 16px;
  }
`;

const TopBox = styled.div`
  font-size: 40.663px;
  font-weight: bold;
  text-align: center;
  color: black;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    /* Mobile size styles */
    height: 56px;
    font-size: 23.52px;
    margin: 0 auto 7%;
  }
`;

const FindTheText = styled.div`
  font-size: 40.663px;

  @media (max-width: 768px) {
    /* Mobile size styles */
    font-size: 23.52px;
  }
`;

const BestPersianText = styled.div`
  font-size: 72.534px;

  @media (max-width: 768px) {
    /* Mobile size styles */
    font-size: 23.52px;
  }
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
