'use client'
import React, { useState } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    LeftBox,
    MiddleBox,
    NearMeButton,
    RightBox,
    RightMiddleBox,
    TextBox,
    Dropdown,
    CategoryPageContainer,
} from './styles'
import instaCat from '../instaCat.json'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')

    const handleInstaCategoryChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const instaCategoryName = e.target.value
        setSelectedName(instaCategoryName)
    }

    return (
        <CategoryPageContainer>
            <Header />
            <ContentSection>
                <BackgroundImage
                    src="/inflouencerbackground.jpg"
                    alt="inflouencer Background"
                    layout="fill"
                />
                <LeftBox></LeftBox>
                <MiddleBox></MiddleBox>

                <RightBox>
                    <RightMiddleBox>
                        <TextBox>Choose your city</TextBox>
                        <Dropdown
                            onChange={handleInstaCategoryChange}
                            value={selectedName}
                        >
                            <option value="">Select your city</option>
                            {instaCat.map((city, index) => (
                                <option key={index} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </Dropdown>
                        <NearMeButton>Near Me</NearMeButton>
                    </RightMiddleBox>
                </RightBox>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
