'use client'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const BulletinBoxContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the boxes horizontally */
    align-items: center;
    background-image: url('/section-bulletin.jpg'); /* Default background image */
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    &.parallax {
        transform: translateY(0);
        transition: transform 0.3s ease-in-out;
    }
    padding: 3vh 0;
    width: 100%;
    height: 73vh;
    margin: 0 auto;

    @media (max-width: 768px) {
        background-image: url('/mobilesizeBulletinBackground.jpg'); /* Mobile background image */
    }
`

const BulletinBox = styled.article`
    width: 30vw;
    text-align: center;
    vertical-align: top;
    display: inline-block;
`

const BulletinIconContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        height: 78px;
    }
`

const BulletinIcon = styled.img`
    width: 120px;
    height: 120px;

    @media (max-width: 1024px) {
        width: 85px;
        height: 85px;
    }
`

const BulletinText = styled.div`
    font-size: 3.5vw;
    text-align: center;
    color: white;
`

const BulletinBottomBox = styled.div`
    font-size: 2.5vw;
    text-align: center;
    color: white;
`

const BulletinBoxComponent: React.FC = () => {
    useEffect(() => {
        const parallaxEffect = () => {
            const scrollPosition = window.scrollY
            const parallaxElements = document.querySelectorAll('.parallax')

            parallaxElements.forEach((element: any) => {
                const speed = element.dataset.speed || 1
                element.style.transform = `translateY(${
                    scrollPosition * speed
                }px)`
            })
        }

        window.addEventListener('scroll', parallaxEffect)

        return () => {
            window.removeEventListener('scroll', parallaxEffect)
        }
    }, [])

    return (
        <Element name="section3">
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
        </Element>
    )
}

export default BulletinBoxComponent
