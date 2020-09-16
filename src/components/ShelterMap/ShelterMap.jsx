import React, { Component } from "react"
import MapWithAMarker from "../MapWithAMarker/MapWithAMarker"

export default class ShelterMap extends Component {
    constructor(props) {
      super(props)
      this.state = {
        shelters: [],
        selectedMarker: false
      }
    }
    componentDidMount() {
      fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
        .then(r => r.json())
        .then(data => {
          this.setState({ shelters: data.shelters })
        })
    }
    handleClick = (marker, event) => {
      console.log({ marker })
      this.setState({ selectedMarker: marker })
    }
    render() {
      return (
        <MapWithAMarker
          selectedMarker={this.state.selectedMarker}
          markers={this.state.shelters}
          onClick={this.handleClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )
    }
  }