import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'
import { useAddItem } from './hooks/useCustomRecoilHooks'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

const LeftInstComponentWrapper = styled.div<{ isActive: boolean }>`
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
    padding: 5px;
    display: grid;
    background-color: rgba(255, 255, 255, 0.4);
    grid-template-columns: auto 25px 10px 60px 15px 60px 20px 60px 30px;
    grid-template-rows: 27px 27px;
    border-radius: 10px;
    margin: 0px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: auto 20px 10px 40px 15px 55px 10px;
        grid-template-rows: 25px 25px;
        padding: 4px;
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

const SavedIconText = styled.p`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 14px;
    place-self: center;
    font-weight: bold;
`

const SavedIcon = styled.button`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    place-self: center;
    width: 25px;
    height: 25px;
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;

    &:hover {
        transition-duration: 0.1s;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
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
        position: absolute;
        width: 2px;
        height: 2px;
        opacity: 1;
        transition: 0s;
    }

    &:active {
        top: 1px;
    }
`

const PostBox = styled.p`
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

const FollowersBox = styled.p`
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

const FollowingBox = styled.p`
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
    active: boolean
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
    const getImageUrl = (id: string) => `/${id}.jpg`

    const addItem = useAddItem()

    return (
        <LeftInstComponentWrapper isActive={active === false}>
            <InstagramUrl key={id} href={`https://www.instagram.com/${id}/`}>
                <StyledImage
                    src={getImageUrl(id)}
                    alt={title}
                    width={80}
                    height={80}
                    imageUrl={getImageUrl(id)}
                />
                <AccountTitle>{title}</AccountTitle>
            </InstagramUrl>
            <SavedIcon>
                <Image
                    src={'/icons8-save-48.png'}
                    alt="SavedIcon"
                    height={48}
                    width={48}
                    onClick={() =>
                        addItem({
                            url: `https://www.instagram.com/${id}/`,
                            id: `${id}`,
                            post: `${post}`,
                            title: `${title}`,
                            followers: `${followers}`,
                            following: `${following}`,
                            image: `${getImageUrl(id)}`,
                        } as any)
                    }
                />
            </SavedIcon>
            <SavedIconText>save</SavedIconText>
            <PostBox>post</PostBox>
            <PostBoxAmount>{post}</PostBoxAmount>
            <FollowersBox>followers</FollowersBox>
            <FollowersBoxAmount>{followers}</FollowersBoxAmount>
            <FollowingBox>following</FollowingBox>
            <FollowingBoxAmount>{following}</FollowingBoxAmount>
        </LeftInstComponentWrapper>
    )
}

export default LeftInstComponent
