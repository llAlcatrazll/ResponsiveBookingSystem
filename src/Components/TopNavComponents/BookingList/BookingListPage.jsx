import "./bookinglist.css";
import Eventcard from "../../EventCard/EventCard.jsx";
import { useQuery } from "react-query";
import { useState } from "react";

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
  const [sortField, setSortField] = useState("");
  if (isLoading || error || !datas) {
    return <div>Loading...</div>;
  }
  let sortedDatas = [...datas];
  if (sortField === "date") {
    sortedDatas = sortedDatas.sort(
      (a, b) => new Date(a.DateofEvent) - new Date(b.DateofEvent)
    );
  } else if (sortField === "time") {
    sortedDatas = sortedDatas.sort((a, b) => {
      const timeA = new Date(`1970-01-01T${a.StartingTimeofEvent}`);
      const timeB = new Date(`1970-01-01T${b.StartingTimeofEvent}`);
      return timeA - timeB;
    });
  } else if (sortField === "facility") {
    sortedDatas = sortedDatas.sort((a, b) =>
      a.FacilityofEvent.localeCompare(b.FacilityofEvent)
    );
  } else if (sortField === "college") {
    sortedDatas = sortedDatas.sort((a, b) =>
      a.CollegeAffiliation.localeCompare(b.CollegeAffiliation)
    );
  } else if (sortField === "status") {
    sortedDatas = sortedDatas.sort((a, b) =>
      a.eventStatus.localeCompare(b.eventStatus)
    );
  }

  return (
    <div className="booking_list_bg">
      <div id="booking_list ">
        <h2>Booking List</h2>
        <div className="flex-row">
          <p>Sort_By</p>
          <select
            name=""
            className="affiliation_opt"
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="time">Time</option>
            <option value="facility">Facility</option>
            <option value="status">Status</option>
            <option value="college">College</option>
          </select>
        </div>
        <hr />
        <div className="flex-row header_names">
          <div>Event Name</div>
          <div>Purpose</div>
          <div>Venue</div>
          <div>Time</div>
          <div>Date</div>
          <div>College</div>
          <div>Venue</div>
          <div>Status</div>
        </div>
        <div id="booking-column">
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {sortedDatas &&
            sortedDatas.map((item, index) => (
              <Eventcard key={index} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
