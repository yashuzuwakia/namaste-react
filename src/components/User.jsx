import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Heloo");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-content">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: iamyash@gmnail.com</h4>
    </div>
  );
};

export default User;
