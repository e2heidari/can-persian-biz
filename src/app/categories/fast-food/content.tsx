'use client'
import React, { useState } from 'react'
import {
    BackgroundImage,
    ContentSection,
    LeftBox,
    MapBox,
    MiddleBox,
    NearMeButton,
    RightBox,
    RightMiddleBox,
    TextBox,
    Dropdown,
} from './styles'
import Location from '../locations.json'
import GooglePlacesMap from '../../../components/GooglePlacesMap'
import { Restaurant } from './type'
import MiddleRestaurantComponent from '../../../components/MiddleRestaurantComponent'

const Content = (props: { restaurants: Restaurant[] }) => {
    const [selectedCity, setSelectedCity] = useState<string>('')
    const [selectedCityCoords, setSelectedCityCoords] = useState({
        lat: 49.2827,
        lng: -123.1207,
    }) // Default to Vancouver coordinates

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cityName = e.target.value
        setSelectedCity(cityName) // Update the selected city name
        const city = Location.find((city) => city.name === cityName)
        if (city) {
            setSelectedCityCoords({ lat: city.lat, lng: city.lng })
        } else {
            setSelectedCityCoords({ lat: 49.2827, lng: -123.1207 }) // Default to Vancouver coordinates if city not found
        }
    }
    console.log(props.restaurants)
    const handleNearMeClick = () => {
        // Handle Near Me button click event
    }
    return (
        <ContentSection>
            <BackgroundImage
                src="/fastfoodbackground.jpg"
                alt="fastfood Background"
                layout="fill"
                mobileHide // Add this prop to hide background on mobile
            />
            <LeftBox>
                <MapBox>
                    <GooglePlacesMap
                        lat={selectedCityCoords.lat}
                        lng={selectedCityCoords.lng}
                        restaurants={props.restaurants}
                    />
                </MapBox>
            </LeftBox>
            <MiddleBox>
                {props.restaurants.map((restaurant, index) => (
                    <MiddleRestaurantComponent
                        restaurant={restaurant}
                        key={index}
                    />
                ))}
            </MiddleBox>
            <RightBox>
                <RightMiddleBox>
                    <TextBox>Choose your city</TextBox>
                    <Dropdown onChange={handleCityChange} value={selectedCity}>
                        <option value="">Select your city</option>
                        {Location.map((city, index) => (
                            <option key={index} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </Dropdown>
                    <NearMeButton onClick={handleNearMeClick}>
                        Near Me
                    </NearMeButton>
                </RightMiddleBox>
            </RightBox>
        </ContentSection>
    )
}

export default Content
