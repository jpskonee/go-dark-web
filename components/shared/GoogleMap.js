import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapDiv: {
    height: "94vh",
    width: "97vw",

    [theme.breakpoints.only("lg")]: {
      height: "76vh",
      width: "86vw",
    },
  },
}));

const mapKey = "AIzaSyBcxIDwLZ-FTidTXfhbVVRlhWvGGBxtYW0";

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 45.51223, lng: -122.658722 }}
    >
      {" "}
      <Marker
        position={{ lat: 45.51223, lng: -122.658722 }}
        title="Go Dark Web"
      />{" "}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMaps() {
  const classes = useStyles();

  return (
    <div className={classes.mapDiv}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
