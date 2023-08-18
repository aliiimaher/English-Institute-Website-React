import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MyRoutes from "./Routes";

import { useEffect, useState } from "react";
import { UserContext } from "./jsFiles/UserContext.js";
import axios from "axios";
import Repair from "./components/Repair.js";

function App() {
  // middle ware handling
  const [repairMode, setRepairMode] = useState(false);

  const [thisUser, setThisUser] = useState(null);
  const fetchUser = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Token " + window.localStorage.getItem("token"),
      };

      const response = await axios.get("http://localhost:8000/user/me", {
        headers: headers,
      });

      setThisUser(response.data);
    } catch (error) {
      setRepairMode(true);
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    if (thisUser !== null) {
      console.log(thisUser);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={thisUser ? thisUser : {}}>
        {repairMode ? (
          <Repair />
        ) : (
          <>
            <Header />
            <div className="app-container">
              <MyRoutes />
            </div>
            <Footer />
          </>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
