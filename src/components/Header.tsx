import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;

  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 11px;
  color:black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SignUpBox = styled.div`
  width: 68.86px;
  height: 40px;
  color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.8px;
  cursor: pointer; /* Add a pointer cursor to indicate clickability */
`;

const LogInBox = styled.div`
  width: 55.97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.8px;
  color:black;
  cursor: pointer; /* Add a pointer cursor to indicate clickability */
`;

const Header = () => {
  const handleSignUpClick = () => {
    console.log('SIGN UP button clicked');
    // Add your desired functionality for the SIGN UP button click here
  };

  const handleLogInClick = () => {
    console.log('LOG IN button clicked');
    // Add your desired functionality for the LOG IN button click here
  };

  return (
    <HeaderContainer>
      <LogoBox>
        <Logo src="/logo.png" alt="Logo" />
        <TextBox>Dram</TextBox>
      </LogoBox>
      <div style={{ display: 'flex' }}>
        <SignUpBox onClick={handleSignUpClick}>SIGN UP</SignUpBox>
        <LogInBox onClick={handleLogInClick}>LOG IN</LogInBox>
      </div>
    </HeaderContainer>
  );
};

export default Header;
