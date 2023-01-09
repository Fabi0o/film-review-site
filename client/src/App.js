import "./App.css";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
