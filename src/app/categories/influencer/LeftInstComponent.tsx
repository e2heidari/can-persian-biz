import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

const LeftInstComponentWrapper = styled.div`
    display: grid;
    background-color: rgba(
        255,
        255,
        255,
        0.4
    ); /* Adjust the last value (alpha) to change the opacity */
    grid-template-columns: 60px auto 60px 20px 60px 20px 60px 30px;
    grid-template-rows: 1vh 3.5vh 3.5vh 1vh;
    border-radius: 10px;
    margin: 0px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: 50px auto 40px 20px 55px 15px;
        grid-template-rows: 1vh 2.9vh 2.9vh 1vh;
    }
`

const StyledImage = styled(Image)<StyledImageProps>`
    width: 50px;
    height: 50px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 5;
    justify-self: stretch;
    place-self: center;
    border-radius: 50%;
    background-color: rgba(
        255,
        255,
        255,
        0.5
    ); /* Adjust the last value (alpha) to change the opacity */
    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
    }
`

const AccountTitle = styled.p`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    justify-self: start;
    align-self: center;
    margin: 4px;
    font-size: 16px;
    font-weight: bold;
`

const PostBoxName = styled.p`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
`
const PostBoxAmount = styled.p`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    font-size: 16px;
    place-self: center;
    font-weight: bold;
`

const FollowersBoxName = styled.p`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
`
const FollowersBoxAmount = styled.p`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
    font-size: 16px;
    place-self: center;
    font-weight: bold;
`

const FollowingBoxName = styled.p`
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 16px;
    place-self: center;
    @media (max-width: 768px) {
        display: none;
    }
`
const FollowingBoxAmount = styled.p`
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 4;
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
}

const LeftInstComponent: React.FC<LeftInstComponentProps> = ({
    id,
    title,
    post,
    followers,
    following,
}) => {
    const getImageUrl = (id: string) => {
        // Assuming images are stored in a folder named 'images'
        return `/${id}.jpg` // Change the file extension as per your image format
    }

    return (
        <LeftInstComponentWrapper>
            <StyledImage
                src={getImageUrl(id)}
                alt={title}
                width={80}
                height={80}
                imageUrl={getImageUrl(id)} // Pass imageUrl prop directly
            />
            <AccountTitle>{title}</AccountTitle>
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
