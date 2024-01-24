import "./eventcard.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export default function Eventcard({ data }) {
  const [eventName, setEventName] = useState();
  const [eventVenue, seteventVenue] = useState();

  useEffect(() => {
    if (data?.NameofEvent) {
      setEventName(data.NameofEvent);
    }
  }, []);
  useEffect(() => {
    if (data?.FacilityofEvent) {
      seteventVenue(data.FacilityofEvent);
    }
  }, []);

  if (data.id === undefined) {
    data.id = Math.random().toString(36).substring(7);
  }
  const statuses = ["Pending", "Approved", "Denied"];
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleDoubleClick = () => {
    setIsEditing(true);
  };
  const handleInputBlur = () => {
    setIsEditing(false);
  };
  const handleInputChange = (event) => {
    // Update the data object with the new value
    // data.NameofEvent = event.target.value;
    setEventName(event.target.value);
  };

  const initialStatusIndex = statuses.indexOf(data.eventStatus);
  const [cycleIndex, setCycleIndex] = useState(
    initialStatusIndex >= 0 ? initialStatusIndex : 0
  );
  if (!data) {
    return null;
  }

  const {
    NameofEvent,
    AdressofEvent,
    FacilityofEvent,
    StartingTimeofEvent,
    PurposeofEvent,
    DateofEvent,
    EndingTimeofEvent,
    CollegeAffiliation,
  } = data;
  const currentStatus = statuses[cycleIndex];
  // CHANGING OF EVENT STATUS
  const handleStatusChange = async () => {
    setCycleIndex((prevIndex) => (prevIndex + 1) % 3);

    // Update the event in the database
    const updatedEvent = {
      ...data,
      eventStatus: statuses[cycleIndex], // Use the new status
    };
    console.log("ID: ", data.id); // Log the ID
    console.log("Updated event: ", updatedEvent); // Log the updated event
    const response = await fetch(`http://localhost:3002/event/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    });

    if (!response.ok) {
      console.log("Response: ", response); // Log the response
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      console.log("Event updated successfully");
      console.log(`New eventStatus: ${currentStatus}`);
    }
  };
  // END OF CHANGE EVENT STATUS
  //
  // DELETE FUNCTION
  // const handleDelete = async () => {
  //   const response = await fetch(`http://localhost:3002/event/${data.id}`, {
  //     method: "DELETE",
  //   });
  //   console.log(data.id);
  //   if (!response.ok) {
  //     console.log("Response: ", response); // Log the response
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   } else {
  //     console.log("Event deleted successfully");
  //     setIsDeleted(true); // Set isDeleted to true after successful deletion
  //   }
  // };

  // END OF DELETE FUNCTION
  const deleted_this = (e) => {
    e.preventDefault();
    setIsDeleted((current) => !current);
  };
  return (
    <>
      <div
        className={`eventcardbox flex-row display-even ${
          isDeleted ? "deleted_row" : ""
        }`}
      >
        <>
          <div className="event_card_components flex-row">
            <div onDoubleClick={handleDoubleClick}>
              {isEditing ? (
                <input
                  type="text"
                  value={eventName}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              ) : (
                <div>{eventName}</div>
              )}
            </div>

            <div> {PurposeofEvent}</div>
            <div>{FacilityofEvent}</div>
            <div>
              {StartingTimeofEvent} - {EndingTimeofEvent}
            </div>
            <div>{DateofEvent}</div>
            <div>{CollegeAffiliation}</div>
            <div>{AdressofEvent}</div>
            <div className="flex-row eventstatus" onClick={handleStatusChange}>
              <div id={`circle_status_${currentStatus.toLowerCase()}`}></div>
              <div id="cirlce_margin">{currentStatus}</div>
            </div>
            <div>
              <button onClick={deleted_this}>Delete</button>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
Eventcard.propTypes = {
  data: PropTypes.shape({
    NameofEvent: PropTypes.string,
    AdressofEvent: PropTypes.string,
    FacilityofEvent: PropTypes.string,
    StartingTimeofEvent: PropTypes.string,
    PurposeofEvent: PropTypes.string,
    DateofEvent: PropTypes.string,
    EndingTimeofEvent: PropTypes.string,
    eventStatus: PropTypes.string,
    CollegeAffiliation: PropTypes.string,
    id: PropTypes.any,
  }).isRequired,
};
