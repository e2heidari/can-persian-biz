"use client";
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';

const MainContainer = styled.div`
  overflow: hidden;
`;

const IndexPage = () => {
  return (
    <MainContainer>
      <Header />
      <Element name="section1">
        <Section height={488.14} />
      </Element>
      <Element name="section2">
        <Section height={427} />
      </Element>
      <Element name="section3">
        <Section height={386.66} />
      </Element>
      <Footer />
    </MainContainer>
  );
};

export default IndexPage;
