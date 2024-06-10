'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../../../components/Header'
import Image from 'next/image'
import { useStore } from '../../context/StoreContext'
import RightAdComponent from '../data/RightAdComponent'
import {
    BackgroundImage,
    BusinessesData,
    BusinessTypeIcon,
    CustomName,
    Article,
    ContentSection,
    AdvertiseData,
    AdContainer,
    AdvertiseTypeIcon,
} from '../data/styles'

interface SavedPageProps {
    active: number
    handleToggle: (index: number) => void
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
`
const LeftInstComponentWrapper = styled.div<{ isActive: boolean }>`
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};

    display: grid;
    background-color: rgba(
        255,
        255,
        255,
        0.4
    ); /* Adjust the last value (alpha) to change the opacity */
    grid-template-columns: auto 25px 5px 60px 20px 60px 20px 60px 30px;
    grid-template-rows: 27px 27px;
    border-radius: 10px;
    margin: 0px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: auto 20px 5px 40px 20px 55px 10px;
        grid-template-rows: 25px 25px;
    }
`

const InstagramUrl = styled.a`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: stretch;
    display: grid;
    grid-template-columns: 54px auto;
    grid-template-rows: 54px;
`

const StyledImage = styled(Image)`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`

const AccountTitle = styled.p`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: start;
    align-self: center;
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
`
const DeleteIcon = styled.button`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    place-self: center;
    width: 25px;
    height: 25px;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; /* Safari */

    &:hover {
        transition-duration: 0.1s;
    }

    &:after {
        content: '';
        display: block;
        position: relative;
        width: 2px;
        height: 2px;
        border-radius: 6px;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }

    &:active:after {
        box-shadow: 0 0 0 0 white;
        border-radius: 6px;
        position: relative;
        width: 2px;
        height: 2px;
        opacity: 1;
        transition: 0s;
    }

    &:active {
        top: 1px;
    }
`

const PostBoxName = styled.p`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 16px;
    place-self: center;
`
const PostBoxAmount = styled.p`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
    font-weight: bold;
`

const FollowersBoxName = styled.p`
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 16px;
    place-self: center;
`
const FollowersBoxAmount = styled.p`
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
    font-weight: bold;
`

const FollowingBoxName = styled.p`
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 16px;
    place-self: center;
    @media (max-width: 768px) {
        display: none;
    }
`
const FollowingBoxAmount = styled.p`
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
    font-weight: bold;
    @media (max-width: 768px) {
        display: none;
    }
`

const SavedPage: React.FC<SavedPageProps> = () => {
    const { savedItems, removeItem } = useStore()
    const [active, setActive] = useState(0)

    const handleToggle = (index: number) => setActive(index)

    return (
        <PageContainer>
            <Header />
            <ContentSection>
                <Article
                    isActive={active === 1}
                    onClick={() => handleToggle(0)}
                >
                    <BackgroundImage
                        src="/influencerBackground1.jpg"
                        alt="influencer Background"
                        layout="fill"
                    />
                    <BusinessesData>
                        <BusinessTypeIcon
                            src={`/icons8-micro-sd-96.png`}
                            alt="SavedItems"
                        />
                        <CustomName isActive={active === 0}>
                            <span>Saved Pages</span>
                        </CustomName>

                        {savedItems.map((item, index) => (
                            <LeftInstComponentWrapper
                                key={index}
                                isActive={active === 0}
                            >
                                <InstagramUrl
                                    href={`https://www.instagram.com/${item.id}/`}
                                >
                                    <StyledImage
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                    <AccountTitle>{item.title}</AccountTitle>
                                </InstagramUrl>
                                <DeleteIcon>
                                    <img
                                        src={'/icons8-cancel-96.png'}
                                        alt="SavedIcon"
                                        onClick={() => removeItem(item.id)}
                                    />
                                </DeleteIcon>
                                <PostBoxName>post</PostBoxName>
                                <PostBoxAmount>{item.post}</PostBoxAmount>
                                <FollowersBoxName>followers</FollowersBoxName>
                                <FollowersBoxAmount>
                                    {item.followers}
                                </FollowersBoxAmount>
                                <FollowingBoxName>following</FollowingBoxName>
                                <FollowingBoxAmount>
                                    {item.following}
                                </FollowingBoxAmount>
                            </LeftInstComponentWrapper>
                        ))}
                    </BusinessesData>
                </Article>
                <Article
                    isActive={active === 0}
                    onClick={() => handleToggle(1)}
                >
                    <AdvertiseData>
                        <AdContainer>
                            <span
                                style={{
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}
                            >
                                Weekly{' '}
                            </span>
                            <AdvertiseTypeIcon
                                src={'/icons8-bullhorn-megaphone-96.png'}
                                alt="bullhorn"
                            />
                            <span
                                style={{
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}
                            >
                                Offers
                            </span>
                        </AdContainer>
                        {savedItems.map((item, index) => (
                            <RightAdComponent
                                active={active}
                                id={item.id}
                                title={item.title}
                                // post={instMember.post}
                                // followers={instMember.followers}
                                // following={instMember.following}
                                key={index}
                            />
                        ))}
                    </AdvertiseData>
                </Article>
            </ContentSection>
        </PageContainer>
    )
}

export default SavedPage
