'use client'
import React, { useEffect } from 'react'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import {
    BackgroundImage,
    ContentSection,
    Article,
    BusinessesData,
    TopBox,
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
import instCat from './instCat.json'
import LeftInstComponent from '../LeftInstComponent'
import RightAdComponent from '../RightAdComponent'
import { Swiper } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import ChartComponent from '../ChartComponent'
import {
    useSelectedName,
    useInstData,
    useSelectedCategoryIcon,
    useIconsVisible,
    useSortAscending,
    useSortDescending,
    useJsonLengths,
    useActive,
} from '../hooks/useCustomRecoilHooks'
import { sortAscendingData, sortDescendingData } from '../sortFunctions'
interface JSONLengths {
    [key: string]: number
}

const ChannelMagazine: React.FC = () => {
    const [selectedName, setSelectedName] = useSelectedName()
    const [selectedCategoryIcon, setSelectedCategoryIcon] =
        useSelectedCategoryIcon()
    const [iconsVisible, setIconsVisible] = useIconsVisible()
    const [instData, setInstData] = useInstData()
    const [sortAscending, setSortAscending] = useSortAscending()
    const [sortDescending, setSortDescending] = useSortDescending()
    const [jsonLengths, setJsonLengths] = useJsonLengths()
    const [active, setActive] = useActive()

    useEffect(() => {
        // Fetch the lengths of each JSON file when the page loads
        const fetchJSONLengths = async () => {
            const lengths: JSONLengths = {}
            const jsonFiles = ['Channel.json', 'Magazine.json'] // Replace with your actual JSON file names

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

    const handleInstCategoryChange = (selectedOption: string, icon: string) => {
        const instCategoryName = selectedOption
        setSelectedName(instCategoryName)
        setSelectedCategoryIcon(icon)
        setIconsVisible(true)
    }

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

    const handleToggle = (index: boolean) => setActive(index)

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const visibility = active === false ? 'visible' : 'hidden'

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
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {instCat.map((city, index) => (
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
                                <CategoryAmount>{city.name}</CategoryAmount>
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
                                    {jsonLengths[`${city.name}.json`] || 0}
                                    Restaurants
                                </span>
                            </OnClickCategoriesArea>
                        </StyledSwiperSlide>
                    ))}
                </Swiper>
            </TopBox>
            <ContentSection>
                <Article
                    isActive={active === true}
                    onClick={() => handleToggle(false)}
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
                        <CustomName isActive={active === false}>
                            <span>{selectedName}</span>
                        </CustomName>
                        {iconsVisible && (
                            <SortBox isActive={active === false}>
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
                                    visibility: visibility,
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
                    isActive={active === false}
                    onClick={() => handleToggle(true)}
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

export default ChannelMagazine
