import "./bookinglist.css";
import Eventcard from "../../EventCard/EventCard.jsx";
import { useQuery } from "react-query";

const fetchEvents = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3002/event", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const result = await response.json();
    return result.data;
  }
};

export default function Bookinglistpage() {
  const { data: datas, error, isLoading } = useQuery("events", fetchEvents);

  return (
    <div>
      <div id="booking_list ">
        <h2>Booking List</h2>
        <hr />
        <div className="flex-row header_names">Event Name</div>
        <div id="booking-column">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {datas &&
            datas.map((item, index) => <Eventcard key={index} data={item} />)}
        </div>
      </div>
    </div>
  );
}
