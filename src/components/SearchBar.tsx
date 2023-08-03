import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.section`
  position: relative;
  height: 488.14px;
  background: url('/path/to/vancouver-image.jpg') no-repeat center center;
  background-size: cover;
  opacity: 0.8; /* Adjust the opacity as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopBox = styled.div`
  font-size: 40.663px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  line-height: 1.2;
`;

const BottomBox = styled.div`
  padding: 11px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  margin-top: 20px;
`;

const SearchBarBox = styled.input`
  width: 938.98px;
  height: 46px;
  padding: 13px 46px 13px 11px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
`;

interface SectionProps {
  height: number;
}

const SectionContainer = styled.section<SectionProps>`
  height: ${(props) => props.height}px;
  background: url('/path/to/your/background/image.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
`;

const SearchBar = ({ height }: SectionProps) => {
  return (
    <SectionContainer height={height}>
    <SearchBarContainer>
      <TopBox>
        <div>FIND THE</div>
        <div>BEST PERSIAN BUSINESSES</div>
      </TopBox>
      <BottomBox>
        <SearchBarBox type="text" placeholder="Search for Persian businesses..." />
      </BottomBox>
    </SearchBarContainer>
    </SectionContainer>
  );
};

export default SearchBar;
