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

  const { cards } =
    resData?.cards?.[5].groupedCard?.cardGroupMap?.REGULAR || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <RestaurantCategory cards={cards} />
    </div>
  );
}
