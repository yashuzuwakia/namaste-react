import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import MenuList from "./MenuList";

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
