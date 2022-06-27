import "./styles.css";
import React from "react";

// SAMPLE 4
// Update the example to import the user data from "userData.json" and render
// each user as a UserRow component.

// Output an alphabetized list of users in the following format:
// id - name (on the first line)
// city, state, country (on the second line)

// Do not show the undefined values of the address for the user. For example,
// if the user has city and country but no state, output "city, country".

const UserList = () => {
  return <div className="list"></div>;
};

export default UserList;

function UserRow({ user }) {
  return <div className="user"></div>;
}
