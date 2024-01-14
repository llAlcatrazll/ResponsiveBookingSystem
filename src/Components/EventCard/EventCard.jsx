import "./eventcard.css";
import PropTypes from "prop-types";

export default function Eventcard({ data }) {
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
    CollegeAffiliation,
  } = data;

  return (
    <>
      <div className="eventcardbox flex-row display-even">
        <>
          <div className="event_card_components flex-row">
            <div>{NameofEvent}</div>
            <div> {PurposeofEvent}</div>
            <div>{FacilityofEvent}</div>
            <div>
              {StartingTimeofEvent} - {EndingTimeofEvent}
            </div>
            <div>{DateofEvent}</div>
            <div>{CollegeAffiliation}</div>
            <div>{AdressofEvent}</div>
            <div className="flex-row eventstatus">
              <div id="circle_status"></div>
              <div id="cirlce_margin"> {eventStatus}</div>
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
  }).isRequired,
};
