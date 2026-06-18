import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

export default function RestaurantMenu() {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.0051498&lng=73.7676967&restaurantId=${resId}`,
    );
    const json = await response.json();
    setResData(json.data);
  };

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resData?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards?.[5].groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card || [];

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      <h3>Menu</h3>
      <ul>
        {" "}
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
}
