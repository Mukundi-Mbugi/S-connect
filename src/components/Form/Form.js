import React, {useState} from 'react'
import "./Form.css"


function Form({lat,long}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    image: "",
    latitude:{lat},
    longitude:{long}
  });
 

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData, [name]:value,})
  }
  function handleSubmit(event) {
    event.preventDefault();
    
    
    
  }
  console.log(formData);


  return (
    <form onSubmit={handleSubmit} className="form">
        <input type="text" name="firstName" onChange={handleChange} 
        value={formData.firstName} />
        <input type="text" name="lastName" onChange={handleChange} 
        value={formData.lastName} />
        <input type="text" name="mobile" onChange={handleChange} 
        value={formData.mobile} />
        <input type="text" name="email" onChange={handleChange} 
        value={formData.email} />
        <input type="text" name="image" onChange={handleChange} 
        value={formData.image} />
        <button type="submit">Submit</button>
      

    </form>
  )
}

export default Form