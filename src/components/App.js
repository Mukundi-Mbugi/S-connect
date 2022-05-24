import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import Home from "./Home";
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
         if (location.coords.latitude.length!=="")
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
  
  console.log(userLocation);

  return (
    <div>
      <Navbar />
      <Home />
      <Form
        lat={userLocation.latitude}
        long={userLocation.longitude}
      />
    </div>
  );
}

export default App;
