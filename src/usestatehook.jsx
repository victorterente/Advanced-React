import { useState } from "react";

function useStateHook() {
  const [restaurantName, setRestaurantName] = useState({
    firstName: "Big",
    lastName: "Lemon",
  });
  function handlechange() {
    setRestaurantName((prevstate) => {
      return { ...prevstate, firstName: "Little" };
    });
  }

  return (
    <div>
      <h2>
        {restaurantName.firstName} {restaurantName.lastName}
      </h2>
      <button onClick={handlechange}>Change Name to Little Lemon</button>
    </div>
  );
}

export default useStateHook;
