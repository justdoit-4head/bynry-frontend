import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import locations from "../data/data";

function Myprofile(location) {

  return (
    <div className="myprofile">
      <div className="row">
      <div className="col-md-4 p-4">
        <div className="card carde p-4 d-flex flex-column">
        <div className="rounded-circle overflow-hidden mx-auto" style={{width: "100px", height: "100px"}}>
            <img alt="..." className="card-img-top default_img" src={require("../routes/mike.jpg")} />
            </div>
          <div className="card-body flex-grow-1 d-flex flex-column justify-content-between">
            <h5 className="card-name card-title text-center mt-2">Sebastian fors</h5>
            <h5 className="card-title text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
            make a type specimen book.</h5>
            <h4 className="text-center">Address</h4>
            <h5 className="address text-center">
              <p>Garden City</p>
              <p>Warje</p>
              <p>Pune, 411058</p>
              <p>Maharashtra, India</p>
            </h5>
          </div>
        </div>
      </div>
      <div className="col-md-8 p-4 d-flex flex-column align-items-center justify-content-center">
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
                <Marker longitude={locations[0].lng} latitude={locations[0].lat} onClick={()=> alert(locations[0].name)}/> 
              <NavigationControl />
              <FullscreenControl/>

              <GeolocateControl/>
            </Map>
      </div>
      </div>
    </div>
  );
}

export default Myprofile;
