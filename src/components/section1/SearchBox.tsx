import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Image from 'next/image'

const SearchBoxContainer = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;

    @media (max-width: 768px) {
        /* Mobile size styles */
        height: 239px;
        padding: 0px 16px;
    }
`
const BackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    object-fit: cover;
`

const TopBox = styled.div`
    font-size: 40.663px;
    width: 100%;
    font-weight: bold;
    text-align: center;
    color: black;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        /* Mobile size styles */
        height: 56px;
        font-size: 23.52px;
        margin: 0 auto 7%;
    }
`
// background-image: url('2.jpg');
// background-size: cover;
// background-clip: text;
// -webkit-background-clip: text;
// color: transparent;

const FindTheText = styled.div`
    font-size: 4vw;
    font-weight: bold;
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        backdrop-filter: blur(5px);
    }
`
// background-image: url('2.jpg');
// background-size: cover;
// background-clip: text;
// -webkit-background-clip: text;
// color: transparent;

const BestPersianText = styled.div`
    font-size: 6vw;
    font-weight: bold;
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        backdrop-filter: blur(5px);
    }
`

const SearchBox = () => {
    return (
        <SearchBoxContainer>
            <BackgroundImage
                src="/section1background.jpg"
                alt="Search Background"
                layout="fill"
            />
            <TopBox>
                <FindTheText>FIND THE</FindTheText>
                <BestPersianText>BEST PERSIAN BUSINESSES</BestPersianText>
            </TopBox>
            <SearchBar />
        </SearchBoxContainer>
    )
}

export default SearchBox
