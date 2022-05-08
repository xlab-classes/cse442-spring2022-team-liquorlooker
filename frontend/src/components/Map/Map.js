import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.css";
import Locate from "../Location/Locate";
import useDrinksInRadius from "../../hooks/use-drink-in-radius";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

const METERS = 1609.34;

function Map(props) {
  const google = window.google;
  const [longitude, setLongitude] = useState(-78.78698849659867);
  const [latitude, setLatitude] = useState(43.000637466942166);
  const [selected, setSelected] = useState(null);

  const [directions, setDirections] = useState(null);

  const stores = useDrinksInRadius(
    props.radius,
    longitude,
    latitude,
    props.drinkName,
    props.onStoreChange
  );

  // console.log(`lng=${longitude}, lat=${latitude}`);
  // console.log(stores);

  // center gives lat and long to center the map at
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  // creates a map reference to use
  const mapRef = useRef();

  // options for useMemo to disable random clickable icons
  // and disable default UI
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const infowindowOptions = {
    pixelOffset: new google.maps.Size(0, -45)
  }

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const gpsOptions = {
    enableHighAccuracy: true,
  };

  // optimize rendering of maps
  const onLoad = useCallback((map) => {
    mapRef.current = map;

    // get gps info
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null,
      gpsOptions
    );
  });

  var curLocation = { lat: latitude, lng: longitude };

  function getdirections(store) {
    const directionService = new google.maps.DirectionsService();
    directionService.route(
      {
        origin: new google.maps.LatLng({
          lat: latitude,
          lng: longitude,
        }),
        destination: new google.maps.LatLng({
          lat: store.latitude,
          lng: store.longitude,
        }),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result);
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  return (
    <>
      <Locate panTo={panTo} />
      <Button>

      </Button>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map"
        options={mapOptions}
        onLoad={onLoad}
        onClick={() => {
          setDirections(null);
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
        
        {stores.length > 0 &&
          stores.map?.((store) => {
            return (
              <Marker
                key={store.storeName}
                position={{ lat: store.latitude, lng: store.longitude }}
                onClick={() => getdirections(store)}
                onMouseOver={() => {
                  setSelected(store);
                }}
                onMouseOut={setTimeout(() => {
                  setSelected(null);
<<<<<<< HEAD
                }, 10000)}
=======
                }, 5000)}
>>>>>>> sprint4-issue#87
              />
            );
          })}

        {selected && (
          <InfoWindow
            position={{
<<<<<<< HEAD
              lat: selected.latitude,
              lng: selected.longitude,
            }}
            options={infowindowOptions}
=======
              lat: selected.latitude + 0.0015,
              lng: selected.longitude,
            }}
>>>>>>> sprint4-issue#87
          >
            <div>
              <h3>{selected.storeName}</h3>
              <p>
                {selected.drinkName} {"\n"}${selected.drinkPrice.toFixed(2)}
              </p>
            </div>
          </InfoWindow>
        )}
        <Marker
          position={curLocation}
          cursor={"Your Location"}
          label={"Your Location"}
        />

        <Circle
          center={curLocation}
          radius={milesToMeters(props.radius)}
          options={closeOptions}
        />
      </GoogleMap>
    </>
  );
}

const defaultOptions = {
  strokeOpacity: 0.9,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

function milesToMeters(miles) {
  return miles * METERS;
}

export default Map;
