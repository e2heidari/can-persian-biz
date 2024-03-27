'use client'

import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    background-color: #262626;
    color: white;
    height: 10vh;
    width: 100vw;
    padding: 50px 0;
    text-align: center;
`

const FooterText = styled.p`
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const FooterLink = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                © {new Date().getFullYear()} PerNet All rights reserved. |{' '}
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink> |{' '}
                <FooterLink href="/terms-of-service">
                    Terms of Service
                </FooterLink>
            </FooterText>
        </FooterContainer>
    )
}

export default Footer
