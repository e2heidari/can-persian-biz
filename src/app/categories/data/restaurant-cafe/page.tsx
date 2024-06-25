'use client'
import React, { useState, useEffect } from 'react'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    Article,
    BusinessesData,
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
    BusinessTypeIcon,
    CustomName,
    StyledSwiperSlide,
    SortDownIcon,
    SortUpIcon,
    SortBox,
    AdvertiseTypeIcon,
    AdvertiseData,
    AdContainer,
    CategoryAmount,
} from '../styles'
import locations from '../locations.json'
import LeftInstComponent from '../LeftInstComponent'
import RightAdComponent from '../RightAdComponent'
import { Swiper } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import ChartComponent from '../ChartComponent' // Import the ChartComponent

interface JSONLengths {
    [key: string]: number
}

const Restaurant: React.FC = () => {
    const [selectedName, setSelectedName] = useState<string>('')
    const [instData, setInstData] = useState<any[]>([]) // State to hold the data from the selected JSON file
    const [selectedCategoryIcon, setSelectedCategoryIcon] = useState<string>(
        'icons8-instagram-96.png'
    )
    const [iconsVisible, setIconsVisible] = useState<boolean>(false)
    const [sortAscending, setSortAscending] = useState<boolean>(false)
    const [sortDescending, setSortDescending] = useState<boolean>(false)
    const [jsonLengths, setJsonLengths] = useState<JSONLengths>({}) // State to hold the lengths of each JSON file

    useEffect(() => {
        // Fetch the lengths of each JSON file when the page loads
        const fetchJSONLengths = async () => {
            const lengths: JSONLengths = {}
            const jsonFiles = [
                'Vancouver.json',
                'Burnaby.json',
                'Coquitlam.json',
                'Langley.json',
                'New Westminster.json',
                'North Vancouver.json',
                'Port Coquitlam.json',
                'Port Moody.json',
                'Richmond.json',
                'Surrey.json',
                'West Vancouver.json',
            ]

            for (const file of jsonFiles) {
                try {
                    const response = await import(`./${file}`)
                    lengths[file] = response.default.length
                } catch (error) {
                    console.error(`Error fetching length of ${file}:`, error)
                    lengths[file] = 0
                }
            }
            setJsonLengths(lengths)
        }

        fetchJSONLengths()
    }, [])

    const handleInstCategoryChange = (selectedOption: string, icon: string) => {
        const instCategoryName = selectedOption
        setSelectedName(instCategoryName)
        setSelectedCategoryIcon(icon)
        setIconsVisible(true) // Show the icons when a category is selected
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

    const handleDownSort = () => {
        setInstData([])
        setSortAscending(!sortAscending) // Toggle sort direction
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import(`./${selectedName}.json`)
                setInstData(sortAscendingData(response.default))
            } catch (error) {
                console.error('Error fetching JSON file:', error)
                setInstData([]) // Reset the data if there's an error
            }
        }

        fetchData()
    }, [sortAscending])

    const handleUpSort = () => {
        setInstData([])
        setSortDescending(!sortDescending) // Toggle sort direction
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import(`./${selectedName}.json`)
                setInstData(sortDescendingData(response.default))
            } catch (error) {
                console.error('Error fetching JSON file:', error)
                setInstData([]) // Reset the data if there's an error
            }
        }

        fetchData()
    }, [sortDescending])

    const sortAscendingData = (data: any[]) => {
        return data.sort((a, b) => {
            // Function to handle numbers followed by "K"
            const convertToNumber = (str: string) => {
                if (str.includes('K')) {
                    return parseFloat(str.replace('K', '')) * 1000
                }
                if (str.includes('M')) {
                    return parseFloat(str.replace('M', '')) * 1000000
                }
                return parseFloat(str.replace(',', ''))
            }
            const followersA = convertToNumber(a.followers)
            const followersB = convertToNumber(b.followers)
            return followersB - followersA // Sort descending
        })
    }

    const sortDescendingData = (data: any[]) => {
        return data.sort((a, b) => {
            // Function to handle numbers followed by "K"
            const convertToNumber = (str: string) => {
                if (str.includes('K')) {
                    return parseFloat(str.replace('K', '')) * 1000
                }
                if (str.includes('M')) {
                    return parseFloat(str.replace('M', '')) * 1000000
                }
                return parseFloat(str.replace(',', ''))
            }
            const followersA = convertToNumber(a.followers)
            const followersB = convertToNumber(b.followers)
            return followersA - followersB // Sort descending
        })
    }

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
                    {locations.map((city, index) => (
                        <StyledSwiperSlide
                            key={index}
                            isMobile={isMobile}
                            pic={city.slide}
                        >
                            <OnClickCategoriesArea
                                onClick={() =>
                                    handleInstCategoryChange(
                                        city.name,
                                        city.icon
                                    )
                                }
                            >
                                <CategoryAmount>
                                    {jsonLengths[`${city.name}.json`] || 0}{' '}
                                    Restaurant
                                </CategoryAmount>
                                <img
                                    src={`/${city.icon}`}
                                    alt={city.name}
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
                                    {city.name}
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
                    <BusinessesData>
                        <BusinessTypeIcon
                            src={`/${selectedCategoryIcon}`}
                            alt={selectedName}
                        />
                        <CustomName isActive={active === 0}>
                            <span>{selectedName}</span>
                        </CustomName>
                        {iconsVisible && (
                            <SortBox isActive={active === 0}>
                                <SortDownIcon
                                    src={'/icons8-down-48.png'}
                                    alt="DownArrow"
                                    onClick={handleDownSort}
                                />
                                <SortUpIcon
                                    src={'/icons8-up-48.png'}
                                    alt="UpArrow"
                                    onClick={handleUpSort}
                                />
                            </SortBox>
                        )}
                        {!iconsVisible ? (
                            <ChartComponent
                                jsonLengths={jsonLengths}
                                style={{
                                    width: '100%',
                                    height: '45vh',
                                }}
                            />
                        ) : (
                            instData.map((instMember, index) => (
                                <LeftInstComponent
                                    active={active}
                                    id={instMember.id}
                                    title={instMember.title}
                                    post={instMember.post}
                                    followers={instMember.followers}
                                    following={instMember.following}
                                    key={index}
                                    image={instMember.image}
                                />
                            ))
                        )}
                    </BusinessesData>
                </Article>
                <Article
                    isActive={active === 0}
                    onClick={() => handleToggle(1)}
                >
                    <AdvertiseData>
                        <AdContainer>
                            <span
                                style={{
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}
                            >
                                Weekly{' '}
                            </span>
                            <AdvertiseTypeIcon
                                src={'/icons8-bullhorn-megaphone-96.png'}
                                alt="bullhorn"
                            />
                            <span
                                style={{
                                    fontSize: '14px',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    marginBottom: '30px',
                                }}
                            >
                                Offers
                            </span>
                        </AdContainer>
                        {instData.map((instMember, index) => (
                            <RightAdComponent
                                active={active}
                                id={instMember.id}
                                title={instMember.title}
                                // post={instMember.post}
                                // followers={instMember.followers}
                                // following={instMember.following}
                                key={index}
                            />
                        ))}
                    </AdvertiseData>
                </Article>
            </ContentSection>
            <Footer />
        </CategoryPageContainer>
    )
}

export default Restaurant
