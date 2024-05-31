import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import useSavedPages from '../hooks/useSavedPages'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

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

const StyledImage = styled(Image)<StyledImageProps>`
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
const SavedIcon = styled.img`
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

interface LeftInstComponentProps {
    id: string
    title: string
    post: string
    followers: string
    following: string
    active: number
    image: string
}

const LeftInstComponent: React.FC<LeftInstComponentProps> = ({
    id,
    title,
    post,
    followers,
    following,
    active,
    image,
}) => {
    const getImageUrl = (id: string) => {
        // Assuming images are stored in a folder named 'images'
        return `/${id}.jpg` // Change the file extension as per your image format
    }

    const { savePage } = useSavedPages()

    return (
        <LeftInstComponentWrapper isActive={active === 0}>
            <InstagramUrl key={id} href={`https://www.instagram.com/${id}/`}>
                <StyledImage
                    src={getImageUrl(id)}
                    alt={title}
                    width={80}
                    height={80}
                    imageUrl={getImageUrl(id)} // Pass imageUrl prop directly
                />
                <AccountTitle>{title}</AccountTitle>
            </InstagramUrl>
            <SavedIcon
                src={'/icons8-save-48.png'}
                alt="SavedIcon"
                onClick={() => savePage(`https://www.instagram.com/${id}/`)}
            />
            <PostBoxName>post</PostBoxName>
            <PostBoxAmount>{post}</PostBoxAmount>
            <FollowersBoxName>followers</FollowersBoxName>
            <FollowersBoxAmount>{followers}</FollowersBoxAmount>
            <FollowingBoxName>following</FollowingBoxName>
            <FollowingBoxAmount>{following}</FollowingBoxAmount>
        </LeftInstComponentWrapper>
    )
}

export default LeftInstComponent
