import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

const LeftInstComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: 80px auto 70px 30px 70px 30px 70px;
    border-radius: 10px;
    height: 14vh; /* Set the height to 12vh */
    padding: 0.5em; /* Add padding */
    border: 1px solid black;
    width: 55vw;
`

const StyledImage = styled(Image)<StyledImageProps>`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
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
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: start;
    align-self: center;
`

const PostBox = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    place-self: center;
`

const FollowersBox = styled.div`
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    place-self: center;
`

const FollowingBox = styled.div`
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
    place-self: center;
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
            <PostBox>post: {post}</PostBox>
            <FollowersBox>followers: {followers}</FollowersBox>
            <FollowingBox>following: {following}</FollowingBox>
        </LeftInstComponentWrapper>
    )
}

export default LeftInstComponent
