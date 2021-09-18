import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const mapKey = "AIzaSyBcxIDwLZ-FTidTXfhbVVRlhWvGGBxtYW0";

function Map() {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 45.51223, lng: -122.658722 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMaps() {
  return (
    <div style={{ height: "78vh", width: "85vw" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
