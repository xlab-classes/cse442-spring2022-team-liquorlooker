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

const METERS = 1609.34;

function Map() {
  const [marker, setMarkers] = useState();

  // center gives lat and long to center the map at
  const center = useMemo(() => ({ lat: 42.886448, lng: -78.878372 }), []);

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

  // optimize rendering of maps
  const onLoad = useCallback((map) => {
    mapRef.current = map;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null,
      gpsOptions
    );
  });

  const gpsOptions = {
    enableHighAccuracy: true,
  };

  const getCurLoc = () => {
    var loc = {
      lat: 0,
      lng: 0,
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        loc.lat = lat;
        loc.lng = lng;
      },
      () => null,
      gpsOptions
    );

    return loc;
  };

  var curLocation = getCurLoc();

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 42.8,
        lng: -78.8,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
  ];

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
        <Marker position={{ lat: curLocation.lat, lng: curLocation.lng }} />
        <Circle
          center={{ lat: curLocation.lat, lng: curLocation.lng }}
          radius={milesToMeters(5)}
        />
        {/* {locations.map?.((store) => {
          return <Marker key={store.name} position={store.location} />;
        })} */}
      </GoogleMap>
    </>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
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
