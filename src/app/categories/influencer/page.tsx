'use client'
import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    LeftBox,
    MiddleBox,
    NearMeButton,
    RightBox,
    RightInsideBox,
    TextBox,
    Dropdown,
    CategoryPageContainer,
} from './styles'
import instCat from './instCat.json'
import LeftInstComponent from './LeftInstComponent'
import MiddleInstComponent from './MiddleInstComponent'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('Makeup')
    const [instData, setInstData] = useState<any[]>([]) // State to hold the data from the selected JSON file

    const handleInstCategoryChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const instCategoryName = e.target.value
        setSelectedName(instCategoryName)
    }
    useEffect(() => {
        const fetchData = async () => {
            if (!selectedName) {
                // Reset the data if no category is selected
                setInstData([])
                return
            }
            try {
                const response = await import(`./${selectedName}.json`)
                setInstData(response.default)
            } catch (error) {
                console.error('Error fetching JSON file:', error)
                setInstData([]) // Reset the data if there's an error
            }
        }
        fetchData()
    }, [selectedName])

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
                    <RightInsideBox>
                        <TextBox>Choose your category</TextBox>
                        <Dropdown
                            onChange={handleInstCategoryChange}
                            value={selectedName}
                        >
                            <option value="">Select your category</option>
                            {instCat.map((category, index) => (
                                <option key={index} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </Dropdown>
                        <NearMeButton>Search</NearMeButton>
                    </RightInsideBox>
                </RightBox>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
