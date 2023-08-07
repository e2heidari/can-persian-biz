"use client";
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Section from '../components/Section';
import SearchBox from '../components/section1/SearchBox';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';
import CategoriesBox from '@/components/section2/CategoriesBox';



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
        <Section height={386.66} />
      </Element>
      <Footer />
    </MainContainer>
  );
};

export default IndexPage;
