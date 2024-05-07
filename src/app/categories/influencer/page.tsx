'use client'
import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    Article,
    CustomContent,
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
    OnClickCategoriesArea,
    CustomImage,
    CustomName,
    StyledSwiperSlide,
} from './styles'
import instCat from './instCat.json'
import LeftInstComponent from './LeftInstComponent'
import RightInstComponent from './RightInstComponent'
import { Swiper } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const Influencer: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')
    const [instData, setInstData] = useState<any[]>([]) // State to hold the data from the selected JSON file
    // const [selectedCategory, setSelectedCategory] = useState<string>('Category') // Initial value is 'Settings'
    const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>(
        'icons8-instagram-96.png'
    )

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

    const [active, setActive] = useState(0)

    const handleToggle = (index: number) => setActive(index)

    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <CategoryPageContainer>
            <Header />
            <TopBox>
                <Swiper
                    grabCursor
                    centeredSlides
                    slidesPerView={3}
                    spaceBetween={0}
                    effect="coverflow"
                    loop
                    style={{}}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }} // Enable pagination with clickable bullets
                    modules={[EffectCoverflow, Pagination]}
                >
                    {instCat.map((category, index) => (
                        <StyledSwiperSlide
                            key={index}
                            isMobile={isMobile}
                            style={{
                                backgroundImage: `url(${category.slide})`,
                            }}
                        >
                            <OnClickCategoriesArea
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
                                        width: '25px',
                                        height: '25px',
                                        background: '#060606',
                                        borderRadius: '6px',
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                    }}
                                >
                                    {category.name}
                                </span>
                            </OnClickCategoriesArea>
                        </StyledSwiperSlide>
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
                <Article
                    isActive={active === 1}
                    onClick={() => handleToggle(0)}
                >
                    <BackgroundImage
                        src="/influencerBackground1.jpg"
                        alt="influencer Background"
                        layout="fill"
                    />
                    <CustomContent>
                        <CustomImage
                            src={`/${selectedCategoryIcon}`}
                            alt={selectedName}
                        />
                        <CustomName isActive={active === 0}>
                            {selectedName}
                        </CustomName>
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
                    </CustomContent>
                </Article>
                <Article
                    isActive={active === 0}
                    onClick={() => handleToggle(1)}
                >
                    <BackgroundImage
                        src="/jon-ly-Xn7GvimQrk8-unsplash (1).jpg"
                        alt="influencer Background"
                        layout="fill"
                    />
                    <CustomContent>
                        {instCat.map((instCatName, index) => (
                            <RightInstComponent
                                name={instCatName.name.replace(/\s/g, '-')}
                                key={index}
                            />
                        ))}
                    </CustomContent>
                </Article>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Influencer
