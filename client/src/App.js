import "./App.css";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import AddReview from "./AddReview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  useEffect(() => {
    setCurrentAccount(window.localStorage.getItem("currentAccount"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentAccount", currentAccount);
  }, [currentAccount]);
  return (
    <Router>
      <Nav
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <Routes>
        <Route
          path="/login"
          element={<Login setCurrentAccount={setCurrentAccount} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addreview"
          element={
            currentAccount && <AddReview currentAccount={currentAccount} />
          }
        />
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
