'use client'
import React, { useState, useEffect, useMemo } from 'react'
import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import StarRating from './StarRating'

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
    lat: number
    lng: number
    restaurants: Restaurant[]
    onRestaurantSelect: (selectedRestaurant: {
        restaurant: Restaurant | null
    }) => void // Modify the function signature
}

const GooglePlacesMap: React.FC<Props> = ({
    lat,
    lng,
    restaurants,
    onRestaurantSelect,
}) => {
    const libraries = useMemo(() => ['places'], [])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    })

    const [zoom, setZoom] = useState(14)
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
        null
    )
    const [selectedRestaurant, setSelectedRestaurant] =
        useState<Restaurant | null>(null)

    useEffect(() => {
        setZoom(14)
    }, [lat, lng])

    useEffect(() => {
        if (isLoaded) {
            console.log('Map Loaded')
        }
    }, [isLoaded])

    const onMapLoad = (map: google.maps.Map) => {
        setMap(map)
        const infoWindow = new google.maps.InfoWindow()
        setInfoWindow(infoWindow)

        const locationButton = document.createElement('button')
        locationButton.innerHTML =
            '<img src="/current-location-icon.png" alt="Icon" style="width: 30px; height: 30px; margin: 15px;" />'
        locationButton.classList.add('custom-map-control-button')

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
            locationButton
        )

        locationButton.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }

                        infoWindow.setPosition(pos)
                        infoWindow.setContent(
                            `<img src="/icons8-monarch-96 (2).png" alt="Your Location Icon" style="width: 40px; height: 40px;" />`
                        )
                        infoWindow.open(map)
                        map.setCenter(pos)
                    },
                    () => {
                        handleLocationError(true)
                    }
                )
            } else {
                handleLocationError(false)
            }
        })
    }

    const handleLocationError = (browserHasGeolocation: boolean) => {
        if (infoWindow && map) {
            const center = map.getCenter()
            infoWindow.setPosition(center!)
            infoWindow.setContent(
                browserHasGeolocation
                    ? 'Error: The Geolocation service failed.'
                    : "Error: Your browser doesn't support geolocation."
            )
            infoWindow.open(map)
        }
    }

    const handleMarkerClick = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant)
        // Call the parent component function with the selected restaurant and its name
        onRestaurantSelect({ restaurant })
    }

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    const mapContainerStyle = {
        width: '48vw',
        height: '90vh',
    }

    if (window.innerWidth <= 768) {
        mapContainerStyle.width = '100vw'
        mapContainerStyle.height = '80vh'
    }

    return (
        <GoogleMap
            zoom={zoom}
            center={{ lat, lng }}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={mapContainerStyle}
            onClick={() => setSelectedRestaurant(null)}
            onLoad={onMapLoad}
        >
            {restaurants.map((restaurant) => (
                <Marker
                    key={restaurant.place_id}
                    position={{
                        lat: restaurant.geometry.location.lat,
                        lng: restaurant.geometry.location.lng,
                    }}
                    title={restaurant.name}
                    icon={{
                        url: restaurant
                            ? restaurant.opening_hours?.open_now
                                ? '/Untitled Design_1-20.png'
                                : '/Untitled Design_1-21.png'
                            : '/Untitled Design_1-14.png',
                        scaledSize: new window.google.maps.Size(50, 50),
                    }}
                    onClick={() => handleMarkerClick(restaurant)}
                >
                    {selectedRestaurant === restaurant && (
                        <InfoWindow
                            position={{
                                lat: restaurant.geometry.location.lat,
                                lng: restaurant.geometry.location.lng,
                            }}
                            onCloseClick={() => setSelectedRestaurant(null)}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'right',
                                    gap: '2px',
                                }}
                            >
                                <h2>{selectedRestaurant.name}</h2>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: '2px',
                                    }}
                                >
                                    <div>({selectedRestaurant.rating})</div>
                                    <StarRating
                                        rating={selectedRestaurant.rating || 0}
                                    />
                                    <span>
                                        ({selectedRestaurant.user_ratings_total}
                                        )
                                    </span>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </Marker>
            ))}
        </GoogleMap>
    )
}

export default GooglePlacesMap
