import React, { useState, useEffect } from "react";
import Form from "./Form/Form";
import Home from "./Home";
import Login from "./Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [userLocation, setUserLocation] = useState({
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          if (location.coords.latitude.length !== "")
            setUserLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            });
          // console.log(location.coords.latitude);
        },
        (error) => console.log(error)
      );
    };
    getLocation();
  }, []);

  console.log(userLocation);

  return (
    <div>
      <BrowserRouter>
      
      
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Form" element={<Form lat={userLocation.latitude} long={userLocation.longitude} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
