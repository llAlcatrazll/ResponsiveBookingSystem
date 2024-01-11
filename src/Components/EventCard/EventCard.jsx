import "./eventcard.css";

export default function Eventcard(data) {
  console.log(data);
  /**  PurposeofEvent,
    DateofEvent,     */
  const {
    NameofEvent,

    FacilityofEvent,
    // StartingTimeofEvent,
    // EndingTimeofEvent,
    // eventStatus,
  } = data.data;
  /*   
    AdressofEvent,
    EndingTimeofEvent,

    StartingTimeofEvent,
    eventStatus,*/

  return (
    <>
      <div className="eventcardbox flex-row">
        <div>{NameofEvent}</div>
        <div className="display-flex--column">
          <div>{FacilityofEvent}</div>
          <div>{}</div>
        </div>
      </div>
    </>
  );
}
