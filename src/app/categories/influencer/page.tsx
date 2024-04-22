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
import instCat from './instCat.json'
import instData from './instData.json'
import LeftInstComponent from './LeftInstComponent'
import MiddleInstComponent from './MiddleInstComponent'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')

    const handleInstCategoryChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const instCategoryName = e.target.value
        setSelectedName(instCategoryName)
    }

    return (
        <CategoryPageContainer>
            <Header />
            <ContentSection>
                <BackgroundImage
                    src="/influencerBackground.jpg"
                    alt="influencer Background"
                    layout="fill"
                />
                <LeftBox>
                    {instData.map((instMember, index) => (
                        <LeftInstComponent
                            id={instMember.id}
                            title={instMember.title}
                            post={instMember.post}
                            followers={instMember.followers}
                            following={instMember.following}
                            key={index}
                        />
                    ))}
                </LeftBox>
                <MiddleBox>
                    {instCat.map((instCatName, index) => (
                        <MiddleInstComponent
                            name={instCatName.name.replace(/\s/g, '-')}
                            key={index}
                        />
                    ))}
                </MiddleBox>
                <RightBox>
                    <RightMiddleBox>
                        <TextBox>Choose your category</TextBox>
                        <Dropdown
                            onChange={handleInstCategoryChange}
                            value={selectedName}
                        >
                            <option value="">Select your category</option>
                            {instCat.map((city, index) => (
                                <option key={index} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </Dropdown>
                        <NearMeButton>Search</NearMeButton>
                    </RightMiddleBox>
                </RightBox>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
