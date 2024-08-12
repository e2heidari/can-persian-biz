'use client'
import React from 'react'
import styled from 'styled-components'
import SearchBox from './components/section1/SearchBox'
import Footer from './components/Footer'
import Categories from './categories'
import BulletinBox from './components/section3/BulletinBox'

const MainContainer = styled.div`
    overflow: scroll;
    width: 100%;
`

const IndexPage = () => {
    return (
        <MainContainer>
            <SearchBox />
            <Categories />
            <BulletinBox />
            <Footer />
        </MainContainer>
    )
}

export default IndexPage
