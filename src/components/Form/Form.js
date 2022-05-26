import React, { useState, useEffect } from "react";
import "./Form.css";
import Map from "../Map";
import Navbar from "../Navbar/Navbar";


function Form({ lat, long }) {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    avatar: "",
    latitude: lat,
    longitude: long,
  });
  const [newFormData, setNewFormData] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((students) => setStudents(students));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newFormData = {
      ...formData,
      latitude: lat,
      longitude: long,
    };
    setNewFormData(newFormData);

    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents([...students, data]);
      });
  }

  return (
    <>
      <Navbar />
      <div className="form">
        <form onSubmit={handleSubmit} className="form-control">
          <h3>
            Connect with millions <br /> of students globaly!
          </h3>
          <div className="firstname">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="John"
            />
          </div>

          <div className="lastname">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Doe"
            />
          </div>

          <div className="mobile">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              onChange={handleChange}
              value={formData.mobile}
              placeholder="07123456789"
            />
          </div>

          <div className="email">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="example@gmail.com"
            />
          </div>

          <div className="avatar">
            <label>Avatar</label>
            <input
              type="link"
              name="image"
              onChange={handleChange}
              value={formData.image}
              placeholder="paste image Url"
            />
          </div>
          <div className="button">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <Map students={students} />
    </>
  );
}

export default Form;
