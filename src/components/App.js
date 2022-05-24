import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
// import Map from "./Map";
import Navbar from "./Navbar/Navbar";

function App() {
  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(()=>{
    const getLocation = ()=>{
    
      navigator.geolocation.getCurrentPosition(
       (location) => {
         setUserLocation({
           
             latitude: location.coords.latitude,
             longitude: location.coords.longitude,
           
         });
         // console.log(location.coords.latitude);
       },
       (error) => console.log(error)
     );
    }
    getLocation() 
  },[])
  
  

  return (
    <div>
      <Navbar
        
      />
      <Form
        lat={userLocation.latitude}
        long={userLocation.longitude}
      />
      {/* <Map /> */}
      {/* <Map lat={userLocation.coordinates.latitude} long={userLocation.coordinates.longitude} /> */}
    </div>
  );
}

export default App;
