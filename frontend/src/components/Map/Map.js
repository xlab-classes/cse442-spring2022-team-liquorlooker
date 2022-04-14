import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import "./Map.css";
import Locate from "../Location/Locate";
import useDrinksInRadius from "../../hooks/use-drink-in-radius";

const METERS = 1609.34;

function Map(props) {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

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
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

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


  return (
    <>
      <Locate panTo={panTo} />
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map"
        options={options}
        onLoad={onLoad}
      >
        {
          stores.length > 0 && stores.map?.((store) => {
              return <Marker
                position={{ lat: store.latitude, lng: store.longitude }}
              />;
            })
        }
          <Marker position={ curLocation } cursor={"Your Location"} label={"Your Location"}/>
        

        <Circle
          center={curLocation}
          radius={milesToMeters(props.radius)}
          options={closeOptions}
        />
        {/* {locations.map?.((store) => {
          return <Marker key={store.name} position={store.location} />;
        })} */}
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
