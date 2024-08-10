import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

const MiddleRestaurantComponent = styled.div<{ isActive: boolean }>`
    border: 1px solid black;
    width: 24vw;
    background-color: white;
    cursor: pointer;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 5px 2px #6c63ff;
    }

    ${(props) =>
        props.isActive &&
        css`
            box-shadow: 0 0 5px 2px #6c63ff;
        `}
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
    onMapRestaurant: Restaurant | null
}

const MiddleRestaurantsComponent: React.FC<Props> = ({
    restaurant,
    onMapRestaurant,
}) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(
            !!onMapRestaurant && restaurant.name === onMapRestaurant.name
        )
    }, [onMapRestaurant])

    return (
        <MiddleRestaurantComponent isActive={isActive}>
            <UpPart>
                <RestaurantName>{restaurant.name}</RestaurantName>
            </UpPart>
            <DownPart></DownPart>
        </MiddleRestaurantComponent>
    )
}

export default MiddleRestaurantsComponent
