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
    TopBox,
    // TextBox,
    // DropdownWrapper,
    // DropdownButton,
    // DropdownContent,
    // DropdownMenu,
    // DropdownMenuItem,
    CategoryPageContainer,
} from './styles'
import instCat from './instCat.json'
import LeftInstComponent from './LeftInstComponent'
import MiddleInstComponent from './MiddleInstComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')
    const [instData, setInstData] = useState<any[]>([]) // State to hold the data from the selected JSON file
    // const [selectedCategory, setSelectedCategory] = useState<string>('Category') // Initial value is 'Settings'
    const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>()

    const handleInstCategoryChange = (selectedOption: string, icon: string) => {
        const instCategoryName = selectedOption
        setSelectedName(instCategoryName)
        // setSelectedCategory(selectedOption)
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
            <TopBox
                style={{
                    width: '100%',
                    backgroundColor: '#0e0e0e',
                }}
            >
                <Swiper
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    effect="coverflow"
                    loop
                    // style={{
                    //     width: '100%',
                    // }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                >
                    {instCat.map((category, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                position: 'relative',
                                backgroundImage: `url(${category.slide})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                width: '19%',
                                height: '30vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end', // Align items at the bottom
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Align items horizontally
                                }}
                                onClick={() =>
                                    handleInstCategoryChange(
                                        category.name,
                                        category.icon
                                    )
                                }
                            >
                                <img
                                    src={`/${category.icon}`}
                                    alt={category.name}
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        background: '#10121E',
                                        borderRadius: '6px',
                                    }}
                                />
                                <span
                                    style={{
                                        textAlign: 'center',
                                        color: '#ffffff',
                                    }}
                                >
                                    {category.name}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <TextBox>Choose your category</TextBox> */}
                {/* <DropdownWrapper>
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
                    </DropdownWrapper> */}
                {/* <NearMeButton>Search</NearMeButton> */}
            </TopBox>
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
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
