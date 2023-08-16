import React from 'react';
import styled from 'styled-components';

const BulletinBoxContainer = styled.div`
  background-color: #f5f5f5;
  height: 430px;
  padding: 8% 0;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    height: 290px;
  }
`;

const BulletinRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BulletinBox = styled.div`
  width: 33.33%;
  background-color: white;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 137px;
  }
`;

const BulletinIconContainer = styled.div`
  height: 136px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 80px;
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

const BulletinText = styled.h3`
  height: 84px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 1024px) {
    height: 59px;
  }
`;

const BulletinBottomBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 17px;
  }
`;

const BulletinBoxComponent: React.FC = () => {
  return (
    <BulletinBoxContainer>
      <BulletinRow>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/path/to/icon1.png" alt="Icon 1" />
          </BulletinIconContainer>
          <BulletinText>Text 1</BulletinText>
          <BulletinBottomBox></BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/path/to/icon2.png" alt="Icon 2" />
          </BulletinIconContainer>
          <BulletinText>Text 2</BulletinText>
          <BulletinBottomBox></BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/path/to/icon3.png" alt="Icon 3" />
          </BulletinIconContainer>
          <BulletinText>Text 3</BulletinText>
          <BulletinBottomBox></BulletinBottomBox>
        </BulletinBox>
      </BulletinRow>
    </BulletinBoxContainer>
  );
};

export default BulletinBoxComponent;
