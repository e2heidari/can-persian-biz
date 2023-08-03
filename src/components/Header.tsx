import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 61px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 21px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 166px;
  margin-right: 12px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 11px;
`;

const SignUpBox = styled.div`
  width: 68.86px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.8px;
`;

const LogInBox = styled.div`
  width: 55.97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.8px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <Logo src="/path/to/your/logo.png" alt="Logo" />
        <TextBox>Text Box</TextBox>
      </LogoBox>
      <div style={{ display: 'flex' }}>
        <SignUpBox>SIGN UP</SignUpBox>
        <LogInBox>LOG IN</LogInBox>
      </div>
    </HeaderContainer>
  );
};

export default Header;