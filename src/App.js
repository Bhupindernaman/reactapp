import React, { useEffect, useState } from "react";
import {auth} from "./config.js";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import AuthContext from "./AuthContext";
import SignIn from "./components/SignIn";
import CalculatorApp from "./pages/CalculatorApp";
import Weather from "./pages/Weather";
import NewsData from "./pages/NewsFeed";
import Recipe from "./pages/Recipe";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setLoading(true);
   onAuthStateChanged(auth,(user) => {
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setLoading(false);
    }else {
      setCurrentUser({});
        setIsLoggedIn(false);
        setLoading(false);
      
    }
    });
  },[]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={[isLoggedIn,currentUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="/news-feed" element={<NewsData />} />
          <Route path="/food-feed" element={<Recipe />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;