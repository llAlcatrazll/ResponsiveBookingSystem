import { Outlet } from "react-router";
import NavComponent from "../../../Components/Test/NavComponent";

export default function LandingPage() {
  return (
    <main>
      <NavComponent />
      <Outlet />
    </main>
  );
}
