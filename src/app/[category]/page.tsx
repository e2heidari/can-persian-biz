import React from 'react'
import data from './data.json'
import PageComponent from './PageComponent'

const Page = ({ params }: { params: { category: string } }) => {
    const category = data.find((item) => item.id === params.category)
    if (!category) {
        return null
    }
    return <PageComponent category={category} />
}

export default Page
