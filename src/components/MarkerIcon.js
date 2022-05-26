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
            <p><a href={`tel:${student.mobile}`}>{student.mobile}</a></p>
            <p><a href={`mailto:${student.email}`}>{student.email}</a></p>
         </Popup>
        </Marker>
      ))}
      
    </>
  );
}

export default MarkerIcon;
