import React, {useState, useEffect} from "react";
import Form from "./Form/Form";
import Map from "./Map";
import Navbar from "./Navbar/Navbar";


function App() {
  const [userLocation, setUserLocation] = useState({
    loaded :false,
    coordinates:{latitude:"",longitude:""}
  })

  const onSuccess = location=>{
    setUserLocation({
      loaded:true,
      coordinates:{
        latitude :location.coords.latitude,
        longitude:location.coords.longitude
      }
    })
    console.log(location);
  }
  const onError =()=>alert("Could not get your location")  
  useEffect(()=>{
    if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(onSuccess,  onError)
  },[])
  
  

  
  return (
    <div>
      <Navbar lat={userLocation.coordinates.latitude} long={userLocation.coordinates.longitude}/>
      <Form lat={userLocation.coordinates.latitude} long={userLocation.coordinates.longitude}/>
      <Map lat={userLocation.coordinates.latitude} long={userLocation.coordinates.longitude} />
    </div>
  );
}

export default App;
