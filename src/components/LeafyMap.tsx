import React, { FC } from 'react'
// ES6
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl, ScaleControl,  } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibnVsbHMiLCJhIjoiY2t1YnB3eGN4MHN6dzJucXB6YWZ3YjQ4aCJ9.5ERvLbxH2ZINbTB7tyf0JA'
});

const LeafyMap: FC = () => {

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
      center={[-79.3849,43.6529]}
      zoom={[12]}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-79.3849,43.6529]} />
      </Layer>
      <Popup
        coordinates={[-79.3849,43.6529]}
        offset={{
          'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
        }}
        style={{fontWeight: 'bold'}}
        >
        {'Popup'}
      </Popup>
      <ZoomControl position={'bottom-right'} tabIndex={0} />
    </Map>
  )  
}

export default LeafyMap
