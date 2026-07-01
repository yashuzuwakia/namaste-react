import { useContext, useRef } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props.resInfo.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-62.5 rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        className="rounded-lg h-40 w-80"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-2lg">{name}</h3>
      <h4 className="text-[14px]  text-gray-500">{cuisines.join(", ")}</h4>
      <div className="flex justify-between mt-2  text-gray-500">
        <h4 className="text-[14px] bg-green-300 px-2 rounded-lg text-gray-950">
          {avgRating}⭐
        </h4>
        <h4 className="text-[14px]">{sla.deliveryTime} MINS</h4>
        <h4 className="text-[14px]">{costForTwo.toUpperCase()}</h4>
      </div>
      <p className="text=[1px]">User Name: {loggedInUser}</p>
    </div>
  );
};

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="m-2 p-2 bg-black text-white rounded-lg absolute ">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
