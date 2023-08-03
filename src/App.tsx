import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MyRoutes from "./Routes";

import { useEffect, useState } from "react";
import { UserContext } from "./jsFiles/UserContext.js";
import axios from "axios";

function App() {
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
        {/* {thisUser ? (
          <> */}
            <Header />
            <MyRoutes />
            <Footer />
          {/* </>
        ) : (
          <p>Please Wait...</p>
        )} */}
      </UserContext.Provider>
    </>
  );
}

export default App;
