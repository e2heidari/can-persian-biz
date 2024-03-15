import styled, { css } from 'styled-components'
import Image from 'next/image'

export const ContentSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%; /* Ensure the ContentSection spans the full width */
    height: 100%; /* Ensure the ContentSection spans the full height */

    @media (max-width: 1180px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const LeftBox = styled.div`
    width: 55vw; /* Adjust the width as needed */
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;

    @media (max-width: 1180px) {
        width: 100%;
        height: auto;
    }
`

export const MapBox = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2em;

    @media (max-width: 768px) {
        width: 100vw; // Width for mobile screens
    }
`

export const MiddleBox = styled.div`
    width: 28vw;
    height: 85vh;
    background-color: gray;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        background-color: gray;
        flex-direction: row;
        width: 100vw;
        height: 30vh;
    }
`
export const MiddleRestaurantComponent = styled.div`
    position: relative;

    width: 25vw;
    height: 20vh;
    background-color: white;
`
export const RightBox = styled.div`
    width: 20vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);

    @media (max-width: 1180px) {
        background-color: #007bff;
        width: 100%;
        height: auto;
    }
`

export const RightMiddleBox = styled.div`
    width: 18vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh;
    @media (max-width: 1180px) {
        background-color: gray;
        flex-direction: row;
        width: 100vw;
    }
`

export const TextBox = styled.h3`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: 'Alcubierre', sans-serif;
    @media (max-width: 1180px) {
        display: none;
    }
`

export const Dropdown = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    @media (max-width: 1180px) {
        margin-top: 15px;
    }
`

export const NearMeButton = styled.button`
    font-family: 'Alcubierre', sans-serif;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    @media (max-width: 1180px) {
        margin-bottom: 10px;
    }
`

export const BackgroundImage = styled(Image)<{ mobileHide?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${(props) =>
        props.mobileHide &&
        css`
            @media (max-width: 1180px) {
                display: none;
            }
        `}
`
