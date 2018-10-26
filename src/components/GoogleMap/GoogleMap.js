import React, {Component } from 'react'
import { Map, GoogleApiWrapper,InfoWindow,Marker} from 'google-maps-react'
import googleApi from'./../../../googleApi'

class GoogleMap extends Component{

    state ={
      showWindow : false,
      activeMarker:{},
      selectedPlace:{}
    }

    handleMarkerClick = (props, marker, e) =>
    this.setState({
      ...this.state,
      activeMarker: marker,
      showWindow: true,
      selectedPlace: props
    });

    handleCloseWindow = props => {
    if (this.state.showWindow) {
      this.setState({
        ...this.state,
        showWindow: false,
        activeMarker: null
      });
    }
  };
  render(){
    const mapStyles = {
      width:'100%',
      height: '23.16rem',
      position:'relative',
    }
    return(
        <div>
          <Map google={this.props.google}
               zoom={14}
               style = { mapStyles }
               initialCenter={{
                  lat: 50.061959,
                  lng: 19.937057
              }}>
              <Marker onClick = { this.handleMarkerClick }
                      name = {'Mastia Business Company'}
                      position={{lat: 50.060424, lng: 19.931452}}/>
              <InfoWindow
                      marker = {this.state.activeMarker}
                      visible = { this.state.showWindow }
                      onClose = {this.handleCloseWindow }>
                  <div>
                      <h5>{this.state.selectedPlace.name}</h5>
                  </div>
                </InfoWindow>
          </Map>
        </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey:googleApi
})(GoogleMap)
