import React, { useEffect, useState } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        console.log("Pretty format:", JSON.stringify(data, null, 2)); // 👈 Optional: nicely formatted
        setUserData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(userData).length > 0 ? (
    <div>
      <h1>Data Returned</h1>
      <h2>First Name: {userData.results[0].name.first}</h2>
      <h2>Last Name: {userData.results[0].name.last}</h2>
    </div>
  ) : (
    <div>fetching data .....{userData}</div>
  );
}
