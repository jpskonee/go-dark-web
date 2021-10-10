import React, { useState } from "react";
import mapStyles from "./mapStyles";
//env varialle
const mapKey = process.env.NEXT_PUBLIC_G_MAP_KEY;

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mapDiv: {
    height: "94vh",
    width: "97vw",

    [theme.breakpoints.only("lg")]: {
      height: "80vh",
      width: "86vw",
    },
  },
}));

function Map() {
  const [detail, setDetail] = useState(false);

  const handleDetail = (e) => {
    setDetail(!detail);
  };

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 45.51223, lng: -122.658722 }}
      options={{ styles: mapStyles }}
    >
      {" "}
      <Marker
        onMouseOver={handleDetail}
        onClick={handleDetail}
        position={{ lat: 45.51223, lng: -122.658722 }}
        icon={{
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Skull-Icon.svg/2048px-Skull-Icon.svg.png",
          scaledSize: new window.google.maps.Size(60, 60),
        }}
      />
      {detail && (
        <InfoWindow
          position={{ lat: 45.51223, lng: -122.658722 }}
          onCloseClick={handleDetail}
        >
          <div
            style={{
              color: "red",
              lineHeight: "1.5rem",
              padding: "0.5rem",
              textAlign: "center",
            }}
          >
            <h3> Portland </h3>
            <p>Oregun</p>
          </div>
        </InfoWindow>
      )}
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
