import React, { useState } from 'react'
import { FaAnchor } from 'react-icons/fa';

const { compose, withProps, withState, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithControlledZoom = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ7jwUhUrP-L4gyjZbz2avey6IqkZAP3Q&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
          console.log(refs.map)
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>{
    const [markers, setMarkers] = useState([])
    return(
        <GoogleMap
            defaultCenter={{ lat: 37.787, lng: 36.844 }}
            zoom={props.zoom}
            ref={props.onMapMounted}
            onZoomChanged={props.onZoomChanged}
            onClick={(event) => {
                setMarkers(current => [...current, {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                    time: new Date()
                }])
    }}
  >
  {
    markers.map(marker => 
    <Marker
        key={marker.time.toISOString()}
        position={{
                lat: marker.lat,
                lng: marker.lng,
            }}
        icon={{
            url: '/car.svg',
            scaledSize: new window.google.maps.Size(30, 30),
        }}
        onClick={props.onToggleOpen}
    />
    )
  }
    
      
  </GoogleMap>
    )
}
  
);
export default MapWithControlledZoom