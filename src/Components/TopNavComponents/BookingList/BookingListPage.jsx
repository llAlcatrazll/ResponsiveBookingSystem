import "./bookinglist.css";
import Eventcard from "../../EventCard/EventCard.jsx";

import { useEffect, useState } from "react";

export default function Bookinglistpage() {
  const [datas, setData] = useState(null);

  useEffect(() => {
    async function LoginToken() {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3002/event", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      setData(result.data);
    }
    LoginToken();
  }, []);

  return (
    <div>
      <div id="booking_list ">
        <h2>Booking List</h2>
        <hr />
        <div className="flex-row header_names">Event Name</div>
        <div id="booking-column">
          {datas &&
            datas.map((data, index) => <Eventcard key={index} data={data} />)}
        </div>
      </div>
    </div>
  );
}
