import React from 'react';
import styled from 'styled-components';

const BulletinBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
   align-items: flex-start;
  background-color: #f5f5f5;
  padding: 8% 0;
  width: 100%;
  margin: 0 auto; 

`;

// const BulletinRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;



const BulletinBox = styled.div`
  width: 33.33%;
  background-color: white;
  text-align: center;
  height: 214px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 137px;
  }
`;

const BulletinIconContainer = styled.div`
width: auto;
    height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 78px;
  }
`;

const BulletinIcon = styled.img`
  width: 90px;
  height: 90px;

  @media (max-width: 1024px) {
    width: 44px;
    height: 44px;
  }
`;

const BulletinText = styled.div`
  height: 54px;
  font-size: 45px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 1024px) {
    height: 42px;
    font-size: 35px;
  }
`;

const BulletinBottomBox = styled.div`
  height: 30px;
  font-weight: 300;
    font-size: 25px;


  @media (max-width: 1024px) {
    height: 17px;
    font-weight: 300;
    font-size: 14px;
  }
`;

const BulletinBoxComponent: React.FC = () => {
  return (
    <BulletinBoxContainer>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon1.png" alt="Icon 1" />
          </BulletinIconContainer>
          <BulletinText>Text 1A</BulletinText>
          <BulletinBottomBox>Text 1B</BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon2.png" alt="Icon 2" />
          </BulletinIconContainer>
          <BulletinText>Text 2A</BulletinText>
          <BulletinBottomBox>Text 2B</BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon3.png" alt="Icon 3" />
          </BulletinIconContainer>
          <BulletinText>Text 3A</BulletinText>
          <BulletinBottomBox>Text 3B</BulletinBottomBox>
        </BulletinBox>
    </BulletinBoxContainer>
  );
};

export default BulletinBoxComponent;