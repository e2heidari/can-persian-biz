'use client'
import React from 'react'

import { TopBox } from './styles'
import MySwiper from './MySwiper'

const PageComponent = ({ category }: { category: any }) => {
    return (
        <TopBox>
            <MySwiper category={category} />
        </TopBox>
    )
}

export default PageComponent
