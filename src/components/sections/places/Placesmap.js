import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Placesmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return (
      <div className="places-maps bg-white">
      <GoogleMapReact  bootstrapURLKeys={{ key: 'AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
        </div>
    );
  }
}

export default Placesmap;
