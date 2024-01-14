import { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class ActivityCalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3002/event", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      if (!Array.isArray(responseData.data)) {
        console.error(
          "Expected an array but received",
          typeof responseData.data,
          responseData.data
        );
        return;
      }

      const formattedEvents = responseData.data.map((item) => {
        const start = moment(`${item.DateofEvent}T${item.StartingTimeofEvent}`);
        const end = moment(`${item.DateofEvent}T${item.EndingTimeofEvent}`);
        return {
          start: start.toDate(),
          end: end.toDate(),
          title: item.NameofEvent,
        };
      });
      this.setState({ events: formattedEvents });
    };
    fetchData();
  }

  onEventResize = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default ActivityCalendarPage;
