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
        0.5
    ); /* Adjust the last value (alpha) to change the opacity */
    grid-template-columns: 80px auto 70px 30px 70px 30px 70px 40px;
    grid-template-rows: 3vh 3.5vh 3.5vh 3vh;
    border-radius: 10px;
    margin: 4px;
    height: 13vh; /* Set the height to 12vh */
    width: 100%;
`

const StyledImage = styled(Image)<StyledImageProps>`
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
`

const AccountTitle = styled.p`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    justify-self: start;
    align-self: center;
    margin: 4px;
    font-weight: bold;
`

const PostBoxName = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    place-self: center;
`
const PostBoxAmount = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    place-self: center;
    font-weight: bold;
`

const FollowersBoxName = styled.div`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
    place-self: center;
`
const FollowersBoxAmount = styled.div`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
    place-self: center;
    font-weight: bold;
`

const FollowingBoxName = styled.div`
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
    place-self: center;
`
const FollowingBoxAmount = styled.div`
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 4;
    place-self: center;
    font-weight: bold;
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
