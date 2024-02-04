import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

interface Restaurant {
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

const GooglePlacesMap: React.FC = () => {
  const [lat, setLat] = useState(49.2827); // Vancouver latitude
  const [lng, setLng] = useState(-123.1207); // Vancouver longitude

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    // Fetch restaurants in Vancouver using Google Places API
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`
        );
        setRestaurants(response.data.results);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };
    console.log(restaurants)
    if (isLoaded) {
      fetchRestaurants();
    }
  }, [isLoaded, lat, lng]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '800px', height: '600px' }}
        onLoad={(map) => console.log('Map Loaded')}
      >
        {/* Display markers for each restaurant */}
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            position={{
              lat: restaurant.geometry.location.lat,
              lng: restaurant.geometry.location.lng,
            }}
            onLoad={() => console.log('Restaurant Marker Loaded')}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default GooglePlacesMap;
