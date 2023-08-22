import React, { useEffect }  from 'react';
import styled from 'styled-components';

const BulletinBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  
  background-image: url('/section-bulletin.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed; /* This creates the parallax effect */
  &.parallax {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }
  padding: 8% 0;
  width: 100%;
  margin: 0 auto; 
  @media (max-width: 768px) {
    height:239px;
  }

`;

// const BulletinRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;



const BulletinBox = styled.div`
  width: 33.33%;
  text-align: center;
  height: 214px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 137px;
  }
  @media (max-width: 768px) {
    width: 100%;
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
  font-size: 40px;
  font-weight: 650;
  text-align: center;
  color:white;
  @media (max-width: 1024px) {
    height: 42px;
    font-size: 35px;
  }
  @media (max-width: 768px) {
    height: 25px;
    font-size: 17px;
  }
`;

const BulletinBottomBox = styled.div`
  height: 30px;
  font-weight: 250;
  font-size: 25px;
  color:white;
  @media (max-width: 1024px) {
    height: 17px;
    font-weight: 300;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BulletinBoxComponent: React.FC = () => {
  useEffect(() => {
    const parallaxEffect = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element: any) => {
        const speed = element.dataset.speed || 1;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', parallaxEffect);

    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, []);
  return (
    <BulletinBoxContainer>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon1.png" alt="Icon 1" />
          </BulletinIconContainer>
          <BulletinText>MANY WAYS</BulletinText>
          <BulletinBottomBox>TO GROW YOUR BUSINESS</BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon2.png" alt="Icon 2" />
          </BulletinIconContainer>
          <BulletinText>200 THOUSAND</BulletinText>
          <BulletinBottomBox>CONSUMERS</BulletinBottomBox>
        </BulletinBox>
        <BulletinBox>
          <BulletinIconContainer>
            <BulletinIcon src="/bulletin-icon3.png" alt="Icon 3" />
          </BulletinIconContainer>
          <BulletinText>4 THOUSAND</BulletinText>
          <BulletinBottomBox>MERCHANTS</BulletinBottomBox>
        </BulletinBox>
    </BulletinBoxContainer>
  );
};

export default BulletinBoxComponent;