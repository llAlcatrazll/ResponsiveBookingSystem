import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import LoginPage from "./Pages/Login/LoginPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
