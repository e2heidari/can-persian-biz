import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

interface Restaurant {
  opening_hours?: google.maps.places.PlaceOpeningHours;
  place_id?: string;
  name?: string;
  formatted_address?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating?: number; // Define rating property
  user_ratings_total?: number; // Define user_ratings_total property
  price_level?: number; // Define price_level property
  website?: string; // Define website property
}

const GooglePlacesMap: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

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
                  user_ratings_total: place.user_ratings_total,
                  price_level: place.price_level,
                  website: place.website,
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

  useEffect(() => {
    if (isLoaded) {
      console.log("Map Loaded");
    }
  }, [isLoaded]);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
    const infowindow = new google.maps.InfoWindow();
    setInfoWindow(infowindow);

    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infowindow.setPosition(pos);
            infowindow.setContent("Your Location");
            infowindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true);
          }
        );
      } else {
        handleLocationError(false);
      }
    });
  };

  const handleLocationError = (browserHasGeolocation: boolean) => {
    if (infoWindow && map) {
      const center = map.getCenter();
      infoWindow.setPosition(center!);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }
  };

  const handleMarkerClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

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
  onLoad={onMapLoad}
>
  {restaurants.map((restaurant) => (
    <Marker
      key={restaurant.place_id}
      position={{
        lat: restaurant.geometry.location.lat,
        lng: restaurant.geometry.location.lng,
      }}
      icon={{
        url: "/Untitled Design_1-12.png", // Use the custom icon URL
        scaledSize: new window.google.maps.Size(50, 50), // Adjust size as needed
      }}
      onClick={() => handleMarkerClick(restaurant)}
      onLoad={() => console.log("Restaurant Marker Loaded")}
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
          </div>
        </InfoWindow>
      )}
    </Marker>
  ))}
</GoogleMap>

    </div>
  );
};

export default GooglePlacesMap;