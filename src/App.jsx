import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import LoginPage from "./Pages/Login/LoginPage";

import TestLandingPage from "./Pages/Test/Landing/LandingPage";
import CreateBooking from "./Components/Test/LandingPageComponent/CreateBooking";
import BookingList from "./Components/Test/LandingPageComponent/BookingList";
import Search from "./Components/Test/LandingPageComponent/Search";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/" element={<LoginPage />} />
      {/* Test Route */}
      <Route path="/Landingpage-test" element={<TestLandingPage />}>
        <Route path="" element={<CreateBooking />} />
        <Route path="BookingList" element={<BookingList />} />
        <Route path="Search" element={<Search />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
