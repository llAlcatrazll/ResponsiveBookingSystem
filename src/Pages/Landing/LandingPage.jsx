import "./landing.css";
import CJC_Logo_LandingPage from "../../assets/CJC_Logo.png";
import User_Profile_Logo from "../../assets/COE.jpg";
import { useState } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import ActivityCalendarPage from "../../Components/TopNavComponents/ActivityCalendar/ActivityCalendarPage";
import BookingListPage from "../../Components/TopNavComponents/BookingList/BookingListPage";
import CreateBookingPage from "../../Components/TopNavComponents/CreateBooking/CreateBookingPage";
import SearchPage from "../../Components/TopNavComponents/Search/SearchPage";

const UserName = "College of Engineering";
export default function LandingPage() {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 425px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 426px) and (max-width: 768px)",
  });
  const isPC = useMediaQuery({
    query: "(min-width: 769px)",
  });

  const [UserOptions, setUserOptions] = useState(false);
  const [PageOptions, setPageOptions] = useState(false);
  const Value_Reverser = (setter) => {
    setter((current) => !current);
  };
  // Page Changer
  const [CreateBooking, setCreateBooking] = useState(true);
  const [Calendar, setCalendar] = useState(false);
  const [Booking, setBooking] = useState(false);
  const [Search, setSearch] = useState(false);
  const Page_Changer = (selectedValue) => {
    setCalendar(selectedValue === "calendar");
    setBooking(selectedValue === "list");
    setCreateBooking(selectedValue === "create");
    setSearch(selectedValue === "search");
  };
  // Change page and close option tab
  function PageSelectClose(page) {
    Value_Reverser(setPageOptions);
    Page_Changer(page);
  }
  function checkActiveAndChangeId() {
    let createBookingItem = document.getElementById("create");
    if (createBookingItem.classList.contains("active")) {
      createBookingItem.id = "newId"; // Change the id to whatever you want
    }
  }
  window.onload = checkActiveAndChangeId;
  return (
    <div className="LandingPage_Background_Image bg-format vw100">
      <div className="Background_Darknerner flex-col vw100">
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* PAGE TOP NAV */}
        <MediaQuery minWidth={858}>
          <header className="TopNav_Header flex-row">
            <div className="Left_TopNav_Divsion flex-row">
              <img src={CJC_Logo_LandingPage} id="TopNav_CJC_Logo" />
              <div className="Left_TopNav_li_Spacer flex-row">
                <li onClick={() => Page_Changer("create")}>Create Booking</li>
                <li onClick={() => Page_Changer("list")}>Booking List</li>
                <li onClick={() => Page_Changer("search")}>Search</li>
                <li onClick={() => Page_Changer("calendar")}>
                  Activity Calendar
                </li>
              </div>
            </div>
            <div
              className="User_Nav_Profile_Bar flex-row wh-min"
              onClick={() => Value_Reverser(setUserOptions)}
            >
              <p>{UserName}</p>
              <img src={User_Profile_Logo} id="User_Profile_Logo_Img" />
            </div>
          </header>
        </MediaQuery>
        {/* Hide TopNav items to a toggle bar */}
        <MediaQuery maxWidth={857}>
          <header className="TopNav_Header flex-row">
            <div className="Left_TopNav_Divsion flex-row">
              <img src={CJC_Logo_LandingPage} id="TopNav_CJC_Logo" />
            </div>
            <div
              className="User_Nav_Profile_Bar flex-row wh-min"
              onClick={() => Value_Reverser(setUserOptions)}
            >
              <p>{UserName}</p>
              <img src={User_Profile_Logo} id="User_Profile_Logo_Img" />
            </div>
          </header>
          <div
            className="Page_Option_Toggle"
            onClick={() => Value_Reverser(setPageOptions)}
          >
            =
          </div>
          {PageOptions ? (
            <>
              <div className="Page_Option_Pane flex-col ">
                <li onClick={() => PageSelectClose("create")}>
                  Create Booking
                </li>
                <li onClick={() => PageSelectClose("list")}>Booking List</li>
                <li onClick={() => PageSelectClose("search")}>Search</li>
                <li onClick={() => PageSelectClose("calendar")}>
                  Activity Calendar
                </li>
              </div>
            </>
          ) : (
            <></>
          )}
        </MediaQuery>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* BODY OF THE PAGE */}
        <div
          className={
            isPC ? (
              "Page_OutPut Laptop_display wh-auto overflow_y"
            ) : isTablet ? (
              "Page_OutPut Tablet_display wh-auto overflow_y"
            ) : isMobile ? (
              "Page_OutPut Phone_dispaly wh-auto overflow_y"
            ) : (
              <></>
            )
          }
        >
          {Calendar && <ActivityCalendarPage />}
          {Booking && <BookingListPage />}
          {CreateBooking && <CreateBookingPage />}
          {Search && <SearchPage />}
        </div>
        {/* OPTION PANE */}
        <div id="User_Interchanged_Display_Items">
          {UserOptions ? (
            <>
              <div id="User_Option_Box">Sample Option</div>
            </>
          ) : (
            <> </>
          )}
        </div>
      </div>
    </div>
  );
}
