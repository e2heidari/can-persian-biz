'use client'
import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    LeftBox,
    MiddleBox,
    // NearMeButton,
    // RightBox,
    RightInsideBox,
    TextBox,
    DropdownWrapper,
    DropdownButton,
    DropdownContent,
    DropdownMenu,
    DropdownMenuItem,
    CategoryPageContainer,
} from './styles'
import instCat from './instCat.json'
import LeftInstComponent from './LeftInstComponent'
import MiddleInstComponent from './MiddleInstComponent'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')
    const [instData, setInstData] = useState<any[]>([]) // State to hold the data from the selected JSON file
    const [selectedCategory, setSelectedCategory] = useState<string>('Category') // Initial value is 'Settings'
    const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>(
        'icons8-instagram-96.png'
    )

    const handleInstCategoryChange = (selectedOption: string, icon: string) => {
        const instCategoryName = selectedOption
        setSelectedName(instCategoryName)
        setSelectedCategory(selectedOption)
        setSelectedCategoryIcon(icon)
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
                    src="/influencerBackground1.jpg"
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
                <RightInsideBox>
                    {/* <TextBox>Choose your category</TextBox> */}
                    <DropdownWrapper>
                        <DropdownContent>
                            <span
                                className="material-symbols-outlined"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={`/${selectedCategoryIcon}`}
                                    style={{
                                        height: '38px',
                                        width: '38px',
                                        background: 'white',
                                        borderRadius: '6px',
                                        marginRight: '5px', // Add some margin between the image and text
                                    }}
                                />{' '}
                                {selectedCategory}
                            </span>

                            <span className="material-symbols-outlined">
                                <img src="/icons8-down-button-50.png" />
                            </span>
                        </DropdownContent>
                        <DropdownButton type="button"></DropdownButton>
                        <DropdownMenu>
                            {instCat.map((category, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() =>
                                        handleInstCategoryChange(
                                            category.name,
                                            category.icon
                                        )
                                    }
                                >
                                    <span className="material-symbols-outlined">
                                        <img src={`/${category.icon}`} />
                                    </span>
                                    <p>{category.name}</p>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenu>
                    </DropdownWrapper>
                    {/* <NearMeButton>Search</NearMeButton> */}
                </RightInsideBox>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
