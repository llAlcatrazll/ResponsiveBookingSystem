import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import LoginPage from "./Pages/Login/LoginPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/" element={<LoginPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
