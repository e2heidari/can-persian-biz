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
