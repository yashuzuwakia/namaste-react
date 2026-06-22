import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  return (
    <div className="user-content">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: iamyash@gmnail.com</h4>
    </div>
  );
};

export default User;
