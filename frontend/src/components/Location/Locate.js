import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Locate({ panTo }) {
  const gpsOptions = {
    enableHighAccuracy: true,
  }
  return (
    <IconButton
      className="locate"
      onClick={() => {
        if(navigator.geolocation){
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
      }else{
        alert("Sorry, browser does not support geolocation!");
      }
    }}
    >
      <LocationOnIcon style={{ color: 'azure'}}/>
    </IconButton>
  );
}

export default Locate;
