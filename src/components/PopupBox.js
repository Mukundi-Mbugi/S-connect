import React from 'react'
import { Popup} from "react-leaflet";

function PopupBox() {
  return (
    <Popup>
        <img src="https://cdn.internationalstudent.com/images/international-student/asian-college-student-400x400.jpg" alt="student"></img>
          <h2>Faith Ndinda</h2>
          <p>Tel: +254 716456789</p>
          <p>Email: ndindafaith@gmail.com</p>
    </Popup>
  )
}

export default PopupBox