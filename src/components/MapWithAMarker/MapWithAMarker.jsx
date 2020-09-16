import React from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 29.5, lng: -95 }}>
        {props.markers.map(marker => 
            {
                const onClick = props.onClick.bind(this, marker)
                return (
                    <Marker
                        key={marker.id}
                        onClick={onClick}
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                    >
                            {props.selectedMarker === marker &&
                            <InfoWindow>
                                <div>
                                {marker.shelter}
                                </div>
                            </InfoWindow>
                            }
            
                    </Marker>
            )
        })}
    </GoogleMap>
  )
})
export default MapWithAMarker