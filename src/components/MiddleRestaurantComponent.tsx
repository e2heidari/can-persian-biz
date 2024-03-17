import React from 'react'

// Define the interface for the restaurant object
export interface Restaurant {
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
    rating?: number // Define rating property
    user_ratings_total?: number // Define user_ratings_total property
    price_level?: number // Define price_level property
    website?: string // Define website property
}

// Define the props interface for the MiddleRestaurantComponent
interface Props {
    restaurant: Restaurant // Specify the type as Restaurant
}

// MiddleRestaurantComponent
const MiddleRestaurantComponent: React.FC<Props> = ({ restaurant }) => {
    return (
        <div>
            <p>{restaurant.name}</p>
            {/* Render other restaurant details here */}
        </div>
    )
}

export default MiddleRestaurantComponent
