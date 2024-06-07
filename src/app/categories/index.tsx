import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import Category from './Category'
import Link from 'next/link'

const BackgroundContainer = styled.div`
    background-color: white;
    width: 100%;

    @media (max-width: 768px) {
        background-color: ${(props: { showAllIcons: boolean }) =>
            props.showAllIcons ? 'white' : 'transparent'};
    }
`

const CategoriesBoxContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 10px 10px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 5px 5px;
    }
`
const SavedItems = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
`

const SavedIcons = styled.img`
    width: 50px;
    height: 50px;
`

const TextSavedItems = styled.div`
    font-size: 13px;
    font-weight: bold;
`

const TextTopBox = styled.div`
    width: 100%;
    margin: 10px 0 10px 0;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    color: #747474;

    @media (max-width: 768px) {
        /* Mobile size styles */
        font-size: 4vw;
        margin: 10px 0px 20px 0px;
    }
`

const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px auto;
    padding: 0 12%;
    justify-content: center; /* Center the boxes horizontally */
    align-items: center;
    @media (max-width: 1024px) {
        padding: 0 12%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const CategoriesContainerMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        /* Mobile size styles */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: auto;
        margin: 30px auto;
        padding: 0 5%;
    }
`
// const CategoriesIcons = styled.div`
// display: none;

//   @media (max-width: 768px) {
//     /* Mobile size styles */
//   height: 232px;
//   margin: 25px auto;
//     padding: 0 5%;
//     display: flex;
//     flex-wrap: wrap;
//   justify-content: center; /* Center the boxes horizontally */
//   align-items: center;
//   }
// `;

const MoreButtonContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        /* Mobile size styles */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }
`

const StyledButton = styled(Button)`
    && {
        @media (max-width: 768px) {
            /* Mobile size styles */
            width: 200px;
            height: 40px;
            align-items: center;
            justify-content: center;
            background-color: #1677ff;
            color: white;
            border: none;
            cursor: pointer;
            margin: 10px 0px;
            border-radius: 20px;
        }
    }
`

const categoriesData = [
    { icon: 'category-icon1.png', text: 'Fast Food' },
    { icon: 'category-icon2.png', text: 'Restaurant' },
    { icon: 'category-icon10.png', text: 'Homemade Food' },
    { icon: 'category-icon3.png', text: 'Real Estate' },
    { icon: 'icons8-shopaholic-96.png', text: 'Shopping & Markets' },
    { icon: 'category-icon20.png', text: 'Artist' },
    { icon: 'category-icon6.png', text: 'Beauty Salon' },
    { icon: 'icons8-spa-care-96.png', text: 'Health & Beauty' },
    { icon: 'category-icon8.png', text: 'Dentist' },
    { icon: 'category-icon9.png', text: 'Pharmacy' },
    { icon: 'icons8-physical-therapy-96.png', text: 'Therapist' },
    { icon: 'category-icon11.png', text: 'Daycare & Education' },
    { icon: 'category-icon12.png', text: 'Lawyer & Immigration' },
    { icon: 'category-icon4.png', text: 'Accounting & Insurance' },
    { icon: 'category-icon14.png', text: 'Designer & EventPlanner' },
    { icon: 'category-icon16.png', text: 'Renovation & Construction' },
    { icon: 'category-icon17.png', text: 'Sports & Trainers' },
    { icon: 'category-icon15.png', text: 'Driving School' },
    { icon: 'category-icon22.png', text: 'Pets & Animals' },
    { icon: 'category-icon23.png', text: 'Job & Business' },
    { icon: 'category-icon13.png', text: 'Cargo & Post' },
    { icon: 'icons8-friendship-96.png', text: 'Groups & Hike' },
    { icon: 'icons8-channel-96.png', text: 'Channel & Magazine' },
    { icon: 'icons8-tourism-96.png', text: 'Entertainment & Attraction' },
    { icon: 'category-icon7.png', text: 'Hookah Lounge' },
]

const Categories: React.FC = () => {
    const [showAllIcons, setShowAllIcons] = useState(false)
    const [moreButtonText, setMoreButtonText] = useState('More')

    const handleMoreClick = () => {
        setShowAllIcons(!showAllIcons)
        setMoreButtonText(showAllIcons ? 'More' : 'Less')
    }

    return (
        <BackgroundContainer showAllIcons={showAllIcons}>
            <CategoriesBoxContainer>
                <Link href="/categories/saved-pages">
                    <SavedItems>
                        <SavedIcons
                            src={'/icons8-save-all-96.png'}
                            alt="SavedIcons"
                        />
                        <TextSavedItems>Saved Items</TextSavedItems>
                    </SavedItems>
                </Link>

                <TextTopBox>Categories</TextTopBox>
                <CategoriesContainerMobile>
                    {categoriesData
                        .slice(0, showAllIcons ? categoriesData.length : 6)
                        .map((data, index) => (
                            <Link
                                key={data.text}
                                href={`/categories/data/${data.text
                                    .toLowerCase()
                                    .replaceAll(' &', '')
                                    .replaceAll(' ', '-')}`}
                            >
                                <Category
                                    key={index}
                                    index={index}
                                    icon={data.icon}
                                    text={data.text}
                                />
                            </Link>
                        ))}
                </CategoriesContainerMobile>
                <MoreButtonContainer>
                    <StyledButton
                        type="primary"
                        size="large"
                        onClick={handleMoreClick}
                    >
                        {moreButtonText}
                    </StyledButton>
                </MoreButtonContainer>
                <CategoriesContainer>
                    {categoriesData.map((data, index) => (
                        <Link
                            key={data.text}
                            href={`/categories/data/${data.text
                                .toLowerCase()
                                .replace(' &', '')
                                .replace(' ', '-')}`}
                        >
                            <Category
                                key={index}
                                index={index}
                                icon={data.icon}
                                text={data.text}
                            />
                        </Link>
                    ))}
                </CategoriesContainer>
            </CategoriesBoxContainer>
        </BackgroundContainer>
    )
}

export default Categories
