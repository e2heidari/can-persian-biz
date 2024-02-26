import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

interface Restaurant {
  opening_hours?: string;
  place_id?: string;
  name?: string;
  formatted_address?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

const GooglePlacesMap: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const placeIds = ["ChIJhd_AaSpzhlQRR0HKIE5tj_w", "ChIJMYMDpChyhlQRu37tlv6qDUI"];

        const placesService = new google.maps.places.PlacesService(
          document.createElement("div")
        );

        const detailedRestaurants: Restaurant[] = [];

        const fetchDetailsForPlace = (placeId: string) => {
          return new Promise<Restaurant>((resolve, reject) => {
            const request = {
              placeId,
              fields: ["name", "formatted_address", "geometry", "opening_hours", "rating", "user_ratings_total", "price_level", "website"], // Add additional fields here
            };

            placesService.getDetails(request, (place, status) => {
              if (
                status === google.maps.places.PlacesServiceStatus.OK &&
                place &&
                place.geometry &&
                place.geometry.location
              ) {
                const restaurant: Restaurant = {
                  place_id: place.place_id,
                  name: place.name,
                  formatted_address: place.formatted_address,
                  geometry: {
                    location: {
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    },
                  },
                  // Add additional fields here
                  opening_hours: place.opening_hours,
                  rating: place.rating,
                  user_ratings_total:place.user_ratings_total,
                  price_level:place.price_level,
                  website:place.website
                };
                console.log("Restaurant details:", restaurant); // Log details here
                resolve(restaurant);
              } else {
                console.error("Error fetching details for place:", status);
                reject(status);
              }
            });
          });
        };

        for (const placeId of placeIds) {
          try {
            const restaurant = await fetchDetailsForPlace(placeId);
            detailedRestaurants.push(restaurant);
          } catch (error) {
            console.error(`Error fetching details for place ${placeId}:`, error);
          }
        }

        setRestaurants(detailedRestaurants);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    if (isLoaded) {
      fetchRestaurantDetails();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        zoom={14}
        center={{ lat, lng }} // Default to Vancouver
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "600px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.place_id}
            position={{
              lat: restaurant.geometry.location.lat,
              lng: restaurant.geometry.location.lng,
            }}
            onLoad={() => console.log("Restaurant Marker Loaded")}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default GooglePlacesMap;
