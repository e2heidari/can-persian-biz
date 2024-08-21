'use client'

import React from 'react'
import data from './data.json'
import PageComponent from './PageComponent'
import ChartComponent from './ChartComponent'
import { ContentSection } from './styles'

const Page = ({ params }: { params: { category: string } }) => {
    const category = data.find((item) => item.id === params.category)
    if (!category) {
        return null
    }

    // Extract labels and dataValues
    const labels = category.subcategory.map((subcat) => subcat.name)
    const dataValues = category.subcategory.map((subcat) => subcat.items.length)

    return (
        <>
            <PageComponent category={category} />
            <ContentSection>
                <ChartComponent
                    labels={labels}
                    dataValues={dataValues}
                    style={{
                        width: '60%',
                        height: '50vh',
                    }}
                />
            </ContentSection>
        </>
    )
}

export default Page
