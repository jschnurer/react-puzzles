import "./styles.css";
import React, { useState } from "react";

// SAMPLE 1
// There are errors in this component. Find and fix them all.

const WelcomeMessage = () => {
  const [user] = useState({
    name: "Sang"
  });

  const changeName = () => {
    user.name = "Justin";
  };

  return (
    <div>
      <h2>Welcome, {user}!</h2>

      <button onClick={this.changeName()}>Change the user's name</button>
    </div>
  );
};

export default WelcomeMessage;
