import styled, { css } from 'styled-components'
import Image from 'next/image'

export const MiddleBox = styled.div`
    position: relative;
    width: 24vw;
    height: 90vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0);
    overflow-y: auto;
    display: flex;
    margin: 1em;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    /* Hide default scrollbar for webkit browsers */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Create custom scrollbar for other browsers */
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.7) transparent;

    /* Track */
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    @media (max-width: 768px) {
        background-color: gray;
        flex-direction: row;
        width: 100vw;
        height: 30vh;
    }
`

export const RightInsideBox = styled.div`
    width: 26vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: flex-start;
    padding: 2em;
    border-radius: 10px;
    background-color: rgba(201, 212, 223, 1);
    box-shadow: 15px 15px 30px -10px rgba(0, 0, 0, 0.2),
        inset 20px 20px 15px rgba(255, 255, 255, 0.7),
        -15px -15px 35px rgba(255, 255, 255, 0.7),
        inset -1px 1px 10px rgba(0, 0, 0, 0.5);
    @media (max-width: 1180px) {
        background-color: gray;
        flex-direction: row;
        width: 100vw;
    }
`
export const TextBox = styled.h3`
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: 'Alcubierre', sans-serif;
    @media (max-width: 1180px) {
        display: none;
    }
`
export const DropdownWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

export const DropdownButton = styled.button`
    width: 18vw;
    height: 60px;
    border: 0;
    border-radius: 6px;
    font-family: inherit;
    font-size: 17px;
    background: #3c3c3c;
`

export const DropdownContent = styled.div`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #f7f7f7;

    &::after {
        content: '';
        position: absolute;
        bottom: 6px;
        right: 10%;
        width: 80%;
        height: 1px;
        transform: scaleX(0);
        background: rgb(255 255 255 / 30%);
        transition: 0.3s;
    }

    ${DropdownWrapper}:hover &::after {
        transform: scaleX(1);
    }

    ${DropdownWrapper} > & > span:first-child {
        font-size: 20px;
    }

    ${DropdownWrapper} > & > span:last-child {
        margin-left: auto;
    }

    ${DropdownWrapper} > & > span:last-child {
        transition: 0.3s;
    }

    ${DropdownWrapper}:hover & > span:last-child {
        rotate: -180deg;
    }
`

export const DropdownMenu = styled.div`
    position: absolute;
    z-index: 1;
    top: -6px;
    left: 50%;
    display: grid;
    width: 110%;
    padding: 70px 0 6px;
    border-radius: 6px;
    translate: -50% 0;
    visibility: hidden;
    opacity: 0;
    scale: 0.85;
    background: linear-gradient(#ea8d8d, #a890fe);
    transition: 0.3s;

    ${DropdownWrapper}:hover & {
        visibility: visible;
        opacity: 1;
        scale: 1;
    }
`

export const DropdownMenuItem = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f7f7f7;
    font-size: 20px;
    padding: 5px 24px;

    &:hover {
        background: rgb(0 0 0 / 10%);
    }

    & > span {
        height: 35px;
        width: 35px;
        background: white;
        border-radius: 6px;
    }
`
export const ContentSection = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100vh;
    width: 100vw;
    padding: 1em;

    @media (max-width: 1180px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;
    }
`

export const LeftBox = styled.div`
    width: 45vw; /* Adjust the width as needed */
    height: 90vh;
    position: relative;
    border-radius: 10px;
    background-color: rgba(
        255,
        255,
        255,
        0
    ); /* Adjust the last value (alpha) to change the opacity */
    margin: 1em;

    @media (max-width: 1180px) {
        width: 100vw;
        height: auto;
    }
`

export const NearMeButton = styled.button`
    position: relative;
    background-color: black;
    border-radius: 4em;
    font-size: 16px;
    color: white;
    padding: 0.8em 1.8em;
    cursor: pointer;
    user-select: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; /* Safari */

    &:hover {
        transition-duration: 0.1s;
        background-color: #3a3a3a;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }

    &:active:after {
        box-shadow: 0 0 0 0 white;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top: 0;
        opacity: 1;
        transition: 0s;
    }

    &:active {
        top: 1px;
    }
`

export const BackgroundImage = styled(Image)<{ mobileHide?: boolean }>`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    ${(props) =>
        props.mobileHide &&
        css`
            @media (max-width: 1180px) {
                display: none;
            }
        `}
`

export const CategoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
`
