import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resData = useRestaurantMenu(resId);

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resData?.cards?.[2]?.card?.card?.info;

  const categories =
    resData?.cards?.[5].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (a) =>
        a.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((categorie, index) => {
        return (
          <RestaurantCategory
            key={categorie?.card?.card?.categoryId}
            data={categorie?.card?.card}
            showItemList={index === showIndex ? true : false}
            setShowIndex={() =>
              index !== showIndex ? setShowIndex(index) : setShowIndex(null)
            }
          />
        );
      })}
    </div>
  );
}
