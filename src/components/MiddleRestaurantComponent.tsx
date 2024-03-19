import React, { useEffect } from 'react'
import styled from 'styled-components'

const MiddleRestaurantComponent = styled.div`
    border: 3px solid black;
    width: 24vw;
    background-color: white;
`
const UpPart = styled.div`
    display: grid;
    grid-template-columns: 12vw 3vw 6vw 3vw;
    grid-template-rows: 5vh;
    width: 24vw;
    background-color: green;
`
const RestaurantName = styled.p`
    grid-column-start: 1;
    grid-column-end: 2;
    justify-self: stretch;
    align-self: center;
`
const DownPart = styled.div`
    display: grid;
    grid-template-columns: 4vw 9vw 11vw;
    grid-template-rows: 5vh 6vh;
    width: 24vw;
    background-color: white;
`

interface Restaurant {
    opening_hours?: google.maps.places.PlaceOpeningHours
    place_id?: string
    name?: string
    formatted_address?: string
    geometry: {
        location: {
            lat: number
            lng: number
        }
    }
    rating?: number
    user_ratings_total?: number
    price_level?: number
    website?: string
}

interface Props {
    restaurant: Restaurant
}

const MiddleRestaurantsComponent: React.FC<Props> = ({ restaurant }) => {
    useEffect(() => {
        console.log(restaurant.name) // Log the restaurant props to the console
    }, [restaurant])
    return (
        <MiddleRestaurantComponent>
            <UpPart>
                <RestaurantName>{restaurant.name}</RestaurantName>
            </UpPart>
            <DownPart></DownPart>
        </MiddleRestaurantComponent>
    )
}

export default MiddleRestaurantsComponent
