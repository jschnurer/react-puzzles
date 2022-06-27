import "./styles.css";
import React, { useState } from "react";

// SAMPLE 3
// Update this example so that after the component renders the first time
// it waits 2 seconds and then sets the number to 17.

// Additionally, if the number is not yet set, the span should instead
// display the message "Loading..."

const PendingOrders = () => {
  const [number, setNumber] = useState();

  return (
    <div>
      <p>
        <span>There are {number} pending orders.</span>
      </p>
    </div>
  );
};

export default PendingOrders;
