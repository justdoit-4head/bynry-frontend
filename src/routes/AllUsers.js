import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import locations from "../data/data";



function AllUsers() {

  const [markers, setMarkers] = useState([])

  const turnActive=(location)=>{
    {
      if (!markers.some(marker => marker.name === location.name)) {
        setMarkers([...markers, location]);
      }
    }
  }

  const deActive=(location)=>{
    
      const updatedMarkers = markers.filter(marker => marker.name !== location.name);
      setMarkers(updatedMarkers);
    
  }

  return (
    <div className="allusers">
      <div className="row ht8">
      <div className="col-md-4 p-4 d-flex flex-column align-items-center justify-content-center">
        <div>
        <h5 className="text-center heading-name">All listed users</h5>
        </div>
        <div className="justify-content-center">
          <ul>
            {locations.map((location, index)=>(
              <div key={index} className="d-flex flex-column pt-3">
              <div className="name">{location.name}</div>
              <div className="btn btn-sm btn-secondary" onClick={()=> turnActive(location)}>view on map</div>
              {markers.some(marker => marker.name === location.name) && <div className="button btn btn-sm btn-primary m-2" onClick={() => deActive(location)}>x</div>}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-md-8 p-4 d-flex flex-row justify-content-center align-items-center">
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic29hcHNvYXB1d3UiLCJhIjoiY2x2Z2NvejA3MHZ6eDJsbDkxYmNkb3hleCJ9.zHMEaJqiJa24WH_kk5T1pw"
        style={{
          width: "30rem",
          height: "30rem",
          borderRadius: "20px"
        }}
        initialViewState={{
          longitude: locations[0].lng,
          latitude: locations[0].lat,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        minZoom={3}
      >
    
        {markers.map((location, index) => (
          <Marker key={index} longitude={location.lng} latitude={location.lat} onClick={()=> alert(location.name)}/>
        ))}

        <NavigationControl />
        <FullscreenControl/>

        <GeolocateControl/>
      </Map>

      </div>
      </div>
      
    </div>
  );
}

export default AllUsers;
