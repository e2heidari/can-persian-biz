'use client'
import data from '../data.json'
import PageComponent from '../PageComponent'
import React, { useEffect, useState } from 'react'
import {
    BackgroundImage,
    ContentSection,
    Article,
    BusinessesData,
    BusinessTypeIcon,
    CustomName,
    SortDownIcon,
    SortUpIcon,
    SortBox,
    AdvertiseTypeIcon,
    AdvertiseData,
    AdContainer,
} from '../styles'
import LeftInstComponent from './LeftInstComponent'
import RightAdComponent from './RightAdComponent'
import { useActive } from './hooks/useCustomRecoilHooks'
import { sortAscendingData, sortDescendingData } from './sortFunctions'

const Page = ({
    params,
}: {
    params: { category: string; subcategory: string }
}) => {
    const [active, setActive] = useActive()
    const handleToggle = (index: boolean) => setActive(index)
    const visibility = active === false ? 'visible' : 'hidden'
    const [items, setItems] = useState<any[]>([])

    const category = data.find((item) => item.id === params.category)
    if (!category) {
        return null
    }

    const subCategory = category.subcategory.find(
        (item) => item.id === params.subcategory
    )
    if (!subCategory) {
        return null
    }

    useEffect(() => {
        setItems(subCategory.items)
    }, [subCategory])

    const handleDownSort = () => {
        setItems([])
        const sortedItems = sortAscendingData(items) // Toggle sort direction
        setItems(sortedItems)
    }

    const handleUpSort = () => {
        setItems([])
        const sortedItems = sortDescendingData(items) // Toggle sort direction
        setItems(sortedItems)
    }

    return (
        <>
            <PageComponent category={category} />
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
                            src={`/${subCategory.icon}`}
                            alt={subCategory.id}
                        />
                        <CustomName isActive={active === false}>
                            <span>{subCategory.id}</span>
                        </CustomName>

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

                        {items.map((instMember, index) => (
                            <LeftInstComponent
                                active={active}
                                id={instMember.id}
                                title={instMember.title}
                                post={instMember.post}
                                followers={instMember.followers}
                                key={index}
                            />
                        ))}
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
                        {items.map((instMember, index) => (
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
        </>
    )
}

export default Page
