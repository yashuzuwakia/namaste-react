import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import MenuList from "./MenuList";

export default function RestaurantMenu() {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResData(json.data);
  };

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resData?.cards?.[2]?.card?.card?.info;

  const { cards } =
    resData?.cards?.[5].groupedCard?.cardGroupMap?.REGULAR || [];

  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>
      <h3>Menu</h3>
      <MenuList cards={cards} />
    </div>
  );
}
