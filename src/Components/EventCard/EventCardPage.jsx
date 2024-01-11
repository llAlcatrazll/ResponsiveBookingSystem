import "./eventcard.css";

const EventCardPage = (data) => {
  console.log(data);
  const {
    FacilityofEvent,
    AdressofEvent,

    EndingTimeofEvent,
    NameofEvent,

    StartingTimeofEvent,
    eventStatus,
  } = data;

  return (
    <div>
      <div>
        <div>
          <div>
            {NameofEvent}
            {AdressofEvent}
          </div>
        </div>
        <div className="display-flex--row">{FacilityofEvent}</div>
        <div>{Date}</div>
        <div className="display-flex--row">
          {StartingTimeofEvent} - {EndingTimeofEvent}
        </div>
        <button>{eventStatus}</button>
      </div>
    </div>
  );
};
export default EventCardPage;
