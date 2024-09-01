import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Drugs from "./components/Drugs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/drug" />} />
          <Route path="/drug" element={<Search />} />
          <Route path="/drugDetails" element={<Drugs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
