import React from "react";
import { Popup } from "react-leaflet";

function StudentPopup({ students }) {
  
  return (
    <div>
      {students.map((student) => (
        <Popup key={student.id} className="popup">
          <img src={student.avatar} alt="display" />
          <h4>
            {student.firstName} {student.lastName}
          </h4>
            <p>{student.mobile}</p>
            <p>{student.email}</p>
         </Popup>
      ))}
    </div>
  );
}

export default StudentPopup;
