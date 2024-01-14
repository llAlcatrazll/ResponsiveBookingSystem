import "./eventcard.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Eventcard({ data }) {
  const [openCard, setopenCard] = useState(true);

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
    eventStatus,
  } = data;

  const Value_Reverser = (setter) => {
    setter((current) => !current);
  };
  return (
    <>
      <div
        className="eventcardbox flex-row display-even"
        onClick={() => Value_Reverser(setopenCard)}
      >
        {openCard ? (
          <>
            {" "}
            <div id="eventName">{NameofEvent}</div>
            <div id="time_event">
              {StartingTimeofEvent} - {EndingTimeofEvent}
            </div>
            <div className="flex-row">
              <div id="circle_status"></div>
              <div> {eventStatus}</div>
            </div>
            <div id="facility">{FacilityofEvent}</div>
          </>
        ) : (
          <>
            <div id="eventName flex-col">
              <div>{NameofEvent}</div>
              <div> {PurposeofEvent}</div>
            </div>
            <div className="flex-col">
              <div className="flex-row">
                {StartingTimeofEvent} - {EndingTimeofEvent}
              </div>
              <div>{AdressofEvent}</div>
              <div className="flex-row"></div>
            </div>
            <div className="flex-row">
              <div id="circle_status"></div>
              <div> {eventStatus}</div>
            </div>
            <div className="flex-col">
              <div>{FacilityofEvent}</div>
              <div>{DateofEvent}</div>
            </div>
          </>
        )}
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
  }).isRequired,
};
