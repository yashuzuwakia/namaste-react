import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

export default function RestaurantMenu() {
  const { resId } = useParams();

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
      {categories.map((categorie) => {
        return <RestaurantCategory data={categorie?.card?.card} />;
      })}
    </div>
  );
}
