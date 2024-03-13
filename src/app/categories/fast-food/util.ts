import axios from 'axios'
import { Restaurant } from './type'

const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
const fields = [
    'name',
    'formatted_address',
    'geometry',
    'opening_hours',
    'rating',
    'user_ratings_total',
    'price_level',
    'website',
].join(',')

async function fetchPlaceDetails(placeId: string) {
    try {
        // Make a GET request to the Google Places API with your API key and place ID
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${GOOGLE_KEY}`
        )

        // Return the data received from the API
        return response.data.result
    } catch (error) {
        // Handle errors
        console.error('Error fetching place details:', error)
        throw error // Optionally re-throw the error to handle it elsewhere
    }
}

export const fetchDetailsForPlace = (placeId: string) => {
    return new Promise<Restaurant>((resolve) => {
        return fetchPlaceDetails(placeId).then((place) => {
            console.log('🚀 ~ returnfetchPlaceDetails ~ place:', place)
            const restaurant: Restaurant = {
                place_id: place.place_id,
                name: place.name,
                formatted_address: place.formatted_address,
                geometry: {
                    location: {
                        lat: place.geometry.location.lat,
                        lng: place.geometry.location.lng,
                    },
                },
                // Add additional fields here
                opening_hours: place.opening_hours,
                rating: place.rating,
                user_ratings_total: place.user_ratings_total,
                price_level: place.price_level,
                website: place.website,
            }
            resolve(restaurant)
        })
    })
}
