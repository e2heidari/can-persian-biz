import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Image from 'next/image'

const SearchBoxContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;

    @media (max-width: 768px) {
        height: 60vh;
        padding: 0 16px;
    }
`

const BackgroundImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`

const StickyHeader = styled.div<{ isScrolled: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2px 20px;
    background-color: ${({ isScrolled }) =>
        isScrolled ? 'white' : 'transparent'};
    transition: background-color 0.3s ease-in-out;
    z-index: 10;
    box-shadow: ${({ isScrolled }) =>
        isScrolled ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

    @media (max-width: 768px) {
        padding: 2px 10px;
    }
`

const ForumTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: black;

    img {
        margin-left: 5px;
        height: 25px;
        width: 25px;
    }
    @media (max-width: 768px) {
        font-size: 15px;
        img {
            margin-left: 3px;
            height: 20px;
            width: 20px;
        }
    }
`

const SearchBarWrapper = styled.div`
    position: absolute;
    top: 0;
    margin-top: 8vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

// const BottomText = styled.div`
//     position: absolute;
//     bottom: 20px;
//     left: 2vw;
//     color: black;
//     font-size: 45px;
//     font-weight: bold;
//     text-align: left;

//     p {
//         margin: 0;
//     }
//     @media (max-width: 768px) {
//         bottom: 18vh;
//         font-size: 28px;
//     }
// `

const Divider = styled.div`
    position: absolute;
    bottom: 0;
    width: 60vw;
    height: 2px;
    background-color: gray;
    left: 50%;
    transform: translateX(-50%);
`

const SearchBox = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <SearchBoxContainer>
            <BackgroundImage
                src="/sharon-pittaway-iMdsjoiftZo-unsplash.jpg"
                alt="Search Background"
                layout="fill"
            />
            <StickyHeader isScrolled={isScrolled}>
                <ForumTitle>
                    Forum
                    <img src="/logo.png" alt="Forum Icon" />
                </ForumTitle>
            </StickyHeader>
            <SearchBarWrapper>
                <SearchBar />
            </SearchBarWrapper>
            {/* <BottomText>
                <p>Persians in Vancouver</p>
                <p>Let's get it warmer together</p>
            </BottomText> */}
            <Divider />
        </SearchBoxContainer>
    )
}

export default SearchBox
