"use client";
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SearchBox from '../components/section1/SearchBox';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';
import CategoriesBox from '../components/section2/CategoriesBox';
import BulletinBox from '../components/section3/BulletinBox';


const MainContainer = styled.div`
  overflow: hidden;
`;

const IndexPage = () => {
  return (
    
    <MainContainer>
      <Header />
      <Element name="section1">
        <SearchBox  />
      </Element>
      <Element name="section2">
        <CategoriesBox />
      </Element>
      <Element name="section3">
      <BulletinBox />
      </Element>
      <Footer />
    </MainContainer>
  );
};

export default IndexPage;
