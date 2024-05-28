import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

interface StyledImageProps extends ImageProps {
    imageUrl: string
}

const AdCard = styled.div<{ isActive: boolean }>`
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    margin-bottom: 30px;
    padding: 5px 5px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
`

const StyledImage = styled(Image)<StyledImageProps>`
    width: 60px;
    height: 60px;
    margin-top: -30px;

    border-radius: 50%;
`

interface RightAdComponentProps {
    id: string
    title: string
    active: number

    // post: string
    // followers: string
    // following: string
}

const RightAdComponent: React.FC<RightAdComponentProps> = ({
    id,
    title,
    active,
    // post,
    // followers,
    // following,
}) => {
    const getImageUrl = (name: string) => {
        // Assuming images are stored in a folder named 'images'
        return `/${name}.jpg` // Change the file extension as per your image format
    }
    console.log(name)

    return (
        <AdCard isActive={active === 1}>
            <StyledImage
                src={getImageUrl(id)}
                alt={title}
                width={80}
                height={80}
                imageUrl={getImageUrl(id)} // Pass imageUrl prop directly
            />
            <h2>Kaye Morris</h2>
            <p>
                Empowering users through captivating interfaces, turning ideas
                into pixel-perfect realities.
            </p>
        </AdCard>
    )
}

export default RightAdComponent
