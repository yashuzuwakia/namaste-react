import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border bg-linear-to-r from-gray-950 to-gray-800 shadow-lg m-5 text-amber-500">
      <div className="border">
        <img className="w-55" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "😡"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery App</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() =>
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
