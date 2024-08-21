;`use client`
import React from 'react'
import { Swiper } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import Link from 'next/link'
import { CategoryAmount, StyledSwiperSlide, StyledLink } from './styles'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { useMediaQuery } from 'react-responsive'

type Props = {
    category: any
}

const MySwiper = (props: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return (
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
            {props.category.subcategory.map((subcategory: any) => (
                <Link
                    href={`/${props.category.id}/${subcategory.id}`}
                    key={subcategory.id}
                    passHref
                >
                    <StyledSwiperSlide
                        isMobile={isMobile}
                        pic={subcategory.slide}
                    >
                        <StyledLink
                            href={`/${props.category.id}/${subcategory.id}`}
                        >
                            <CategoryAmount>{subcategory.name}</CategoryAmount>
                            <Image
                                src={`/${subcategory.icon}`}
                                alt={subcategory.name}
                                width={25}
                                height={25}
                                style={{
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
                                {subcategory.items.length}
                                {` `}
                                {subcategory.name}
                            </span>
                        </StyledLink>
                    </StyledSwiperSlide>
                </Link>
            ))}
        </Swiper>
    )
}

export default MySwiper
