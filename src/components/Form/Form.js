import React, { useState } from "react";
import "./Form.css";
import Map from "../Map";

function Form({ lat, long }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    image: "",
    latitude: lat ,
    longitude: long ,
    
  });
  const [newFormData, setNewFormData]=useState([])
  

  function handleChange(event) {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]:value

    })
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newFormData={
      ...formData,
      latitude:lat,
      longitude:long
    }
    setNewFormData(newFormData)
    console.log(newFormData);
  }
 
  

  return (
    <>
    <div className="form">
      <form onSubmit={handleSubmit} className="form-control">
        <div className="firstname">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="John" />
        </div>

        <div className="lastname">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Doe" />
        </div>

        <div className="mobile">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
            placeholder="07123456789" />
        </div>

        <div className="email">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="example@gmail.com" />
        </div>

        <div className="avatar">
          <label>Avatar</label>
          <input
            type="link"
            name="image"
            onChange={handleChange}
            value={formData.image}
          placeholder="paste image Url" />
        </div>
        <button>Submit</button>
      </form>
    </div>
    <Map lat={lat} long={long} studentData={formData}/>
    </>
  );
}

export default Form;
