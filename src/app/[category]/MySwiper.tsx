;`use client`
import React from 'react'
import { Swiper } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import Link from 'next/link'
import { CategoryAmount, StyledSwiperSlide } from './styles'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

type Props = {
    category: any
}

const MySwiper = (props: Props) => {
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
                    <StyledSwiperSlide isMobile={false} pic={subcategory.slide}>
                        <a href={`/${props.category.id}/${subcategory.id}`}>
                            <CategoryAmount>{subcategory.name}</CategoryAmount>
                        </a>
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
                    </StyledSwiperSlide>
                </Link>
            ))}
        </Swiper>
    )
}

export default MySwiper
