import React from "react";
import { Marker, Popup} from "react-leaflet";



function MarkerIcon({ students }) {
    
    function handleDelete(){
        console.log("deleted");
    }
   
  return (
    <>
      {students.map((student) => (
        <Marker
          key={student.id}
          position={[student.latitude, student.longitude]}
        >
        <Popup key={student.id} className="popup">
          <img src={student.avatar} alt="display" />
          <h4>
            {student.firstName} {student.lastName}
          </h4>
            <p>{student.mobile}</p>
            <p>{student.email}</p>
            <button onClick={handleDelete}>Delete</button>
         </Popup>
        </Marker>
      ))}
      
    </>
  );
}

export default MarkerIcon;
