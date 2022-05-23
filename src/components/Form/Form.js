import React, { useState } from "react";
import "./Form.css";

function Form({ lat, long }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    image: "",
    latitude: { lat },
    longitude: { long },
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  console.log(formData);

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-control">
        <div className="firstname">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div className="lastname">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div className="mobile">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>

        <div className="email">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="avatar">
          <label>Avatar</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
