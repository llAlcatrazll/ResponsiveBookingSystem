import { Link } from "react-router-dom";
import CJC_Logo from "../../assets/CJC_Logo.png";

export default function NavComponent() {
  return (
    <header style={{ display: "flex", border: "1px solid black" }}>
      <img
        src={CJC_Logo}
        alt="CJC Logo"
        style={{ width: "50px", height: "50%" }}
      />
      <nav>
        <Link to={"/Landingpage-test"}> CreateBooking </Link>
        <Link to={"/Landingpage-test/BookingList"}> BookingList </Link>{" "}
        <Link to={"/Landingpage-test/Search"}> Search </Link>
      </nav>
    </header>
  );
}
