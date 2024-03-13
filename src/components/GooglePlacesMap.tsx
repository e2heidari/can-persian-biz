'use client'
import React, { useState, useEffect, useMemo } from 'react'
import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'

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
    rating?: number // Define rating property
    user_ratings_total?: number // Define user_ratings_total property
    price_level?: number // Define price_level property
    website?: string // Define website property
}

interface Props {
    lat: number
    lng: number
    restaurants: Restaurant[]
}

const GooglePlacesMap: React.FC<Props> = ({ lat, lng, restaurants }) => {
    const libraries = useMemo(() => ['places'], [])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    })

    const [zoom, setZoom] = useState(14) // State to track the zoom level
    const [map, setMap] = useState<google.maps.Map | null>(null)
    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
        null
    )
    const [selectedRestaurant, setSelectedRestaurant] =
        useState<Restaurant | null>(null)

    useEffect(() => {
        console.log(zoom)
        // Update the zoom level based on your requirements
        // For example, you can set the zoom level to 14 when lat and lng change
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
    }

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <GoogleMap
            zoom={zoom} // Use the zoom state instead of a fixed value
            center={{ lat, lng }} // Default to Vancouver
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '700px', height: '600px' }}
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
                        url: '/Untitled Design_1-14.png', // Use the custom icon URL
                        scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
                    }}
                    onClick={() => handleMarkerClick(restaurant)}
                    onLoad={() => console.log('Restaurant Marker Loaded')}
                >
                    {selectedRestaurant === restaurant && (
                        <InfoWindow
                            position={{
                                lat: restaurant.geometry.location.lat,
                                lng: restaurant.geometry.location.lng,
                            }}
                            onCloseClick={() => setSelectedRestaurant(null)}
                        >
                            <div>
                                <h2>{selectedRestaurant.name}</h2>
                                <p>
                                    Open Now:{' '}
                                    {selectedRestaurant.opening_hours?.open_now
                                        ? 'Yes'
                                        : 'No'}
                                </p>
                                <div>
                                    <div>
                                        {selectedRestaurant.rating?.toFixed(1)}{' '}
                                        {Array.from(
                                            {
                                                length: Math.floor(
                                                    selectedRestaurant.rating ||
                                                        0
                                                ),
                                            },
                                            (_, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        color: '#FFD700',
                                                        fontSize: '1.2em',
                                                    }}
                                                >
                                                    &#9733;
                                                </span>
                                            )
                                        )}
                                        {selectedRestaurant.rating &&
                                            selectedRestaurant.rating % 1 !==
                                                0 && (
                                                <span
                                                    style={{
                                                        color: '#FFD700',
                                                        fontSize: '1.2em',
                                                    }}
                                                >
                                                    &#9734;
                                                </span>
                                            )}
                                        {Array.from(
                                            {
                                                length: Math.floor(
                                                    5 -
                                                        Math.ceil(
                                                            selectedRestaurant.rating ||
                                                                0
                                                        )
                                                ),
                                            },
                                            (_, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        color: 'grey',
                                                        fontSize: '1.2em',
                                                        padding: '0.05em 0.1em',
                                                    }}
                                                >
                                                    &#9734;
                                                </span>
                                            )
                                        )}
                                        ({selectedRestaurant.user_ratings_total}
                                        )
                                    </div>
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
