import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

const StyledImageContainer = styled.div`
    position: relative;
`

const StyledImage = styled(Image)<StyledImageProps>`
    width: 28vw;
    height: 26vh;
    object-fit: cover;
`

const CategoryName = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

interface MiddleInstComponentProps {
    name: string
}

const MiddleInstComponent: React.FC<MiddleInstComponentProps> = ({ name }) => {
    const getImageUrl = (name: string) => {
        // Assuming images are stored in a folder named 'images'
        return `/${name}.jpg` // Change the file extension as per your image format
    }
    console.log(name)

    return (
        <StyledImageContainer>
            <StyledImage
                src={getImageUrl(name)}
                alt={name}
                width={80}
                height={80}
                imageUrl={getImageUrl(name)} // Pass imageUrl prop directly
            />
            <CategoryName>{name}</CategoryName>
        </StyledImageContainer>
    )
}

export default MiddleInstComponent
