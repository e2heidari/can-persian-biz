import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/style/fonts.css'
import { Restaurant } from './type'
import { fetchDetailsForPlace } from './util'
import places from './places.json'
import Content from './content'

const FastFood = async () => {
    let restaurants: Restaurant[] = []

    const requestsPromise = []
    for (const placeId of places) {
        try {
            requestsPromise.push(fetchDetailsForPlace(placeId))
        } catch (error) {
            console.error(`Error fetching details for place ${placeId}:`, error)
        }
    }
    restaurants = await Promise.all(requestsPromise)

    return (
        <div
            style={{
                overflow: 'hidden',
            }}
        >
            <Header />
            <div>
                <Content restaurants={restaurants} />
            </div>
            <Footer />
        </div>
    )
}

export default FastFood
